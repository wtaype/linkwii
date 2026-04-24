// Variables de entorno embebidas por Vite en build time
const PID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const KEY = import.meta.env.VITE_FIREBASE_API_KEY;

const slug = location.pathname.replace(/^\/|\/$/g, '').toLowerCase();
const root = document.getElementById('pw_root');
const skel = document.getElementById('pw_skeleton');

// ── Parsear respuesta tipada de Firestore REST ─────────────────────────────
function parseFS(fields = {}) {
  const o = {};
  for (const [k, v] of Object.entries(fields)) {
    const [type, val] = Object.entries(v)[0];
    if (type === 'stringValue')    o[k] = val;
    else if (type === 'booleanValue') o[k] = val;
    else if (type === 'integerValue') o[k] = Number(val);
    else if (type === 'arrayValue')   o[k] = (val.values || []).map(i => parseFS(i.mapValue?.fields || { v: i }));
    else if (type === 'mapValue')     o[k] = parseFS(val.fields || {});
    else o[k] = val;
  }
  return o;
}

// ── Íconos SVG inline (cero requests, cero KiB externos) ──────────────────
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="22" height="22" style="color:#E4405F"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  tiktok:    `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.86a8.23 8.23 0 0 0 4.83 1.55V7a4.85 4.85 0 0 1-1.06-.31z"/></svg>`,
  youtube:   `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" style="color:#FF0000"><path d="M23.5 6.19a3 3 0 0 0-2.12-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.57A3 3 0 0 0 .5 6.19 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 5.81 3 3 0 0 0 2.12 2.12C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.57a3 3 0 0 0 2.12-2.12A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.5-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z"/></svg>`,
  whatsapp:  `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" style="color:#25D366"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96s-.47-.15-.67.15-.76.96-.94 1.16-.34.22-.64.07a8.08 8.08 0 0 1-2.38-1.47 8.93 8.93 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.61s.3-.34.44-.52a2 2 0 0 0 .3-.5.55.55 0 0 0-.02-.52c-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57a1.1 1.1 0 0 0-.8.37A3.35 3.35 0 0 0 7 9.3a5.83 5.83 0 0 0 1.22 3.1A13.35 13.35 0 0 0 13.35 17a15.32 15.32 0 0 0 1.71.63 4.11 4.11 0 0 0 1.89.12 3.08 3.08 0 0 0 2.02-1.43 2.5 2.5 0 0 0 .17-1.43c-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.55 15.19L2 22l4.95-1.43A10 10 0 1 0 12 2z"/></svg>`,
  facebook:  `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" style="color:#1877F2"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>`,
  twitter:   `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  link:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
};

function getIcon(url, cls) {
  if (cls) return `<span class="pw_btn_ico">${ICONS.link}</span>`; // custom icon from DB
  if (url.includes('instagram.com')) return `<span class="pw_btn_ico">${ICONS.instagram}</span>`;
  if (url.includes('tiktok.com'))    return `<span class="pw_btn_ico">${ICONS.tiktok}</span>`;
  if (url.includes('youtube.com'))   return `<span class="pw_btn_ico">${ICONS.youtube}</span>`;
  if (url.includes('wa.me') || url.includes('whatsapp')) return `<span class="pw_btn_ico">${ICONS.whatsapp}</span>`;
  if (url.includes('facebook.com'))  return `<span class="pw_btn_ico">${ICONS.facebook}</span>`;
  if (url.includes('twitter.com') || url.includes('x.com')) return `<span class="pw_btn_ico">${ICONS.twitter}</span>`;
  return `<span class="pw_btn_ico">${ICONS.link}</span>`;
}

const meta = (p, c) => {
  let el = document.querySelector(`meta[property="${p}"]`);
  if (!el) { el = Object.assign(document.createElement('meta'), { property: p }); document.head.appendChild(el); }
  el.content = c;
};

const msg = (emo, h, p, cta) =>
  `<div class="pw_msg"><div class="pw_msg_ico">${emo}</div><h2>${h}</h2><p>${p}</p>${cta}</div>`;


const fmt = n => n >= 1e6 ? (n/1e6).toFixed(1).replace('.0','')+'M' : n >= 1e3 ? (n/1e3).toFixed(1).replace('.0','')+'K' : String(n||0);

function mostrar(d) {
  const links = (d.links || []).filter(l => l.titulo && l.url);

  const html = links.length
    ? links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="pw_btn">${getIcon(l.url, l.icono)}<span>${l.titulo}</span></a>`).join('')
    : `<p class="pw_empty">Aún no hay enlaces aquí.</p>`;

  skel.style.cssText = 'opacity:0;transition:opacity .2s';
  setTimeout(() => {
    skel.remove();
    const el = document.createElement('div');
    el.id = 'pw_perfil';
    el.style.opacity = '0';
    el.innerHTML = `
      <img src="${d.logo || '/smile.avif'}" alt="${d.slug || slug}" class="pw_avatar" width="96" height="96" onerror="this.src='/smile.avif'">
      <h1 class="pw_nombre">${d.nombre || '@' + slug}</h1>
      ${d.desc ? `<p class="pw_bio">${d.desc}</p>` : ''}
      <p class="pw_vistas" id="pw_vistas_cnt">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        ${fmt(d.vistas)} vistas
      </p>
      <div class="pw_links">${html}</div>
      <a href="/" class="pw_marca"><img src="/smile.avif" alt="Linkwii" width="20" height="20"> Crea tu Linkwii gratis</a>`;
    root.appendChild(el);
    requestAnimationFrame(() => { el.style.cssText = 'opacity:1;transition:opacity .28s'; });

    const n = d.nombre || slug;
    document.title = `${n} | Linkwii`;
    meta('og:title', `${n} | Linkwii`);
    meta('og:description', d.desc || `Todos los links de ${slug} en Linkwii`);
    meta('description', d.desc || `Todos los links de ${slug} en Linkwii`);
    if (d.logo) meta('og:image', d.logo);
  }, 200);
}

// ── Vistas: interacción-triggered + visibilitychange fallback ────────────────
function setupVistas(vistaActual) {
  const sk = `pw_v_${slug}`;
  if (sessionStorage.getItem(sk)) return;
  let fired = false;

  const enviar = () => {
    if (fired) return;
    fired = true;
    cleanup();
    sessionStorage.setItem(sk, '1');
    // Actualizar UI optimistamente
    const cnt = document.getElementById('pw_vistas_cnt');
    if (cnt) cnt.innerHTML = cnt.innerHTML.replace(/[\d,.KM]+(?=\s*vistas)/, fmt((vistaActual||0) + 1));
    // Incremento atómico REST — fire & forget
    fetch(
      `https://firestore.googleapis.com/v1/projects/${PID}/databases/(default)/documents:commit?key=${KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          writes: [{ transform: {
            document: `projects/${PID}/databases/(default)/documents/linkwiis/${slug}`,
            fieldTransforms: [{ fieldPath: 'vistas', increment: { integerValue: '1' } }]
          }}]
        })
      }
    ).catch(() => {});
  };

  const cleanup = () => {
    ['click','scroll','touchstart','mousemove'].forEach(e => document.removeEventListener(e, enviar));
    document.removeEventListener('visibilitychange', onHide);
  };

  const onHide = () => { if (document.visibilityState === 'hidden') enviar(); };

  // Escuchar cualquier interacción (passive = sin impacto en scroll performance)
  ['click','scroll','touchstart','mousemove'].forEach(e =>
    document.addEventListener(e, enviar, { passive: true, once: true })
  );
  // Fallback: si el usuario sale sin interactuar
  document.addEventListener('visibilitychange', onHide);
}

async function init() {
  if (!slug) {
    root.innerHTML = msg('🔍', '¿Buscas tu Linkwii?', 'Visita linkwii.com para crear tu perfil.', `<a href="/" class="pw_cta_btn">Ir al inicio</a>`);
    return;
  }
  try {
    // 🔥 Firebase REST API — sin SDK, sin 89 KiB, sin canales de streaming
    const res = await fetch(
      `https://firestore.googleapis.com/v1/projects/${PID}/databases/(default)/documents/linkwiis/${slug}?key=${KEY}`
    );
    if (res.status === 404) {
      root.innerHTML = msg('🔍', 'Esta página no existe', `El enlace <strong>/${slug}</strong> aún no ha sido reclamado.`, `<a href="/p/crear" class="pw_cta_btn">Reclama tu Linkwii</a>`);
      return;
    }
    const json = await res.json();
    if (json.error) throw new Error(json.error.message);

    const d = parseFS(json.fields || {});
    if (!d.estado) {
      root.innerHTML = msg('⏸️', 'Perfil pausado', `El creador de <strong>/${slug}</strong> pausó este enlace.`, `<a href="/" class="pw_cta_btn">Volver al inicio</a>`);
      return;
    }
    mostrar(d);
    setupVistas(d.vistas);
  } catch {
    root.innerHTML = msg('⚠️', 'Error de conexión', 'Revisa tu conexión e intenta de nuevo.', `<button onclick="location.reload()" class="pw_cta_btn">Reintentar</button>`);
  }
}

init();
