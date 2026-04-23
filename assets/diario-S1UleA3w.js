import{t as e}from"./vendor-BDh6mtVu.js";import{h as t,i as n,l as r,m as i,o as a,x as o}from"./widev-CwEfqxZK.js";import{_ as s,a as c,f as l,h as u,l as d,m as f,n as p,u as m}from"./firebase-BzxEF9v7.js";import{db as h}from"./firebase-Be0frFSh.js";var g=`wii_horario_v1`,_=`horario`,v=Array.from({length:24},(e,t)=>t),y={trabajo:{label:`Trabajo`,icon:`fa-briefcase`,color:`#0EBEFF`},estudio:{label:`Estudio`,icon:`fa-book`,color:`#7000FF`},personal:{label:`Personal`,icon:`fa-user`,color:`#FFB800`},salud:{label:`Salud`,icon:`fa-heart-pulse`,color:`#FF5C69`},proyecto:{label:`Proyecto`,icon:`fa-diagram-project`,color:`#A855F7`},reunion:{label:`Reunión`,icon:`fa-users`,color:`#29C72E`},otro:{label:`Otro`,icon:`fa-circle`,color:`#94A3B8`}},b={alta:`#FF5C69`,media:`#FFB800`,baja:`#29C72E`},x=[`#0EBEFF`,`#7000FF`,`#FFB800`,`#FF5C69`,`#29C72E`,`#A855F7`,`#00C9B1`,`#94A3B8`],S=new Date().toISOString().split(`T`)[0],C=null,w=()=>new Date().toISOString().split(`T`)[0],T=e=>new Date(e+`T00:00:00`).toLocaleDateString(`es-PE`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}),E=(e,t)=>{let n=new Date(e+`T12:00:00`);return n.setDate(n.getDate()+t),n.toISOString().split(`T`)[0]},D=e=>e===w(),O=e=>e<w(),k=e=>`${(e||`hor`).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/\s+/g,`_`).replace(/[^a-z0-9_]/g,``).slice(0,25)}_${Date.now()}`,A=e=>e/60*6,j=e=>{let[t,n]=e.split(`:`).map(Number);return t*60+(n||0)},M=()=>{let e=new Date;return`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`},N=()=>i(`wiSmile`)||null,P=()=>!!N()?.usuario,F=()=>i(g)||[],I=e=>t(g,e,48),L=e=>F().filter(t=>t.fecha===e),R=t=>{let n=e(`#dia_sync`);n.length&&(n[0].className=`dia_sync_dot dia_sync_${t}`)},z=async(e=!1)=>{if(!e&&F().length)return R(`ok`);if(!P())return R(`error`);R(`loading`);try{I((await c(d(f(h,_),l(`usuario`,`==`,N().usuario)))).docs.map(e=>({...e.data(),_fsId:e.id,id:e.id}))),R(`ok`)}catch(e){console.error(`❌ diario:`,e),R(`error`)}},B=e=>{let t=F(),n=e._fsId||k(e.titulo),r={...e,_fsId:n,id:n},i=t.findIndex(e=>e._fsId===n);if(i>=0?t.splice(i,1,r):t.push(r),I(t),P()){R(`saving`);let e=N()||{},t={...r};delete t._fsId,m(u(h,_,n),{...t,usuario:e.usuario||``,email:e.email||``,actualizado:s()},{merge:!0}).then(()=>R(`ok`)).catch(e=>{console.error(`❌ upsert:`,e),R(`error`)})}return r},V=e=>{let t=e._fsId||e.id;I(F().filter(e=>e._fsId!==t)),P()&&(R(`saving`),p(u(h,_,t)).then(()=>R(`ok`)).catch(e=>{console.error(`❌ del:`,e),R(`error`)}))},H=()=>`
<div class="dia_wrap">
  <div class="dia_toolbar">
    <div class="dia_tb_left">
      <div class="dia_logo"><i class="fas fa-calendar-day"></i><span>Mi Día</span></div>
      <span class="dia_sync_dot dia_sync_loading" id="dia_sync" ${o(`Estado de sincronización`)}></span>
    </div>
    <div class="dia_tb_center">
      <div class="dia_nav">
        <button class="dia_nav_btn" id="dia_prev" ${o(`Día anterior`)}><i class="fas fa-chevron-left"></i></button>
        <button class="dia_nav_hoy" id="dia_hoy" ${o(`Ir a hoy`)}><i class="fas fa-calendar-check"></i> Hoy</button>
        <button class="dia_nav_btn" id="dia_next" ${o(`Día siguiente`)}><i class="fas fa-chevron-right"></i></button>
      </div>
      <span class="dia_fecha_label" id="dia_fecha_label"></span>
    </div>
    <div class="dia_tb_right">
      <div class="dia_resumen">
        <div class="dia_res_item" ${o(`Total eventos`)}><i class="fas fa-calendar-days" style="color:var(--mco)"></i><strong id="dia_n_total">0</strong><span>Total</span></div>
        <div class="dia_res_sep"></div>
        <div class="dia_res_item" ${o(`Pendientes`)}><i class="fas fa-clock" style="color:#FFB800"></i><strong id="dia_n_pend">0</strong><span>Pend.</span></div>
        <div class="dia_res_sep"></div>
        <div class="dia_res_item" ${o(`Completados`)}><i class="fas fa-check-circle" style="color:#29C72E"></i><strong id="dia_n_done">0</strong><span>Hecho</span></div>
      </div>
      <button class="dia_btn_add" id="dia_add" ${o(`Agregar evento (N)`)}><i class="fas fa-plus"></i> Nuevo</button>
    </div>
  </div>

  <div class="dia_content">
    <div class="dia_timeline" id="dia_timeline">
      <div class="dia_time_col">
        ${v.map(e=>`<div class="dia_time_slot" data-hora="${e}"><span>${String(e).padStart(2,`0`)}:00</span></div>`).join(``)}
      </div>
      <div class="dia_events_col" id="dia_events">
        <div class="dia_now_line" id="dia_now_line"></div>
        <!-- Events render here -->
      </div>
    </div>
    
    <div class="dia_sidebar">
      <div class="dia_side_header">
        <i class="fas fa-list-check"></i> Resumen del día
      </div>
      <div class="dia_side_body" id="dia_agenda">
        <!-- Quick agenda list -->
      </div>
      <div class="dia_side_footer">
        <button class="dia_quick_add" id="dia_quick_add"><i class="fas fa-plus"></i> Evento rápido</button>
      </div>
    </div>
  </div>
</div>

<div class="wiModal" id="modal_diario">
  <div class="modalBody dia_modal">
    <button class="modalX" ${o(`Cerrar (Esc)`)}><i class="fas fa-times"></i></button>
    <div class="dia_modal_hero" id="dia_m_hero">
      <div class="dia_deco1"></div>
      <div class="dia_deco2"></div>
      <div class="dia_modal_ico" id="dia_m_ico"><i class="fas fa-calendar-plus"></i></div>
      <div class="dia_modal_info">
        <h2 class="dia_modal_tit" id="dia_m_tit">Nuevo Evento</h2>
        <p class="dia_modal_sub" id="dia_m_sub">Organiza tu día con precisión</p>
      </div>
    </div>
    <div class="dia_modal_body">
      <div class="dia_section">
        <div class="dia_section_tit"><i class="fas fa-heading"></i> Información</div>
        <div class="dia_field">
          <label class="dia_label">Título <span class="dia_req">*</span></label>
          <input type="text" class="dia_input" id="d_titulo" placeholder="Ej: Reunión de equipo" maxlength="100" autocomplete="off"/>
        </div>
        <div class="dia_field">
          <label class="dia_label">Descripción</label>
          <textarea class="dia_textarea" id="d_desc" placeholder="Notas adicionales..." rows="2"></textarea>
        </div>
      </div>

      <div class="dia_section">
        <div class="dia_section_tit"><i class="fas fa-clock"></i> Horario</div>
        <div class="dia_field_row">
          <div class="dia_field">
            <label class="dia_label"><i class="fas fa-play"></i> Inicio</label>
            <input type="time" class="dia_input dia_input_time" id="d_inicio" value="09:00"/>
          </div>
          <div class="dia_field">
            <label class="dia_label"><i class="fas fa-stop"></i> Fin</label>
            <input type="time" class="dia_input dia_input_time" id="d_fin" value="10:00"/>
          </div>
          <div class="dia_field">
            <label class="dia_label"><i class="fas fa-calendar"></i> Fecha</label>
            <input type="date" class="dia_input" id="d_fecha"/>
          </div>
        </div>
      </div>

      <div class="dia_section">
        <div class="dia_section_tit"><i class="fas fa-sliders"></i> Detalles</div>
        <div class="dia_field_row">
          <div class="dia_field">
            <label class="dia_label"><i class="fas fa-tag"></i> Categoría</label>
            <select class="dia_select" id="d_tipo">
              ${Object.entries(y).map(([e,t])=>`<option value="${e}">${t.label}</option>`).join(``)}
            </select>
          </div>
          <div class="dia_field">
            <label class="dia_label"><i class="fas fa-flag"></i> Prioridad</label>
            <select class="dia_select" id="d_prio">
              <option value="alta">🔴 Alta</option>
              <option value="media" selected>🟡 Media</option>
              <option value="baja">🟢 Baja</option>
            </select>
          </div>
        </div>
        <div class="dia_field">
          <label class="dia_label"><i class="fas fa-palette"></i> Color</label>
          <div class="dia_colores" id="d_colores">
            ${x.map(e=>`<button type="button" class="dia_color_opt" data-color="${e}" style="--c:${e}" ${o(e)}></button>`).join(``)}
          </div>
        </div>
      </div>
    </div>
    <div class="dia_modal_footer">
      <button type="button" class="dia_btn_del dpn" id="d_eliminar"><i class="fas fa-trash"></i> Eliminar</button>
      <div class="dia_modal_footer_r">
        <button type="button" class="dia_btn_cancel" id="d_cancelar">Cancelar</button>
        <button type="button" class="dia_btn_save" id="d_guardar"><i class="fas fa-check-circle"></i> Guardar</button>
      </div>
    </div>
  </div>
</div>

<div class="wiModal" id="modal_dia_confirm">
  <div class="modalBody dia_modal_confirm">
    <div class="dia_confirm_ico"><i class="fas fa-triangle-exclamation"></i></div>
    <h3>¿Eliminar evento?</h3>
    <p id="dia_confirm_nombre"></p>
    <div class="dia_confirm_btns">
      <button class="dia_btn_cancel" id="dia_conf_no">Cancelar</button>
      <button class="dia_btn_del_confirm" id="dia_conf_si"><i class="fas fa-trash"></i> Eliminar</button>
    </div>
  </div>
</div>`,U=()=>{let t=L(S),n=e(`#dia_events`);n.find(`.dia_event`).remove(),t.forEach(e=>{let t=y[e.tipo]||y.otro,r=e.color||t.color,i=j(e.horaInicio||`09:00`),a=j(e.horaFin||`10:00`),s=A(i),c=Math.max(A(a-i),2.5),l=e.estado===`completado`;n.append(`
      <div class="dia_event ${l?`dia_event_done`:``}" data-id="${e._fsId}" 
           style="--ec:${r}; top:${s}vh; height:${c}vh;">
        <div class="dia_event_bar"></div>
        <div class="dia_event_content">
          <div class="dia_event_time">${e.horaInicio} - ${e.horaFin}</div>
          <div class="dia_event_titulo">${e.titulo}</div>
          ${e.descripcion?`<div class="dia_event_desc">${e.descripcion}</div>`:``}
          <div class="dia_event_meta">
            <span class="dia_event_tipo"><i class="fas ${t.icon}"></i> ${t.label}</span>
            <span class="dia_event_prio" style="color:${b[e.prioridad]||b.media}"><i class="fas fa-flag"></i></span>
          </div>
        </div>
        <div class="dia_event_actions">
          <button class="dia_ev_check" data-id="${e._fsId}" ${o(l?`Marcar pendiente`:`Completar`)}><i class="fas ${l?`fa-undo`:`fa-check`}"></i></button>
          <button class="dia_ev_edit" data-id="${e._fsId}" ${o(`Editar`)}><i class="fas fa-pen"></i></button>
        </div>
      </div>
    `)}),W(),G(),K(),e(`#dia_fecha_label`).html(`<i class="fas ${D(S)?`fa-bolt`:O(S)?`fa-history`:`fa-calendar`}"></i> ${T(S)}`),D(S)?e(`#dia_fecha_label`).addClass(`dia_es_hoy`):e(`#dia_fecha_label`).removeClass(`dia_es_hoy`)},W=()=>{let t=e(`#dia_now_line`);if(!D(S)){t.hide();return}let n=new Date,r=n.getHours()*60+n.getMinutes();t.css(`top`,A(r)+`vh`).show(),t.find(`.dia_now_time`).text(M())},G=()=>{let t=L(S).sort((e,t)=>j(e.horaInicio||`00:00`)-j(t.horaInicio||`00:00`)),n=e(`#dia_agenda`);if(!t.length){n.html(`<div class="dia_empty"><i class="fas fa-calendar-xmark"></i><span>Sin eventos para este día</span></div>`);return}n.html(t.map(e=>{let t=y[e.tipo]||y.otro,n=e.estado===`completado`;return`
      <div class="dia_agenda_item ${n?`dia_agenda_done`:``}" data-id="${e._fsId}">
        <div class="dia_agenda_time">${e.horaInicio}</div>
        <div class="dia_agenda_bar" style="background:${e.color||t.color}"></div>
        <div class="dia_agenda_info">
          <span class="dia_agenda_titulo">${e.titulo}</span>
          <span class="dia_agenda_tipo"><i class="fas ${t.icon}"></i> ${t.label}</span>
        </div>
        <button class="dia_agenda_check" data-id="${e._fsId}"><i class="fas ${n?`fa-check-circle`:`fa-circle`}"></i></button>
      </div>
    `}).join(``))},K=()=>{let t=L(S);e(`#dia_n_total`).text(t.length),e(`#dia_n_pend`).text(t.filter(e=>e.estado!==`completado`).length),e(`#dia_n_done`).text(t.filter(e=>e.estado===`completado`).length)},q=(t=null)=>{C=t;let n=!t;e(`#dia_m_tit`).text(n?`Nuevo Evento`:`Editar Evento`),e(`#dia_m_sub`).text(n?`Organiza tu día con precisión`:`Modifica los detalles del evento`),e(`#dia_m_ico i`).attr(`class`,n?`fas fa-calendar-plus`:`fas fa-calendar-pen`),e(`#dia_m_hero`).css(`background`,n?`linear-gradient(145deg, var(--mco), var(--hv))`:`linear-gradient(145deg, ${t?.color||`var(--mco)`}, var(--hv))`),e(`#d_titulo`).val(t?.titulo||``),e(`#d_desc`).val(t?.descripcion||``),e(`#d_inicio`).val(t?.horaInicio||`09:00`),e(`#d_fin`).val(t?.horaFin||`10:00`),e(`#d_fecha`).val(t?.fecha||S),e(`#d_tipo`).val(t?.tipo||`trabajo`),e(`#d_prio`).val(t?.prioridad||`media`),e(`.dia_color_opt`).removeClass(`active`),e(`.dia_color_opt[data-color="${t?.color||y[t?.tipo||`trabajo`]?.color||x[0]}"]`).addClass(`active`),e(`#d_eliminar`).toggleClass(`dpn`,n),a(`modal_diario`),setTimeout(()=>e(`#d_titulo`).trigger(`focus`),100)},J=()=>{let t=e(`#d_titulo`).val().trim();if(!t)return n(`El título es requerido`,`error`);let i=e(`#d_inicio`).val(),a=e(`#d_fin`).val();if(j(a)<=j(i))return n(`La hora de fin debe ser posterior al inicio`,`error`);B({...C||{},titulo:t,descripcion:e(`#d_desc`).val().trim(),horaInicio:i,horaFin:a,fecha:e(`#d_fecha`).val()||S,tipo:e(`#d_tipo`).val(),prioridad:e(`#d_prio`).val(),color:e(`.dia_color_opt.active`).data(`color`)||x[0],estado:C?.estado||`pendiente`}),r(`modal_diario`),U(),n(C?`✓ Evento actualizado`:`✓ Evento creado`,`success`)},Y=()=>{e(`#dia_prev`).off(`click.dia`).on(`click.dia`,()=>{S=E(S,-1),U()}),e(`#dia_next`).off(`click.dia`).on(`click.dia`,()=>{S=E(S,1),U()}),e(`#dia_hoy`).off(`click.dia`).on(`click.dia`,()=>{S=w(),U()}),e(`#dia_add, #dia_quick_add`).off(`click.dia`).on(`click.dia`,()=>q()),e(`#d_guardar`).off(`click.dia`).on(`click.dia`,J),e(`#d_cancelar`).off(`click.dia`).on(`click.dia`,()=>r(`modal_diario`)),e(document).off(`click.dia_col`).on(`click.dia_col`,`.dia_color_opt`,function(){e(`.dia_color_opt`).removeClass(`active`),e(this).addClass(`active`)}),e(document).off(`click.dia_ev`).on(`click.dia_ev`,`.dia_ev_edit, .dia_event`,function(t){if(e(t.target).closest(`.dia_ev_check`).length)return;let n=e(this).data(`id`)||e(this).closest(`.dia_event`).data(`id`),r=F().find(e=>e._fsId===n);r&&q(r)}),e(document).off(`click.dia_check`).on(`click.dia_check`,`.dia_ev_check, .dia_agenda_check`,function(t){t.stopPropagation();let r=e(this).data(`id`),i=F().find(e=>e._fsId===r);i&&(i.estado=i.estado===`completado`?`pendiente`:`completado`,B(i),U(),n(i.estado===`completado`?`✓ Evento completado`:`↺ Evento pendiente`,`success`))}),e(document).off(`click.dia_agenda`).on(`click.dia_agenda`,`.dia_agenda_item`,function(t){if(e(t.target).closest(`.dia_agenda_check`).length)return;let n=e(this).data(`id`),r=F().find(e=>e._fsId===n);r&&q(r)}),e(`#d_eliminar`).off(`click.dia`).on(`click.dia`,()=>{C&&(e(`#dia_confirm_nombre`).text(C.titulo),a(`modal_dia_confirm`))}),e(`#dia_conf_si`).off(`click.dia`).on(`click.dia`,()=>{C&&(V(C),r(`modal_dia_confirm`),r(`modal_diario`),U(),n(`🗑 Evento eliminado`,`success`))}),e(`#dia_conf_no`).off(`click.dia`).on(`click.dia`,()=>r(`modal_dia_confirm`)),e(document).off(`keydown.dia`).on(`keydown.dia`,t=>{e(`.wiModal.active`).length||((t.key===`n`||t.key===`N`)&&(t.preventDefault(),q()),t.key===`ArrowLeft`&&(t.preventDefault(),S=E(S,-1),U()),t.key===`ArrowRight`&&(t.preventDefault(),S=E(S,1),U()),(t.key===`t`||t.key===`T`)&&(t.preventDefault(),S=w(),U()))}),setInterval(W,6e4)},X=async()=>{await z(),U(),Y()},Z=()=>{e(document).off(`.dia`),e(document).off(`.dia_col`),e(document).off(`.dia_ev`),e(document).off(`.dia_check`),e(document).off(`.dia_agenda`)};export{Z as cleanup,X as init,H as render};