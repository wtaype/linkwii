import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(initializeApp({
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
}, 'pub'));

const slug = location.pathname.replace(/^\/|\/$/g, '').toLowerCase();
const root = document.getElementById('pw_root');
const skel = document.getElementById('pw_skeleton');

const ico = (url, i) => {
  if (i) return `<i class="${i}"></i>`;
  if (url.includes('instagram.com')) return '<i class="fab fa-instagram" style="color:#E4405F"></i>';
  if (url.includes('tiktok.com'))    return '<i class="fab fa-tiktok"></i>';
  if (url.includes('youtube.com'))   return '<i class="fab fa-youtube" style="color:#FF0000"></i>';
  if (url.includes('wa.me') || url.includes('whatsapp')) return '<i class="fab fa-whatsapp" style="color:#25D366"></i>';
  if (url.includes('facebook.com'))  return '<i class="fab fa-facebook" style="color:#1877F2"></i>';
  if (url.includes('twitter.com') || url.includes('x.com')) return '<i class="fab fa-x-twitter"></i>';
  return '<i class="fas fa-link"></i>';
};

const meta = (p, c) => {
  let el = document.querySelector(`meta[property="${p}"]`);
  if (!el) { el = Object.assign(document.createElement('meta'), { property: p }); document.head.appendChild(el); }
  el.content = c;
};

const msg = (emo, h, p, cta) => `
  <div class="pw_msg">
    <div class="pw_msg_ico">${emo}</div>
    <h2>${h}</h2><p>${p}</p>
    ${cta}
  </div>`;

function mostrar(p) {
  const links = (p.links || []).filter(l => l.titulo && l.url);
  const html = links.length
    ? links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="pw_btn"><span class="pw_btn_ico">${ico(l.url, l.icono)}</span><span>${l.titulo}</span></a>`).join('')
    : `<p class="pw_empty">Aún no hay enlaces aquí.</p>`;

  skel.style.cssText = 'opacity:0;transition:opacity .22s';
  setTimeout(() => {
    skel.remove();
    const d = document.createElement('div');
    d.id = 'pw_perfil';
    d.style.opacity = '0';
    d.innerHTML = `
      <img src="${p.logo || '/smile.avif'}" alt="${p.slug || slug}" class="pw_avatar" onerror="this.src='/smile.avif'">
      <h1 class="pw_nombre">${p.nombre || '@' + slug}</h1>
      ${p.desc ? `<p class="pw_bio">${p.desc}</p>` : ''}
      <div class="pw_links">${html}</div>
      <a href="/" class="pw_marca"><img src="/smile.avif" alt="Linkwii"> Crea tu Linkwii gratis</a>`;
    root.appendChild(d);

    // FontAwesome (lazy, solo si hay links con iconos)
    if (links.length) {
      const fa = document.createElement('link');
      fa.rel = 'stylesheet';
      fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
      document.head.appendChild(fa);
    }

    requestAnimationFrame(() => { d.style.cssText = 'opacity:1;transition:opacity .3s'; });

    document.title = `${p.nombre || slug} | Linkwii`;
    meta('og:title',       `${p.nombre || slug} | Linkwii`);
    meta('og:description', p.desc || `Todos los links de ${slug}`);
    if (p.logo) meta('og:image', p.logo);
  }, 220);
}

async function init() {
  if (!slug) { root.innerHTML = msg('🔍', '¿Buscas tu Linkwii?', 'Visita linkwii.com para crear tu perfil.', `<a href="/" class="pw_cta_btn">Ir al inicio</a>`); return; }
  try {
    const snap = await getDoc(doc(db, 'linkwiis', slug));
    if (!snap.exists()) {
      root.innerHTML = msg('🔍', 'Esta página no existe', `El enlace <strong>/${slug}</strong> aún no ha sido reclamado.`, `<a href="/p/crear" class="pw_cta_btn">Reclama tu Linkwii</a>`);
    } else if (!snap.data().estado) {
      root.innerHTML = msg('⏸️', 'Perfil pausado', `El creador de <strong>/${slug}</strong> pausó este enlace.`, `<a href="/" class="pw_cta_btn">Volver al inicio</a>`);
    } else {
      mostrar(snap.data());
    }
  } catch {
    root.innerHTML = msg('⚠️', 'Error de conexión', 'Revisa tu conexión e intenta de nuevo.', `<button onclick="location.reload()" class="pw_cta_btn">Reintentar</button>`);
  }
}

init();
