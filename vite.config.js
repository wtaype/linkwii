import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const prod = mode === 'production';
  return {
    base: '/',
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'esbuild',
      target: 'esnext',
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
      reportCompressedSize: false,
      rollupOptions: {
        input: 'index.html',
        output: {
          manualChunks: id => {
            if (id.includes('node_modules')) return id.includes('firebase') ? 'firebase' : 'vendor';
          }
        },
        plugins: [{
          name: 'minify-html',
          generateBundle(_, b) {
            for (let f in b) if (f.endsWith('.html') && b[f].type === 'asset')
              b[f].source = b[f].source.replace(/\n\s*/g, '').replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').replace(/<!--.*?-->/g, '').trim();
          }
        }]
      },
      esbuildOptions: {
        drop: prod ? ['console', 'debugger'] : []
      }
    },
    publicDir: 'public'
  };
});