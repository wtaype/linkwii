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
          // Buscamos el trozo de JS que Rollup/Vite generó para el perfil
          const jsChunk = Object.values(bundle).find(f => f.type === 'chunk' && f.facadeModuleId?.includes('perfilPublico.js'));
          if (jsChunk) {
            // Reemplazamos la etiqueta externa por el script en línea
            html = html.replace(
              /<script[^>]*src="[^"]*"[^>]*><\/script>/,
              `<script type="module">${jsChunk.code}</script>`
            );
            // Eliminamos etiquetas link de precarga para este módulo
            html = html.replace(/<link rel="modulepreload"[^>]*>/g, '');
            // ¡Magia! Borramos el archivo físico generado. Ya no es necesario.
            delete bundle[jsChunk.fileName];
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
          if (id.includes('perfilPublico.js')) return 'perfil';
        }
      }
    }
  },
  publicDir: 'public'
});