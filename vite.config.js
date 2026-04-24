import { defineConfig } from 'vite';

// Plugin: Comprime HTML e inyecta JS en línea para máxima velocidad (Zero Requests)
const mpaOptimizerPlugin = {
  name: 'mpa-optimizer',
  enforce: 'post',
  generateBundle(_, bundle) {
    for (const name in bundle) {
      const file = bundle[name];
      if (name.endsWith('.html') && file.type === 'asset') {
        let html = file.source.replace(/\n\s*/g, '').replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').replace(/<!--.*?-->/g, '');
        if (name === 'perfil.html') {
          const m = html.match(/<script[^>]*type="module"[^>]*src="\/assets\/([^"]+)"[^>]*><\/script>/g) || html.match(/<script[^>]*src="\/assets\/([^"]+)"[^>]*type="module"[^>]*><\/script>/g);
          if (m) m.forEach(t => {
            const s = t.match(/src="\/assets\/([^"]+)"/);
            if (s && bundle['assets/' + s[1]]?.type === 'chunk') {
              html = html.replace(t, `<script type="module">${bundle['assets/' + s[1]].code}</script>`).replace(/<link rel="modulepreload"[^>]*>/g, '');
              delete bundle['assets/' + s[1]];
            }
          });
        }
        file.source = html.trim();
      }
    }
  }
};

// Plugin: Enruta dinámicamente perfiles (/:usuario) hacia perfil.html en desarrollo
const mpaRouterPlugin = {
  name: 'mpa-profile-router',
  configureServer: (s) => {
    s.middlewares.use((req, res, next) => {
      const u = (req.url || '/').split('?')[0];
      if (u === '/' || u.startsWith('/p/') || u.startsWith('/@') || u.startsWith('/node_modules') || u.includes('.')) return next();
      req.url = '/perfil.html';
      next();
    });
  }
};

// Configuración principal de compilación y empaquetado Vite
export default defineConfig({
  base: '/',
  plugins: [mpaRouterPlugin, mpaOptimizerPlugin],
  build: {
    outDir: 'dist',
    sourcemap: false,
    modulePreload: false,
    rollupOptions: {
      input: { main: 'index.html', perfil: 'perfil.html' },
      output: { manualChunks: (id) => id.includes('node_modules') ? (id.includes('firebase') ? 'firebase' : 'vendor') : undefined }
    }
  },
  publicDir: 'public'
});