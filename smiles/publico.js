import './publico.css';
import { getDoc, doc } from 'firebase/firestore';
import { db } from './firebase.js';

export const render = (slug) => {
  // Skeleton Screen - Zero-Blink
  // Diseño limpio, centrado, totalmente aislado de index.html
  return `
    <div id="pw_body">
      <!-- SKELETON INICIAL -->
      <div id="pw_skeleton">
        <div class="pw_skel_avatar"></div>
        <div class="pw_skel_title"></div>
        <div class="pw_skel_bio"></div>
        <div class="pw_skel_links">
          <div class="pw_skel_btn"></div>
          <div class="pw_skel_btn"></div>
          <div class="pw_skel_btn"></div>
        </div>
      </div>
      
      <!-- CONTENIDO REAL (Oculto al inicio) -->
      <div id="pw_real" style="opacity: 0; display: none;"></div>
    </div>
  `;
};

export const init = async (slug) => {
  if (!slug) {
    document.getElementById('pw_body').innerHTML = '<h2 style="margin-top:10vh;">Perfil no especificado</h2>';
    return;
  }
  
  try {
    const docRef = doc(db, 'linkwiis', slug);
    const d = await getDoc(docRef);
    
    if (!d.exists()) {
      document.getElementById('pw_body').innerHTML = `
        <div style="text-align:center; margin-top:10vh; font-family:-apple-system, sans-serif;">
          <h2 style="font-size:24px; margin-bottom:8px; color:#222;">Esta página no existe</h2>
          <p style="color:#666; margin-bottom:24px;">El enlace /${slug} no ha sido reclamado aún.</p>
          <a href="/p/crear" style="padding:12px 24px; background:#000; color:#fff; text-decoration:none; border-radius:30px; font-weight:bold;">Reclama tu Linkwii</a>
        </div>
      `;
      return;
    }
    
    const p = d.data();
    
    // Si el proyecto está desactivado
    if (!p.estado) {
      document.getElementById('pw_body').innerHTML = `
        <div style="text-align:center; margin-top:10vh; font-family:-apple-system, sans-serif;">
          <h2 style="font-size:24px; margin-bottom:8px; color:#222;">Página no disponible</h2>
          <p style="color:#666; margin-bottom:24px;">El creador de /${slug} ha pausado este enlace temporalmente.</p>
        </div>
      `;
      return;
    }
    
    // Generar el HTML de los botones desde el array p.links
    let linksHtml = '';
    const userLinks = p.links || [];
    
    if (userLinks.length > 0) {
      linksHtml = userLinks.map(link => {
        if (!link.titulo) return '';
        // Adivinar ícono básico si no lo tiene
        let iconHtml = '';
        if (link.url.includes('instagram.com')) iconHtml = '<i class="fab fa-instagram"></i>';
        else if (link.url.includes('tiktok.com')) iconHtml = '<i class="fab fa-tiktok"></i>';
        else if (link.url.includes('youtube.com')) iconHtml = '<i class="fab fa-youtube" style="color:#ff0000;"></i>';
        else if (link.url.includes('whatsapp.com') || link.url.includes('wa.me')) iconHtml = '<i class="fab fa-whatsapp" style="color:#25D366;"></i>';
        else if (link.url.includes('facebook.com')) iconHtml = '<i class="fab fa-facebook" style="color:#1877F2;"></i>';

        return `
          <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="pw_link_btn">
            <span class="pw_link_icon">${iconHtml}</span>
            ${link.titulo}
          </a>
        `;
      }).join('');
    } else {
      linksHtml = `<div style="text-align:center; padding: 20px; color:#888;">Aún no hay enlaces aquí.</div>`;
    }
    
    const realHtml = `
      <img src="${p.logo || '/smile.avif'}" alt="${p.slug}" class="pw_avatar">
      <h1 class="pw_title">@${p.slug}</h1>
      <p class="pw_bio">${p.desc || ''}</p>
      
      <div class="pw_links">
        ${linksHtml}
      </div>
      
      <a href="/" class="pw_watermark">
        <img src="/smile.avif" alt="Linkwii"> Linkwii
      </a>
    `;
    
    const realContainer = document.getElementById('pw_real');
    realContainer.innerHTML = realHtml;
    
    // Transición ultra fluida
    setTimeout(() => {
      const skel = document.getElementById('pw_skeleton');
      if (skel) skel.style.display = 'none';
      
      realContainer.style.display = 'flex';
      // Pequeño delay para que el navegador aplique display:flex antes de animar opacidad
      requestAnimationFrame(() => {
        realContainer.style.opacity = '1';
      });
    }, 150); // Mínima espera, se siente instantáneo
    
  } catch (error) {
    console.error("Error cargando perfil:", error);
    document.getElementById('pw_body').innerHTML = '<h2 style="margin-top:10vh;">Error de conexión</h2>';
  }
};
