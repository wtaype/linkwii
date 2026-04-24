import{t as e}from"./vendor-CdV9uUFu.js";import{b as t,h as n,l as r,m as i,n as a,o,p as s,x as c}from"./widev-C9iBaRfr.js";import{t as l}from"./wii-BDepsLpp.js";import{n as u}from"./rutas-Cq2TK6cn.js";import{C as d,D as f,S as p,T as m,_ as h,a as g,f as _,g as v,i as y,l as b,m as x,p as S,u as C,v as w,w as T,x as E}from"./firebase-BFpKafW9.js";import{auth as D,db as O}from"./firebase-CgdV6sAi.js";var k={db:`smiles`,pagina:`rol`},A=`si`,j=`no`,M=`si`,N=`si`,P={smile:`/p/crear`,gestor:`/p/gestor`,empresa:`/p/empresa`,admin:`/p/admin`},F={"auth/email-already-in-use":`Email ya registrado`,"auth/weak-password":`Contraseña débil (mín. 6)`,"auth/invalid-credential":`Contraseña incorrecta`,"auth/invalid-email":`Email no válido`,"auth/missing-email":`Usuario no registrado`,"auth/too-many-requests":`Demasiados intentos`},I={regEmail:[e=>e.toLowerCase().trim(),e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)||`Email inválido`],regUsuario:[e=>e.toLowerCase().replace(/[^a-z0-9_]/g,``).trim(),e=>e.length>=4||`Mínimo 4 caracteres`],regNombre:[e=>e.trim(),e=>e.length>0||`Ingresa tu nombre`],regApellidos:[e=>e.trim(),e=>e.length>0||`Ingresa tus apellidos`],regPassword:[e=>e,e=>e.length>=6||`Mínimo 6 caracteres`],regPassword1:[e=>e,t=>t===e(`#regPassword`).val()||`No coinciden`]},L=(e,t,n,r,i=!1)=>`<div class="wilg_grupo"><i class="fas fa-${e}"></i><input type="${t}" id="${n}" placeholder="${r}" autocomplete="off">${i?`<i class="fas fa-eye wilg_ojo"></i>`:``}</div>`,R=(e=`smile`)=>e===`smile`?`
    <div class="wilg_rol_extra" id="rolExtra">
      <div class="wilg_info_badge wilg_badge_smile">
        <i class="fas fa-rocket"></i> Ideal para influencers, freelancers y marca personal.
      </div>
    </div>`:e===`gestor`?`
    <div class="wilg_rol_extra" id="rolExtra">
      <div class="wilg_extra_label"><i class="fas fa-store"></i> Información del Negocio</div>
      <div class="wilg_extra_field" id="extraField">
        ${L(`store`,`text`,`regEmpresaNombre`,`Nombre de tu negocio o tienda`)}
      </div>
      <div class="wilg_info_badge wilg_badge_gestor">
        <i class="fas fa-bolt"></i> Activación inmediata. Herramientas de catálogo y WhatsApp.
      </div>
    </div>`:e===`empresa`?`
    <div class="wilg_rol_extra" id="rolExtra">
      <div class="wilg_extra_label"><i class="fas fa-building"></i> Datos Corporativos</div>
      <div class="wilg_extra_field wilg_extra_2col" id="extraField">
        ${L(`id-card`,`text`,`regRuc`,`RUC (Opcional)`)}
        ${L(`building`,`text`,`regEmpresaNombre`,`Nombre de la empresa`)}
      </div>
      <div class="wilg_info_badge wilg_badge_empresa">
        <i class="fas fa-users-cog"></i> Cuenta para gestionar múltiples perfiles y equipos.
      </div>
    </div>`:``,z={login:()=>`
    <div class="wilg_head">
      <div class="wilg_logo"><img src="/linkwii/v14/smile.avif" alt="${l}"></div>
      <h2>Bienvenido</h2><p>Inicia sesión en tu cuenta</p>
    </div>
    <button type="button" class="wilg_btn_google" id="btnGoogle"><img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"> Continuar con Google</button>
    <div class="wilg_or"><span>o usa tu email</span></div>
    ${L(`envelope`,`text`,`email`,`Email o usuario`)}
    ${L(`lock`,`password`,`password`,`Contraseña`,!0)}
    <button type="button" id="Login" class="wilg_btn inactivo"><i class="fas fa-sign-in-alt"></i> Iniciar Sesión</button>
    ${M===`si`||N===`si`?`<div class="wilg_links">
      ${M===`si`?`<span class="wilg_rec"><i class="fas fa-key"></i> ¿Olvidaste tu contraseña?</span>`:``}
      ${N===`si`?`<span class="wilg_reg">Crear cuenta <i class="fas fa-arrow-right"></i></span>`:``}
    </div>`:``}`,registrar:()=>`
    <div class="wilg_head">
      <div class="wilg_logo"><img src="/linkwii/v14/smile.avif" alt="${l}"></div>
      <h2>Crear Cuenta</h2><p>Únete a la comunidad</p>
    </div>
    <button type="button" class="wilg_btn_google" id="btnGoogle"><img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"> Continuar con Google</button>
    <div class="wilg_or"><span>o usa tu email</span></div>
    <div class="wilg_grid">
      ${[[`envelope`,`email`,`regEmail`,`Email`],[`user`,`text`,`regUsuario`,`Usuario`],[`user-tie`,`text`,`regNombre`,`Nombre`],[`user-tie`,`text`,`regApellidos`,`Apellidos`]].map(([e,t,n,r])=>L(e,t,n,r)).join(``)}
      ${L(`lock`,`password`,`regPassword`,`Contraseña`,!0)}
      ${L(`lock`,`password`,`regPassword1`,`Confirmar contraseña`,!0)}
    </div>

    <!-- ── SELECTOR DE ROL ─────────────────── -->
    <div class="wilg_rol_selector">
      <div class="wilg_rol_label"><i class="fas fa-id-badge"></i> Tipo de cuenta</div>
      <div class="wilg_rol_tabs">
        <button type="button" class="wilg_rol_tab active" data-rol="smile">
          <i class="fas fa-user-circle"></i>
          <span>Creador</span>
        </button>
        <button type="button" class="wilg_rol_tab" data-rol="gestor">
          <i class="fas fa-store"></i>
          <span>Negocio</span>
        </button>
        <button type="button" class="wilg_rol_tab" data-rol="empresa">
          <i class="fas fa-building"></i>
          <span>Empresa</span>
        </button>
      </div>
    </div>
    ${R(`smile`)}
    <!-- ─────────────────────────────────────── -->

    <div class="wilg_check">
      <label><input type="checkbox" id="regTerminos">
      <span>Acepto los <a href="/terminos.html" target="_blank">términos y condiciones</a></span></label>
    </div>
    <button type="button" id="Registrar" class="wilg_btn inactivo"><i class="fas fa-user-plus"></i> Registrarme</button>
    <div class="wilg_links"><span class="wilg_log"><i class="fas fa-arrow-left"></i> Ya tengo cuenta</span></div>`,restablecer:()=>`
    <div class="wilg_head">
      <div class="wilg_logo wilg_logo_sm"><img src="/linkwii/v14/smile.avif" alt="${l}"></div>
      <h2>Recuperar</h2><p>Te enviaremos un enlace a tu email</p>
    </div>
    ${L(`envelope`,`text`,`recEmail`,`Email o usuario`)}
    <button type="button" id="Recuperar" class="wilg_btn"><i class="fas fa-paper-plane"></i> Enviar enlace</button>
    <div class="wilg_links"><span class="wilg_log"><i class="fas fa-arrow-left"></i> Volver</span></div>`,username:()=>`
    <div class="wilg_head">
      <div class="wilg_logo"><img src="/linkwii/v14/smile.avif" alt="${l}"></div>
      <h2>¡Casi listo!</h2><p>Elige tu enlace personalizado</p>
    </div>
    <div class="wilg_info_badge wilg_badge_smile" style="margin-bottom: 1.5vh;">
      <i class="fas fa-link"></i> Tu enlace será: linkwii.com/<b>usuario</b>
    </div>
    ${L(`user`,`text`,`regUsuarioGoogle`,`Ingresa tu usuario (ej: marcos)`)}
    
    <div class="wilg_rol_selector" style="margin-top: 1.5vh;">
      <div class="wilg_rol_label"><i class="fas fa-id-badge"></i> ¿Para qué lo usarás?</div>
      <div class="wilg_rol_tabs">
        <button type="button" class="wilg_rol_tab active" data-rol="smile">
          <i class="fas fa-user-circle"></i><span>Creador</span>
        </button>
        <button type="button" class="wilg_rol_tab" data-rol="gestor">
          <i class="fas fa-store"></i><span>Negocio</span>
        </button>
      </div>
    </div>
    <div class="wilg_check" style="margin-top: 1.5vh;">
      <label><input type="checkbox" id="regTerminosGoogle">
      <span>Acepto los <a href="/terminos.html" target="_blank">términos y condiciones</a></span></label>
    </div>
    <button type="button" id="CompletarGoogle" class="wilg_btn inactivo" style="margin-top: 1.5vh;"><i class="fas fa-rocket"></i> Crear mi Linkwii</button>
  `},B=(e,t=``)=>`<div id="wilg_modal" class="wiModal wilg_mod ${t}"><div class="modalBody"><button class="modalX">&times;</button>
   <form id="liForm">${z[e]()}</form></div></div>`,V=(t=`login`)=>{e(`#wilg_modal`).remove();let n=t===`registrar`?`wilg_mod_reg`:``;e(`body`).append(B(t,n)),setTimeout(()=>{o(`wilg_modal`),e(`#liForm input:first`).focus()},50)},H=t=>{let n=t===`registrar`?`wilg_mod_reg`:``;e(`#wilg_modal`).toggleClass(`wilg_mod_reg`,n===`wilg_mod_reg`),e(`#liForm`).html(z[t]()).attr(`data-vista`,t),setTimeout(()=>e(`#liForm input:first`).focus(),30)},U=()=>j!==`si`||n.user?``:`<div class="wilg_wrap"><div class="wilg_card"><form id="liForm"></form></div></div>`,W=()=>{if(j!==`si`){setTimeout(()=>u.navigate(`/`),0);return}let e=n.user;if(e){setTimeout(()=>u.navigate(P[e.rol]||`/`),0);return}G(`login`)},G=t=>{e(`#liForm`).html(z[t]()).attr(`data-vista`,t),setTimeout(()=>e(`#liForm input:first`).focus(),30)},K=t=>e(`#${t}`).val().trim(),q=()=>e(`#wilg_modal.active`).length>0,J=e=>q()?H(e):G(e),Y=async(e,n,r)=>{t(e,!0,n);try{await r()}catch(e){a(F[e.code]||e.message,`error`)}finally{t(e,!1)}},X=async e=>{if(e.includes(`@`))return{email:e,wi:null};let t=await y(x(O,`smiles`,e));if(!t.exists())throw Error(`Usuario no encontrado`);return{email:t.data().email,wi:t.data()}},Z=t=>{if(!t)return;let[n,r]=t.split(`|`);document.documentElement.dataset.theme=n,e(`meta[name="theme-color"]`).attr(`content`,r),e(`.tema`).removeClass(`mtha`).filter(`[data-ths="${t}"]`).addClass(`mtha`)},Q=e=>{if(k.pagina===`actual`)return;let t=k.pagina===`rol`?P[e?.rol]||`/`:k.pagina;u.navigate(t)},$=e=>{n.login(e,7),e?.tema&&(localStorage.wiTema=e.tema,Z(e.tema)),q()&&r(),Q(e)};e(document).on(`submit.wi`,`#liForm`,e=>e.preventDefault()).on(`click.wi`,`.wilg_ojo`,function(){let t=e(this).siblings(`input`);t.attr(`type`,t.attr(`type`)===`password`?`text`:`password`),e(this).toggleClass(`fa-eye fa-eye-slash`)}).on(`input.wi`,`#email,#recEmail,#regEmail,#regUsuario`,function(){e(this).val(e(this).val().toLowerCase())}).on(`click.wi`,`.wilg_reg`,()=>{N===`si`&&J(`registrar`)}).on(`click.wi`,`.wilg_rec`,()=>{M===`si`&&J(`restablecer`)}).on(`click.wi`,`.wilg_log`,()=>J(`login`)).on(`input.wi keyup.wi`,`#password`,t=>{e(`#Login`).removeClass(`inactivo`),t.key===`Enter`&&e(`#Login`).click()}).on(`input.wi keyup.wi`,`#regPassword1`,t=>{e(`#Registrar`).removeClass(`inactivo`),t.key===`Enter`&&e(`#Registrar`).click()}).on(`input.wi keyup.wi`,`#recEmail`,t=>{t.key===`Enter`&&e(`#Recuperar`).trigger(`click`)}).on(`blur.wi`,Object.keys(I).map(e=>`#${e}`).join(`,`),function(){let t=e(this).val();if(!t)return;let[n,r]=I[this.id],i=n(t);e(this).val(i);let a=r(i);a!==!0&&c(this,a,`error`,2500)}).on(`blur.wi`,`#regUsuario`,async function(){let t=K(`regUsuario`);if(!t||t.length<3)return;if(t.includes(`@`))return e(this).data(`ok`,!1),c(this,`No puede contener @`,`error`,2500);let n=!(await y(x(O,`smiles`,t))).exists();e(this).data(`ok`,n),c(this,`Usuario ${n?`disponible <i class="fa-solid fa-check-circle"></i>`:`no disponible <i class="fa-solid fa-times-circle"></i>`}`,n?`success`:`error`,3e3)}).on(`blur.wi`,`#regEmail`,async function(){let t=K(`regEmail`);if(!t||!t.includes(`@`))return;let n=(await g(b(S(O,`smiles`),_(`email`,`==`,t)))).empty;e(this).data(`ok`,n),c(this,`Email ${n?`disponible <i class="fa-solid fa-check-circle"></i>`:`no disponible <i class="fa-solid fa-times-circle"></i>`}`,n?`success`:`error`,3e3)}).on(`click.wi`,`#btnGoogle`,async function(){if(e(this).data(`busy`))return;e(this).data(`busy`,!0);let t=e(this).html();e(this).html(`<i class="fas fa-circle-notch fa-spin"></i> Conectando...`);try{let e=(await T(D,new h)).user,t=await g(b(S(O,`smiles`),_(`uid`,`==`,e.uid)));if(t.empty)window.wiTempGoogleUser=e,J(`username`);else{let e=t.docs[0].data();if(e.estado===`pendiente`)throw await m(D),Error(`Tu cuenta está pendiente de activación.`);$(e)}}catch(n){n.code!==`auth/popup-closed-by-user`&&n.code!==`auth/cancelled-popup-request`&&a(F[n.code]||n.message,`error`),e(this).html(t).data(`busy`,!1)}}).on(`input.wi keyup.wi`,`#regUsuarioGoogle`,function(t){e(this).val().length>=4?(e(`#CompletarGoogle`).removeClass(`inactivo`),t.key===`Enter`&&e(`#CompletarGoogle`).click()):e(`#CompletarGoogle`).addClass(`inactivo`)}).on(`blur.wi`,`#regUsuarioGoogle`,async function(){let t=K(`regUsuarioGoogle`);if(!t||t.length<3)return;if(t.includes(`@`))return e(this).data(`ok`,!1),c(this,`No puede contener @`,`error`,2500);let n=!(await y(x(O,`smiles`,t))).exists();e(this).data(`ok`,n),c(this,`Usuario ${n?`disponible <i class="fa-solid fa-check-circle"></i>`:`no disponible <i class="fa-solid fa-times-circle"></i>`}`,n?`success`:`error`,3e3)}).on(`click.wi`,`#CompletarGoogle`,async function(){if(e(this).data(`busy`))return;if(!e(`#regTerminosGoogle`).is(`:checked`))return c(e(`#regTerminosGoogle`)[0],`Acepta los términos`,`error`,2500);let t=K(`regUsuarioGoogle`);if(!t||!e(`#regUsuarioGoogle`).data(`ok`))return c(e(`#regUsuarioGoogle`)[0],`Verifica el usuario`,`error`,2500);let n=window.wiTempGoogleUser;if(!n)return a(`Error de sesión con Google. Intenta de nuevo.`,`error`);let r=e(`.wilg_rol_tab.active`).data(`rol`)||`smile`,i={smile:`creador`,gestor:`negocio`,empresa:`empresa`};e(this).data(`busy`,!0),await Y(this,`Creando enlace`,async()=>{let e=n.displayName?n.displayName.split(` `):[`Usuario`,``],o={usuario:t,email:n.email,nombre:e[0],apellidos:e.slice(1).join(` `)||``,rol:r,estado:`activo`,uid:n.uid,terminos:!0,tema:localStorage.wiTema||`Cielo|#0EBEFF`,avatar:n.photoURL||``,bio:``,plan:`free`,segmento:i[r]||`creador`,verificado:!1,registradoPor:`google`};await C(x(O,`smiles`,t),{...o,creado:v()}),$(o),a(`<i class="fa-solid fa-rocket"></i> ¡Tu Linkwii está listo!`,`success`)}),e(this).data(`busy`,!1)}).on(`click.wi`,`.wilg_rol_tab`,function(){let t=e(this).data(`rol`);e(`.wilg_rol_tab`).removeClass(`active`),e(this).addClass(`active`),e(`#rolExtra`).replaceWith(R(t)),ee()}).on(`change.wi`,`input[name="regExtra"]`,function(){let t=e(this).val();e(`.wilg_extra_opt`).removeClass(`active`),e(this).closest(`.wilg_extra_opt`).addClass(`active`);let n=e(`#extraField`);t===`personal`||t===`crear`?n.addClass(`hidden`):(n.removeClass(`hidden`),n.find(`input:first`).focus())}).on(`click.wi`,`#Login`,async function(){await Y(this,`Iniciando`,async()=>{let e=K(`email`),t=K(`password`),{email:n,wi:r}=await X(e);await d(D,n,t);let i=r??(await y(x(O,`smiles`,D.currentUser.displayName||e))).data();if(i.status===`pendiente`)throw await m(D),Error(`Tu cuenta está pendiente de activación. Te notificaremos por email.`);$(i)})}).on(`click.wi`,`#Registrar`,async function(){if(e(this).data(`busy`))return;let t=e(`.wilg_rol_tab.active`).data(`rol`)||`smile`,n=[[!e(`#regTerminos`).is(`:checked`),`#regTerminos`,`Acepta los términos`],[!e(`#regUsuario`).data(`ok`),`#regUsuario`,`Verifica el usuario`],[!e(`#regEmail`).data(`ok`),`#regEmail`,`Verifica el email`]].find(([e])=>e);if(n)return c(e(n[1])[0],n[2],`error`,2500);e(this).data(`busy`,!0),await Y(this,`Registrando`,async()=>{let e={email:K(`regEmail`),usuario:K(`regUsuario`),nombre:K(`regNombre`),apellidos:K(`regApellidos`),password:K(`regPassword`)},{user:n}=await w(D,e.email,e.password);await Promise.all([f(n,{displayName:e.usuario}),E(n)]);let r=t===`empresa`,i=t,o=r?`pendiente`:`activo`,s={usuario:e.usuario,email:e.email,nombre:e.nombre,apellidos:e.apellidos,rol:i,estado:o,uid:n.uid,terminos:!0,tema:localStorage.wiTema||`Cielo|#0EBEFF`,avatar:``,bio:``,plan:`free`,segmento:{smile:`creador`,gestor:`negocio`,empresa:`empresa`}[i]||`creador`,verificado:!1,registradoPor:`correo`,...t===`empresa`&&{ruc:K(`regRuc`),empresaNombre:K(`regEmpresaNombre`)},...t===`gestor`&&{empresaNombre:K(`regEmpresaNombre`)}};await C(x(O,`smiles`,e.usuario),{...s,creado:v()}),r?(await m(D),a(`<i class="fa-solid fa-clock"></i> Registro enviado. Tu cuenta será activada pronto.`,`success`),setTimeout(()=>J(`login`),2500)):($(s),a(`<i class="fa-solid fa-check-circle"></i> ¡Cuenta creada! Verifica tu email`,`success`))}),e(this).data(`busy`,!1)}).on(`click.wi`,`#Recuperar`,async function(){let e=K(`recEmail`);if(!e)return c(this,`Ingresa tu email o usuario`,`error`,2500);await Y(this,`Enviando`,async()=>{let{email:t}=await X(e);await p(D,t),a(`<i class="fa-solid fa-check-circle"></i> Email enviado, revisa tu bandeja`,`success`),setTimeout(()=>J(`login`),2e3)})}).on(`click.wi`,`.tema`,async function(){let e=s(`wiSmile`);e?.usuario&&setTimeout(async()=>{let t=localStorage.wiTema;if(t)try{await C(x(O,`smiles`,e.usuario),{tema:t,actualizado:v()},{merge:!0}),i(`wiSmile`,{...e,tema:t},7),a(`Tema ${t.split(`|`)[0]} guardado <i class="fas fa-check-circle"></i>`,`success`)}catch(e){console.error(`tema:`,e)}},0)});function ee(){let t=e(`input[name="regExtra"]:checked`).val();(t===`personal`||t===`crear`)&&e(`#extraField`).addClass(`hidden`)}var te=(e=`login`)=>{A===`si`?V(e===`registrar`&&N===`si`?`registrar`:`login`):u.navigate(`/login`)},ne=async(e=[])=>{try{await m(D)}catch(e){console.error(`signOut:`,e)}n.logout(e)},re=()=>{e(document).off(`.wi`)};export{te as abrirLogin,D as auth,re as cleanup,W as init,U as render,ne as salir,m as signOut};