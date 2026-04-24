import { defineConfig } from 'vite';

// Plugin: Unifica y Minifica el HTML y sus scripts (Zero JS Requests)
const mpaOptimizerPlugin = {
  name: 'mpa-optimizer',
  enforce: 'post',
  generateBundle(_, bundle) {
    for (const name in bundle) {
      const file = bundle[name];
      if (name.endsWith('.html') && file.type === 'asset') {
        let html = file.source;

        // 1. Minificar el HTML (limpiamos saltos y espacios inútiles ANTES de inyectar JS)
        html = html
          .replace(/\n\s*/g, '')
          .replace(/>\s+</g, '><')
          .replace(/\s{2,}/g, ' ')
          .replace(/<!--.*?-->/g, '');

        // 2. Inyección del JS directamente en el HTML del perfil
        if (name === 'perfil.html') {
          // Vite extrae el script en línea a un archivo externo en producción. Lo buscamos y lo volvemos a inyectar en línea.
          const scriptMatches = html.match(/<script[^>]*type="module"[^>]*src="\/assets\/([^"]+)"[^>]*><\/script>/g) || html.match(/<script[^>]*src="\/assets\/([^"]+)"[^>]*type="module"[^>]*><\/script>/g);
          
          if (scriptMatches) {
            scriptMatches.forEach(scriptTag => {
              const srcMatch = scriptTag.match(/src="\/assets\/([^"]+)"/);
              if (srcMatch) {
                const fileName = 'assets/' + srcMatch[1];
                const chunk = bundle[fileName];
                if (chunk && chunk.type === 'chunk') {
                  // Reemplazamos la etiqueta externa por el script en línea real
                  html = html.replace(scriptTag, `<script type="module">${chunk.code}</script>`);
                  // Eliminamos etiquetas link de precarga para este módulo si existen
                  html = html.replace(/<link rel="modulepreload"[^>]*>/g, '');
                  // ¡Magia! Borramos el archivo físico generado.
                  delete bundle[fileName];
                }
              }
            });
          }
        }

        // Guardamos el HTML final super compactado
        file.source = html.trim();
      }
    }
  }
};

// Plugin para DEV: enruta /:usuario → perfil.html
const mpaRouterPlugin = {
  name: 'mpa-profile-router',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = (req.url || '/').split('?')[0];
      const esDashboard = url === '/' || url.startsWith('/p/') || url.startsWith('/@') || url.startsWith('/node_modules') || url.includes('.');
      if (esDashboard) return next();
      req.url = '/perfil.html';
      next();
    });
  }
};

export default defineConfig({
  base: '/',
  plugins: [mpaRouterPlugin, mpaOptimizerPlugin],
  build: {
    outDir: 'dist',
    sourcemap: false,
    modulePreload: false, // Desactiva la inyección automática de modulepreload
    rollupOptions: {
      input: {
        main: 'index.html',
        perfil: 'perfil.html',
      },
      output: {
        // Separa el runtime para el dashboard, pero aísla el perfil en su propio chunk (para luego inyectarlo)
        manualChunks: (id) => {
          if (id.includes('node_modules')) return id.includes('firebase') ? 'firebase' : 'vendor';
        }
      }
    }
  },
  publicDir: 'public'
});