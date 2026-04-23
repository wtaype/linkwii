import{t as e}from"./vendor-BDh6mtVu.js";import{c as t,d as n,f as r,m as i,p as a}from"./widev-CwEfqxZK.js";import{t as o}from"./wii-hgYUGqM9.js";import{b as s}from"./firebase-BzxEF9v7.js";import{auth as c}from"./firebase-Be0frFSh.js";var l=()=>new Promise(e=>{if(c.currentUser)return e(c.currentUser);let t=s(c,n=>{t(),e(n)})}),u=e=>{if(!e)return`—`;let t=e.seconds?new Date(e.seconds*1e3):new Date(e);return isNaN(t.getTime())?`—`:t.toLocaleDateString(`es-ES`,{day:`numeric`,month:`long`,year:`numeric`})},d=()=>{let e=new Date().getHours();return e<12?{txt:`Buenos días`,ico:`fa-sun`}:e<18?{txt:`Buenas tardes`,ico:`fa-cloud-sun`}:{txt:`Buenas noches`,ico:`fa-moon`}},f=[{ico:`fa-rocket`,txt:`Cada día que avanzas te acerca más a donde quieres llegar. ¡No pares!`},{ico:`fa-star`,txt:`Los sueños grandes requieren pasos constantes. Tú ya diste el primero.`},{ico:`fa-fire-flame-curved`,txt:`Tu esfuerzo de hoy es el logro que celebrarás mañana.`},{ico:`fa-heart`,txt:`Creer en ti mismo es el superpoder más poderoso que tienes.`},{ico:`fa-bolt`,txt:`No importa el ritmo, lo importante es no detenerse.`},{ico:`fa-seedling`,txt:`Cada pequeño avance cuenta. Estás construyendo algo increíble.`},{ico:`fa-trophy`,txt:`El éxito no es un destino, es el camino que recorres cada día.`}],p=()=>`
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
`,m=async()=>{console.log(`✅ Smile Home — ${o}`);let s=await l();if(!s)return;let c=i(`wiSmile`);if(!c)return;let p=a(c.nombre||c.usuario||``),m=`${c.nombre||``} ${c.apellidos||``}`.trim(),h=c.email||s.email,g=c.rol||`smile`,_=t(c.creado?.seconds?new Date(c.creado.seconds*1e3):c.creado),v=`${(c.nombre||`?`)[0]}${(c.apellidos||``)[0]||``}`.toUpperCase(),y=d(),b=f[Math.floor(Math.random()*f.length)];e(`#smwAvatar`).text(v),e(`#smwSaludo`).html(`<i class="fas ${y.ico}"></i> ${y.txt}, <strong>${p}</strong>`),e(`#smwNombre`).text(m),e(`#smwHoy`).text(n()),e(`#smwBadges`).html(`
    <span class="smw_badge smw_rol"><i class="fas fa-shield-halved"></i> ${g}</span>
    <span class="smw_badge smw_email"><i class="fas fa-envelope"></i> ${h}</span>
  `);let x=_<=0?`Recién llegado 🎉`:_===1?`1 mes con nosotros`:`${_} meses con nosotros`;e(`#smwCards`).html(`
    <div class="smw_card" style="--d:0s">
      <span class="smw_card_ico"><i class="fas fa-calendar-heart"></i></span>
      <div class="smw_card_data">
        <small>Miembro desde</small>
        <strong>${u(c.creado)}</strong>
      </div>
    </div>
    <div class="smw_card" style="--d:.07s">
      <span class="smw_card_ico"><i class="fas fa-hourglass-half"></i></span>
      <div class="smw_card_data">
        <small>Tiempo en ${o}</small>
        <strong>${x}</strong>
      </div>
    </div>
    <div class="smw_card" style="--d:.14s">
      <span class="smw_card_ico"><i class="fas fa-clock-rotate-left"></i></span>
      <div class="smw_card_data">
        <small>Última actividad</small>
        <strong>${r(c.ultimaActividad)}</strong>
      </div>
    </div>
    <div class="smw_card" style="--d:.21s">
      <span class="smw_card_ico"><i class="fas fa-at"></i></span>
      <div class="smw_card_data">
        <small>Usuario</small>
        <strong>@${c.usuario||p.toLowerCase()}</strong>
      </div>
    </div>
  `),e(`#smwMotiv`).html(`
    <div class="smw_motiv_inner">
      <span class="smw_motiv_ico"><i class="fas ${b.ico}"></i></span>
      <div class="smw_motiv_txt">
        <small>Para ti, ${p} 💛</small>
        <p>${b.txt}</p>
      </div>
    </div>
  `)},h=()=>{console.log(`🧹 Smile Home`)};export{h as cleanup,m as init,p as render};