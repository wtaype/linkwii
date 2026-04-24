import{S as e}from"./widev-fOmk8yG8.js";import{t}from"./wii-D6UWjlDJ.js";var n=[{slug:`timewii`,color:`#0EBEFF`,avatarTxt:`TW`,avatarImg:``,name:`@timewii`,bio:`Planificador Semanal Profesional. Organiza tu semana gratis.`,links:[{icon:`fa-globe`,text:`Sitio Web Oficial`},{icon:`fa-calendar-check`,text:`Crear cuenta gratis`},{icon:`fab fa-instagram`,text:`Instagram`}]},{slug:`emprendedores`,color:`#FF5C69`,avatarTxt:`EM`,avatarImg:``,name:`@emprendedores`,bio:`Te ayudamos a lanzar tu primera startup sin código.`,links:[{icon:`fa-book`,text:`Descargar E-book`},{icon:`fa-podcast`,text:`Nuevo Podcast`},{icon:`fab fa-tiktok`,text:`Tips en TikTok`}]},{slug:`gamerx_tv`,color:`#7000FF`,avatarTxt:`GX`,avatarImg:``,name:`@gamerx_tv`,bio:`Streamer de Valorant y LoL. En vivo todos los días a las 8PM EST.`,links:[{icon:`fab fa-twitch`,text:`Canal de Twitch`},{icon:`fab fa-discord`,text:`Comunidad de Discord`},{icon:`fab fa-youtube`,text:`Mejores Jugadas`}]},{slug:`mariadesign`,color:`#29C72E`,avatarTxt:`MD`,avatarImg:``,name:`@mariadesign`,bio:`Diseñadora UI/UX freelance. Creando experiencias increíbles.`,links:[{icon:`fab fa-behance`,text:`Portafolio Behance`},{icon:`fab fa-linkedin`,text:`LinkedIn Profesional`},{icon:`fa-envelope`,text:`Contáctame para proyectos`}]},{slug:`fotografia_bodas`,color:`#FFB800`,avatarTxt:`📸`,avatarImg:``,name:`@fotosdeboda`,bio:`Capturando los momentos más felices de tu vida. Agenda 2026 abierta.`,links:[{icon:`fa-camera`,text:`Ver Galería Completa`},{icon:`fab fa-whatsapp`,text:`Cotiza por WhatsApp`},{icon:`fa-calendar`,text:`Revisar Disponibilidad`}]},{slug:`mimusica`,color:`#FF8C00`,avatarTxt:`🎵`,avatarImg:``,name:`@oficial_music`,bio:`Nuevo sencillo "Noches de Verano" ya disponible en todas las plataformas.`,links:[{icon:`fab fa-spotify`,text:`Escuchar en Spotify`},{icon:`fab fa-apple`,text:`Apple Music`},{icon:`fa-ticket`,text:`Comprar Entradas Tour 2026`}]}],r=()=>`
<div class="ej_wrap">
  <div class="ej_hero ej_anim" style="--d:0s">
    <h1 class="ej_title">Inspiración <span class="ej_grad">Linkwii</span></h1>
    <p class="ej_desc">Descubre cómo otros creadores, marcas y profesionales están utilizando Linkwii para organizar sus enlaces y multiplicar sus conversiones.</p>
  </div>
  
  <div class="ej_grid">
    ${n.map((e,t)=>`
      <a href="/${e.slug}" target="_blank" class="ej_card wi_fadeUp" style="--cc:${e.color}; --d:${t*.15}s">
        <div class="ej_avatar">${e.avatarImg?`<img src="${e.avatarImg}" alt="${e.name}">`:e.avatarTxt}</div>
        <div class="ej_name">${e.name}</div>
        <div class="ej_bio">${e.bio}</div>
        <div class="ej_links">
          ${e.links.map(e=>`
            <div class="ej_btn"><i class="fas ${e.icon}"></i> ${e.text}</div>
          `).join(``)}
        </div>
        <div class="ej_badge"><i class="fas fa-external-link-alt"></i> Visitar perfil: ${e.slug}</div>
      </a>
    `).join(``)}
  </div>

  <div class="ej_cta ej_anim" style="--d:0.3s">
    <a href="/p/crear" class="ej_cta_btn"><i class="fas fa-magic"></i> Crea tu propio Linkwii gratis</a>
  </div>
</div>
`,i=()=>{e(`.ej_card`,null,{anim:`ej_anim`,stagger:80}),console.log(`✨ ${t} v12 · Ejemplos OK`)},a=()=>{console.log(`🧹 Ejemplos limpiado`)};export{a as cleanup,i as init,r as render};