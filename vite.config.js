import { defineConfig } from 'vite';

// Plugin solo para BUILD: minifica los HTML generados
const minifyHtmlPlugin = {
  name: 'minify-html',
  generateBundle(_, b) {
    for (let f in b) if (f.endsWith('.html') && b[f].type === 'asset')
      b[f].source = b[f].source.replace(/\n\s*/g, '').replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').replace(/<!--.*?-->/g, '').trim();
  }
};

// Plugin para DEV: enruta /:usuario → perfil.html (como lo hace Firebase Hosting)
const mpaRouterPlugin = {
  name: 'mpa-profile-router',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = (req.url || '/').split('?')[0];
      // Dejar pasar: raíz, rutas del dashboard /p/*, assets con extensión, Vite internos
      const esDashboard =
        url === '/' ||
        url.startsWith('/p/') ||
        url.startsWith('/@') ||
        url.startsWith('/node_modules') ||
        url.includes('.');
      if (esDashboard) return next();
      // Cualquier ruta como /timewii, /wilder, etc → perfil.html
      req.url = '/perfil.html';
      next();
    });
  }
};

export default defineConfig({
  base: '/',
  // Plugins de nivel raíz: activos tanto en dev como en build
  plugins: [mpaRouterPlugin],
  build: {
    outDir: 'dist',
    sourcemap: false,
    modulePreload: false,
    rollupOptions: {
      input: {
        main:   'index.html',
        perfil: 'perfil.html',
      },
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) return id.includes('firebase') ? 'firebase' : 'vendor';
        }
      },
      plugins: [minifyHtmlPlugin]
    }
  },
  publicDir: 'public'
});