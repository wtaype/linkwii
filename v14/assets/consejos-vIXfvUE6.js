import{S as e}from"./widev-C9iBaRfr.js";import{t}from"./wii-BDepsLpp.js";var n=[{titulo:`Crea tu cuenta gratis`,desc:`Regístrate en menos de 10 segundos. Solo necesitas tu correo o iniciar sesión con Google. No hay tarjetas de crédito, es 100% gratis siempre y para siempre.`,visual:`<div class="cj_visual_mock cj_mock_1"><i class="fas fa-user-plus"></i></div>`},{titulo:`Diseña tu identidad`,desc:`Elige un @slug (tu nombre de usuario) único. Sube tu logo o avatar, escribe una biografía atractiva y selecciona los colores que mejor representen a tu marca o personalidad. Mira los cambios en vivo.`,visual:`<div class="cj_visual_mock cj_mock_2"><i class="fas fa-palette"></i></div>`},{titulo:`Agrega todos tus enlaces`,desc:`Pega todas tus URLs: Instagram, TikTok, tu Tienda, Spotify, WhatsApp, etc. Nuestro sistema detectará automáticamente cada red social y le asignará su icono oficial. No hay límite de links.`,visual:`<div class="cj_visual_mock cj_mock_3"><div></div><div></div><div></div></div>`},{titulo:`Comparte al mundo`,desc:`Copia tu link final (linkwii.com/tu-nombre) y colócalo en tu biografía de Instagram o TikTok. Empieza a recibir clics inmediatos, mide tus visitas en tiempo real y optimiza tu estrategia.`,visual:`<div class="cj_visual_mock cj_mock_4"><i class="fas fa-share-nodes"></i></div>`}],r=()=>`
<div class="cj_wrap">
  <div class="cj_hero cj_anim" style="--d:0s">
    <div class="cj_badge"><i class="fas fa-bolt"></i> Fácil, Rápido y Gratis</div>
    <h1 class="cj_title">Cómo <span class="cj_grad">Funciona</span></h1>
    <p class="cj_desc">En tan solo 4 pasos tendrás tu perfil profesional listo para recibir a tu audiencia y multiplicar tus conversiones. Sin código y sin fricciones.</p>
  </div>
  
  <div class="cj_steps">
    ${n.map((e,t)=>`
      <div class="cj_step wi_fadeUp" style="--d:${t*.15}s">
        <div class="cj_step_top">
          <div class="cj_num">${t+1}</div>
          <div class="cj_info">
            <h2>${e.titulo}</h2>
          </div>
        </div>
        <div class="cj_info">
          <p>${e.desc}</p>
        </div>
        <div class="cj_visual">
          ${e.visual}
        </div>
      </div>
    `).join(``)}
  </div>

  <div class="cj_cta cj_anim" style="--d:0.3s">
    <a href="/p/crear" class="cj_cta_btn"><i class="fas fa-magic"></i> Comenzar mi primer Linkwii</a>
  </div>
</div>
`,i=()=>{e(`.cj_step`,null,{anim:`cj_anim`,stagger:100}),console.log(`💡 ${t} v14 · Cómo Funciona OK`)},a=()=>{console.log(`🧹 Consejos limpiado`)};export{a as cleanup,i as init,r as render};