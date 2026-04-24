import { defineConfig } from 'vite';

// Plugin: Unifica y Minifica el HTML y sus scripts (Zero JS Requests)
const mpaOptimizerPlugin = {
  name: 'mpa-optimizer',
  // Minifica el HTML generado
  generateBundle(_, bundle) {
    for (const name in bundle) {
      const file = bundle[name];
      if (name.endsWith('.html') && file.type === 'asset') {
        let html = file.source;

        // 1. Buscar el JS correspondiente a este HTML (si es perfil)
        if (name === 'perfil.html') {
          const jsChunk = Object.values(bundle).find(f => f.type === 'chunk' && f.facadeModuleId?.includes('perfilPublico.js'));
          if (jsChunk) {
            // Inyectamos el JS directamente en el HTML para 0 requests externos
            html = html.replace(
              /<script type="module" src=".*?"\s*><\/script>/,
              `<script type="module">${jsChunk.code}</script>`
            );
            // Eliminamos el precargado (ya no es necesario)
            html = html.replace(/<link rel="modulepreload" href=".*?">/g, '');
            // Borramos el archivo JS físico para que no ocupe espacio en dist
            delete bundle[jsChunk.fileName];
          }
        }

        // 2. Minificación agresiva
        file.source = html
          .replace(/\n\s*/g, '')
          .replace(/>\s+</g, '><')
          .replace(/\s{2,}/g, ' ')
          .replace(/<!--.*?-->/g, '')
          .trim();
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
    modulePreload: false, // Desactivamos preloads para tener control total
    rollupOptions: {
      input: {
        main: 'index.html',
        perfil: 'perfil.html',
      },
      output: {
        // Unificamos el runtime y evitamos que se separen pequeños trozos compartidos
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'firebase';
            return 'vendor';
          }
          // El perfil no debe compartir nada con el dashboard para ser 100% independiente
          if (id.includes('perfilPublico')) return 'perfil-script';
        }
      }
    }
  }
});