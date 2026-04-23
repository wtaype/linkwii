import{t as e}from"./vendor-BDh6mtVu.js";import{C as t,h as n,m as r,n as i,x as a}from"./widev-CwEfqxZK.js";import{n as o}from"./rutas-2bT34B5M.js";import{d as s,h as c}from"./firebase-BzxEF9v7.js";import{db as l}from"./firebase-Be0frFSh.js";var u=()=>r(`wiSmile`)||{},d=()=>{let e=u();if(!e.email)return location.replace(`/`),``;let t=e.nombre||``,n=e.apellidos||``,r=e.usuario||``,i=e.email||``,o=e.rol||`smile`,s=e.uid||``,c=e.imagen||`./smile.avif`;return((t[0]||``)+(n[0]||``)).toUpperCase(),`
  <div class="prf_wrap">

    <div class="prf_hero">
      <div class="prf_av_wrap">
        <img src="${c}" alt="${t}" class="prf_av" onerror="this.src='./smile.avif'">
        <div class="prf_av_ring"></div>
      </div>
      <div class="prf_hero_info">
        <h1 class="prf_fullname">${t} ${n}</h1>
        <p class="prf_username"><i class="fas fa-at"></i> ${r}</p>
        <span class="prf_rol_chip"><i class="fas fa-shield-alt"></i> ${o}</span>
      </div>
    </div>

    <div class="prf_grid">

      <div class="prf_card">
        <h2 class="prf_card_tit"><i class="fas fa-user-edit"></i> Editar perfil</h2>
        <label>Nombre</label>
        <input id="prf_nombre"    value="${t}"    placeholder="Tu nombre">
        <label>Apellidos</label>
        <input id="prf_apellidos" value="${n}" placeholder="Tus apellidos">
        <button id="prf_guardar" class="prf_btn"><i class="fas fa-save"></i> Guardar cambios</button>
      </div>

      <div class="prf_card">
        <h2 class="prf_card_tit"><i class="fas fa-info-circle"></i> Datos de cuenta</h2>
        <div class="prf_row">
          <span class="prf_lbl"><i class="fas fa-envelope"></i> Email</span>
          <span class="prf_val">${i}</span>
        </div>
        <div class="prf_row">
          <span class="prf_lbl"><i class="fas fa-user"></i> Usuario</span>
          <span class="prf_val">@${r}</span>
        </div>
        <div class="prf_row">
          <span class="prf_lbl"><i class="fas fa-shield-alt"></i> Rol</span>
          <span class="prf_val prf_rol_val">${o}</span>
        </div>
        <div class="prf_row prf_uid_row">
          <span class="prf_lbl"><i class="fas fa-fingerprint"></i> UID</span>
          <span class="prf_uid_val">${s}</span>
          <button class="prf_copy" id="prf_copy_uid" ${a(`Copiar UID`)}><i class="fas fa-copy"></i></button>
        </div>
      </div>

    </div>
  </div>`},f=()=>{if(!u().email)return o.navigate(`/`);e(document).on(`click.prf`,`#prf_guardar`,async function(){let t=u(),r=e(`#prf_nombre`).val().trim(),o=e(`#prf_apellidos`).val().trim();if(!r)return a(document.getElementById(`prf_nombre`),`Ingresa tu nombre`,`error`);e(this).prop(`disabled`,!0).html(`<i class="fas fa-spinner fa-spin"></i> Guardando`);try{await s(c(l,`smiles`,t.usuario),{nombre:r,apellidos:o}),n(`wiSmile`,{...t,nombre:r,apellidos:o},24),e(`.prf_fullname`).text(`${r} ${o}`),i(`Perfil actualizado ✅`,`success`)}catch{i(`Error al guardar`,`error`)}finally{e(this).prop(`disabled`,!1).html(`<i class="fas fa-save"></i> Guardar cambios`)}}).on(`click.prf`,`#prf_copy_uid`,function(){t(u().uid||``,this,`¡UID copiado!`)})},p=()=>e(document).off(`.prf`);export{p as cleanup,f as init,d as render};