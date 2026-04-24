import{i as e,m as t}from"./firebase-Bp9Uq4pV.js";import{db as n}from"./firebase-DhdZ2PmB.js";var r=e=>`
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
  `,i=async r=>{if(!r){document.getElementById(`pw_body`).innerHTML=`<h2 style="margin-top:10vh;">Perfil no especificado</h2>`;return}try{let i=await e(t(n,`linkwiis`,r));if(!i.exists()){document.getElementById(`pw_body`).innerHTML=`
        <div style="text-align:center; margin-top:10vh; font-family:-apple-system, sans-serif;">
          <h2 style="font-size:24px; margin-bottom:8px; color:#222;">Esta página no existe</h2>
          <p style="color:#666; margin-bottom:24px;">El enlace /${r} no ha sido reclamado aún.</p>
          <a href="/p/crear" style="padding:12px 24px; background:#000; color:#fff; text-decoration:none; border-radius:30px; font-weight:bold;">Reclama tu Linkwii</a>
        </div>
      `;return}let a=i.data();if(!a.estado){document.getElementById(`pw_body`).innerHTML=`
        <div style="text-align:center; margin-top:10vh; font-family:-apple-system, sans-serif;">
          <h2 style="font-size:24px; margin-bottom:8px; color:#222;">Página no disponible</h2>
          <p style="color:#666; margin-bottom:24px;">El creador de /${r} ha pausado este enlace temporalmente.</p>
        </div>
      `;return}let o=``,s=a.links||[];o=s.length>0?s.map(e=>{if(!e.titulo)return``;let t=``;return e.url.includes(`instagram.com`)?t=`<i class="fab fa-instagram"></i>`:e.url.includes(`tiktok.com`)?t=`<i class="fab fa-tiktok"></i>`:e.url.includes(`youtube.com`)?t=`<i class="fab fa-youtube" style="color:#ff0000;"></i>`:e.url.includes(`whatsapp.com`)||e.url.includes(`wa.me`)?t=`<i class="fab fa-whatsapp" style="color:#25D366;"></i>`:e.url.includes(`facebook.com`)&&(t=`<i class="fab fa-facebook" style="color:#1877F2;"></i>`),`
          <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="pw_link_btn">
            <span class="pw_link_icon">${t}</span>
            ${e.titulo}
          </a>
        `}).join(``):`<div style="text-align:center; padding: 20px; color:#888;">Aún no hay enlaces aquí.</div>`;let c=`
      <img src="${a.logo||`/smile.avif`}" alt="${a.slug}" class="pw_avatar">
      <h1 class="pw_title">@${a.slug}</h1>
      <p class="pw_bio">${a.desc||``}</p>
      
      <div class="pw_links">
        ${o}
      </div>
      
      <a href="/" class="pw_watermark">
        <img src="/smile.avif" alt="Linkwii"> Linkwii
      </a>
    `,l=document.getElementById(`pw_real`);l.innerHTML=c,setTimeout(()=>{let e=document.getElementById(`pw_skeleton`);e&&(e.style.display=`none`),l.style.display=`flex`,requestAnimationFrame(()=>{l.style.opacity=`1`})},150)}catch(e){console.error(`Error cargando perfil:`,e),document.getElementById(`pw_body`).innerHTML=`<h2 style="margin-top:10vh;">Error de conexión</h2>`}};export{i as init,r as render};