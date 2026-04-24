import{t as e}from"./vendor-CdV9uUFu.js";import{c as t,f as n,p as r,u as i}from"./widev-DUThRLxv.js";import{t as a}from"./wii-BDepsLpp.js";import{b as o}from"./firebase-BFpKafW9.js";import{auth as s}from"./firebase-CgdV6sAi.js";var c=()=>new Promise(e=>{if(s.currentUser)return e(s.currentUser);let t=o(s,n=>{t(),e(n)})}),l=()=>{let e=new Date().getHours();return e<12?{txt:`Buenos días`,ico:`fa-sun`}:e<18?{txt:`Buenas tardes`,ico:`fa-cloud-sun`}:{txt:`Buenas noches`,ico:`fa-moon`}},u=[{ico:`fa-rocket`,txt:`Cada día que avanzas te acerca más a donde quieres llegar. ¡No pares!`},{ico:`fa-star`,txt:`Los sueños grandes requieren pasos constantes. Tú ya diste el primero.`},{ico:`fa-fire-flame-curved`,txt:`Tu esfuerzo de hoy es el logro que celebrarás mañana.`},{ico:`fa-heart`,txt:`Creer en ti mismo es el superpoder más poderoso que tienes.`},{ico:`fa-bolt`,txt:`No importa el ritmo, lo importante es no detenerse.`},{ico:`fa-seedling`,txt:`Cada pequeño avance cuenta. Estás construyendo algo increíble.`},{ico:`fa-trophy`,txt:`El éxito no es un destino, es el camino que recorres cada día.`}],d=()=>`
  <div class="smw_page">

    <!-- HERO -->
    <div class="smw_hero">
      <div class="smw_hero_inner">
        <div class="smw_avatar" id="smwAvatar"></div>
        <div class="smw_hero_info">
          <p class="smw_saludo"   id="smwSaludo"></p>
          <h1 class="smw_nombre" id="smwNombre"></h1>
          <p class="smw_hoy"     id="smwHoy"></p>
          <div class="smw_badges" id="smwBadges"></div>
        </div>
      </div>
    </div>

    <!-- STATS -->
    <div class="smw_wrap">
      <div class="smw_cards" id="smwCards"></div>

      <!-- FRASE MOTIVACIONAL -->
      <div class="smw_motiv" id="smwMotiv"></div>
    </div>

  </div>
`,f=async()=>{console.log(`✅ Smile Home — ${a}`);let o=await c();if(!o)return;let s=r(`wiSmile`);if(!s)return;let d=n(s.nombre||s.usuario||``),f=`${s.nombre||``} ${s.apellidos||``}`.trim(),p=s.email||o.email,m=s.rol||`smile`,h=t(s.creado?.seconds?new Date(s.creado.seconds*1e3):s.creado),g=`${(s.nombre||`?`)[0]}${(s.apellidos||``)[0]||``}`.toUpperCase(),_=l(),v=u[Math.floor(Math.random()*u.length)];e(`#smwAvatar`).text(g),e(`#smwSaludo`).html(`<i class="fas ${_.ico}"></i> ${_.txt}, <strong>${d}</strong>`),e(`#smwNombre`).text(f),e(`#smwHoy`).text(i()),e(`#smwBadges`).html(`
    <span class="smw_badge smw_rol"><i class="fas fa-shield-halved"></i> ${m}</span>
    <span class="smw_badge smw_email"><i class="fas fa-envelope"></i> ${p}</span>
  `);let y=r(`misProyectosLinkwii`)||[],b=y.length,x=y.reduce((e,t)=>e+(t.vistas||0),0),S=h<=0?`Recién llegado 🎉`:h===1?`1 mes con nosotros`:`${h} meses con nosotros`;e(`#smwCards`).html(`
    <div class="smw_card" style="--d:0s">
      <span class="smw_card_ico"><i class="fas fa-layer-group" style="color:var(--mco);"></i></span>
      <div class="smw_card_data">
        <small>Proyectos Activos</small>
        <strong>${b} Linkwiis</strong>
      </div>
    </div>
    <div class="smw_card" style="--d:.07s">
      <span class="smw_card_ico"><i class="fas fa-eye" style="color:#0F9D58;"></i></span>
      <div class="smw_card_data">
        <small>Vistas Globales</small>
        <strong>${x.toLocaleString()}</strong>
      </div>
    </div>
    <div class="smw_card" style="--d:.14s">
      <span class="smw_card_ico"><i class="fas fa-clock-rotate-left" style="color:#E53935;"></i></span>
      <div class="smw_card_data">
        <small>Tiempo en ${a}</small>
        <strong>${S}</strong>
      </div>
    </div>
    <a href="/p/crear" class="smw_card" style="--d:.21s; text-decoration:none;">
      <span class="smw_card_ico" style="background:var(--mco); color:var(--wb);"><i class="fas fa-plus"></i></span>
      <div class="smw_card_data">
        <small>Acción Rápida</small>
        <strong style="color:var(--mco);">Crear Nuevo Enlace</strong>
      </div>
    </a>
  `),e(`#smwMotiv`).html(`
    <div class="smw_motiv_inner">
      <span class="smw_motiv_ico"><i class="fas ${v.ico}"></i></span>
      <div class="smw_motiv_txt">
        <small>Para ti, ${d} 💛</small>
        <p>${v.txt}</p>
      </div>
    </div>
  `)},p=()=>{console.log(`🧹 Smile Home`)};export{p as cleanup,f as init,d as render};