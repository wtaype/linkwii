import{t as e}from"./vendor-BDh6mtVu.js";import{h as t,i as n,l as r,m as i,o as a,x as o}from"./widev-CwEfqxZK.js";import{_ as s,a as c,f as l,h as u,l as d,m as f,n as p,u as m}from"./firebase-BzxEF9v7.js";import{db as h}from"./firebase-Be0frFSh.js";var g=`wii_horario_v1`,_=`horario`,v=[`Lun`,`Mar`,`Mié`,`Jue`,`Vie`,`Sáb`,`Dom`],y=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`],b={trabajo:{label:`Trabajo`,icon:`fa-briefcase`,color:`#0EBEFF`},estudio:{label:`Estudio`,icon:`fa-book`,color:`#7000FF`},personal:{label:`Personal`,icon:`fa-user`,color:`#FFB800`},salud:{label:`Salud`,icon:`fa-heart-pulse`,color:`#FF5C69`},proyecto:{label:`Proyecto`,icon:`fa-diagram-project`,color:`#A855F7`},reunion:{label:`Reunión`,icon:`fa-users`,color:`#29C72E`},otro:{label:`Otro`,icon:`fa-circle`,color:`#94A3B8`}},x=[`#0EBEFF`,`#7000FF`,`#FFB800`,`#FF5C69`,`#29C72E`,`#A855F7`,`#00C9B1`,`#94A3B8`],S=new Date().getMonth(),C=new Date().getFullYear(),w=null,T=null,E=()=>new Date().toISOString().split(`T`)[0],D=e=>new Date(e+`T00:00:00`).toLocaleDateString(`es-PE`,{weekday:`long`,day:`numeric`,month:`long`}),O=e=>e===E(),k=e=>e<E(),A=e=>`${(e||`hor`).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/\s+/g,`_`).replace(/[^a-z0-9_]/g,``).slice(0,25)}_${Date.now()}`,j=(e,t)=>new Date(t,e+1,0).getDate(),M=(e,t)=>{let n=new Date(t,e,1).getDay();return n===0?6:n-1},N=(e,t,n)=>`${n}-${String(t+1).padStart(2,`0`)}-${String(e).padStart(2,`0`)}`,P=()=>i(`wiSmile`)||null,F=()=>!!P()?.usuario,I=()=>i(g)||[],L=e=>t(g,e,48),R=e=>I().filter(t=>t.fecha===e),z=(e,t)=>I().filter(n=>{if(!n.fecha)return!1;let[r,i]=n.fecha.split(`-`).map(Number);return r===t&&i===e+1}),B=t=>{let n=e(`#mes_sync`);n.length&&(n[0].className=`mes_sync_dot mes_sync_${t}`)},V=async(e=!1)=>{if(!e&&I().length)return B(`ok`);if(!F())return B(`error`);B(`loading`);try{L((await c(d(f(h,_),l(`usuario`,`==`,P().usuario)))).docs.map(e=>({...e.data(),_fsId:e.id,id:e.id}))),B(`ok`)}catch(e){console.error(`❌ mensual:`,e),B(`error`)}},H=e=>{let t=I(),n=e._fsId||A(e.titulo),r={...e,_fsId:n,id:n},i=t.findIndex(e=>e._fsId===n);if(i>=0?t.splice(i,1,r):t.push(r),L(t),F()){B(`saving`);let e=P()||{},t={...r};delete t._fsId,m(u(h,_,n),{...t,usuario:e.usuario||``,email:e.email||``,actualizado:s()},{merge:!0}).then(()=>B(`ok`)).catch(e=>{console.error(`❌ upsert:`,e),B(`error`)})}return r},U=e=>{let t=e._fsId||e.id;L(I().filter(e=>e._fsId!==t)),F()&&(B(`saving`),p(u(h,_,t)).then(()=>B(`ok`)).catch(e=>{console.error(`❌ del:`,e),B(`error`)}))},W=()=>`
<div class="mes_wrap">
  <div class="mes_toolbar">
    <div class="mes_tb_left">
      <div class="mes_logo"><i class="fas fa-calendar-alt"></i><span>Calendario</span></div>
      <span class="mes_sync_dot mes_sync_loading" id="mes_sync" ${o(`Estado de sincronización`)}></span>
    </div>
    <div class="mes_tb_center">
      <div class="mes_nav">
        <button class="mes_nav_btn" id="mes_prev_y" ${o(`Año anterior`)}><i class="fas fa-angles-left"></i></button>
        <button class="mes_nav_btn" id="mes_prev" ${o(`Mes anterior`)}><i class="fas fa-chevron-left"></i></button>
        <div class="mes_nav_label" id="mes_label"></div>
        <button class="mes_nav_btn" id="mes_next" ${o(`Mes siguiente`)}><i class="fas fa-chevron-right"></i></button>
        <button class="mes_nav_btn" id="mes_next_y" ${o(`Año siguiente`)}><i class="fas fa-angles-right"></i></button>
      </div>
      <button class="mes_nav_hoy" id="mes_hoy" ${o(`Ir a hoy`)}><i class="fas fa-calendar-check"></i> Hoy</button>
    </div>
    <div class="mes_tb_right">
      <div class="mes_resumen">
        <div class="mes_res_item" ${o(`Eventos del mes`)}><i class="fas fa-calendar-days" style="color:var(--mco)"></i><strong id="mes_n_total">0</strong><span>Total</span></div>
        <div class="mes_res_sep"></div>
        <div class="mes_res_item" ${o(`Días con eventos`)}><i class="fas fa-calendar-week" style="color:#7000FF"></i><strong id="mes_n_dias">0</strong><span>Días</span></div>
      </div>
      <button class="mes_btn_add" id="mes_add" ${o(`Agregar evento`)}><i class="fas fa-plus"></i> Nuevo</button>
    </div>
  </div>

  <div class="mes_content">
    <div class="mes_calendar" id="mes_calendar">
      <div class="mes_weekdays">
        ${v.map(e=>`<div class="mes_weekday">${e}</div>`).join(``)}
      </div>
      <div class="mes_days" id="mes_days">
        <!-- Days render here -->
      </div>
    </div>
    
    <div class="mes_sidebar" id="mes_sidebar">
      <div class="mes_side_header">
        <span id="mes_side_fecha">Selecciona un día</span>
      </div>
      <div class="mes_side_body" id="mes_side_body">
        <div class="mes_empty"><i class="fas fa-hand-pointer"></i><span>Haz clic en un día para ver sus eventos</span></div>
      </div>
      <div class="mes_side_footer">
        <button class="mes_quick_add dpn" id="mes_quick_add"><i class="fas fa-plus"></i> Agregar evento</button>
      </div>
    </div>
  </div>
</div>

<div class="wiModal" id="modal_mensual">
  <div class="modalBody mes_modal">
    <button class="modalX" ${o(`Cerrar (Esc)`)}><i class="fas fa-times"></i></button>
    <div class="mes_modal_hero" id="mes_m_hero">
      <div class="mes_deco1"></div>
      <div class="mes_deco2"></div>
      <div class="mes_modal_ico" id="mes_m_ico"><i class="fas fa-calendar-plus"></i></div>
      <div class="mes_modal_info">
        <h2 class="mes_modal_tit" id="mes_m_tit">Nuevo Evento</h2>
        <p class="mes_modal_sub" id="mes_m_sub">Planifica tu mes</p>
      </div>
    </div>
    <div class="mes_modal_body">
      <div class="mes_section">
        <div class="mes_section_tit"><i class="fas fa-heading"></i> Información</div>
        <div class="mes_field">
          <label class="mes_label">Título <span class="mes_req">*</span></label>
          <input type="text" class="mes_input" id="m_titulo" placeholder="Ej: Cita médica" maxlength="100" autocomplete="off"/>
        </div>
        <div class="mes_field">
          <label class="mes_label">Descripción</label>
          <textarea class="mes_textarea" id="m_desc" placeholder="Notas adicionales..." rows="2"></textarea>
        </div>
      </div>

      <div class="mes_section">
        <div class="mes_section_tit"><i class="fas fa-clock"></i> Fecha y Hora</div>
        <div class="mes_field_row">
          <div class="mes_field">
            <label class="mes_label"><i class="fas fa-calendar"></i> Fecha</label>
            <input type="date" class="mes_input" id="m_fecha"/>
          </div>
          <div class="mes_field">
            <label class="mes_label"><i class="fas fa-play"></i> Inicio</label>
            <input type="time" class="mes_input" id="m_inicio" value="09:00"/>
          </div>
          <div class="mes_field">
            <label class="mes_label"><i class="fas fa-stop"></i> Fin</label>
            <input type="time" class="mes_input" id="m_fin" value="10:00"/>
          </div>
        </div>
      </div>

      <div class="mes_section">
        <div class="mes_section_tit"><i class="fas fa-sliders"></i> Detalles</div>
        <div class="mes_field_row2">
          <div class="mes_field">
            <label class="mes_label"><i class="fas fa-tag"></i> Categoría</label>
            <select class="mes_select" id="m_tipo">
              ${Object.entries(b).map(([e,t])=>`<option value="${e}">${t.label}</option>`).join(``)}
            </select>
          </div>
          <div class="mes_field">
            <label class="mes_label"><i class="fas fa-flag"></i> Prioridad</label>
            <select class="mes_select" id="m_prio">
              <option value="alta">🔴 Alta</option>
              <option value="media" selected>🟡 Media</option>
              <option value="baja">🟢 Baja</option>
            </select>
          </div>
        </div>
        <div class="mes_field">
          <label class="mes_label"><i class="fas fa-palette"></i> Color</label>
          <div class="mes_colores" id="m_colores">
            ${x.map(e=>`<button type="button" class="mes_color_opt" data-color="${e}" style="--c:${e}" ${o(e)}></button>`).join(``)}
          </div>
        </div>
      </div>
    </div>
    <div class="mes_modal_footer">
      <button type="button" class="mes_btn_del dpn" id="m_eliminar"><i class="fas fa-trash"></i> Eliminar</button>
      <div class="mes_modal_footer_r">
        <button type="button" class="mes_btn_cancel" id="m_cancelar">Cancelar</button>
        <button type="button" class="mes_btn_save" id="m_guardar"><i class="fas fa-check-circle"></i> Guardar</button>
      </div>
    </div>
  </div>
</div>

<div class="wiModal" id="modal_mes_confirm">
  <div class="modalBody mes_modal_confirm">
    <div class="mes_confirm_ico"><i class="fas fa-triangle-exclamation"></i></div>
    <h3>¿Eliminar evento?</h3>
    <p id="mes_confirm_nombre"></p>
    <div class="mes_confirm_btns">
      <button class="mes_btn_cancel" id="mes_conf_no">Cancelar</button>
      <button class="mes_btn_del_confirm" id="mes_conf_si"><i class="fas fa-trash"></i> Eliminar</button>
    </div>
  </div>
</div>`,G=()=>{let t=j(S,C),n=M(S,C),r=z(S,C),i=e(`#mes_days`).empty();for(let e=0;e<n;e++)i.append(`<div class="mes_day mes_day_empty"></div>`);for(let e=1;e<=t;e++){let t=N(e,S,C),n=r.filter(e=>e.fecha===t),a=O(t),o=k(t),s=t===w,c=``;n.length&&(c=`<div class="mes_day_dots">${[...new Set(n.slice(0,3).map(e=>e.color||b[e.tipo]?.color||`#94A3B8`))].map(e=>`<span class="mes_dot" style="background:${e}"></span>`).join(``)}${n.length>3?`<span class="mes_dot_more">+${n.length-3}</span>`:``}</div>`),i.append(`
      <div class="mes_day ${a?`mes_day_hoy`:``} ${o?`mes_day_past`:``} ${s?`mes_day_sel`:``}" data-fecha="${t}">
        <span class="mes_day_num">${e}</span>
        ${c}
        ${n.length?`<span class="mes_day_count">${n.length}</span>`:``}
      </div>
    `)}e(`#mes_label`).html(`<i class="fas fa-calendar"></i> ${y[S]} ${C}`);let a=new Set(r.map(e=>e.fecha)).size;e(`#mes_n_total`).text(r.length),e(`#mes_n_dias`).text(a),w&&K(w)},K=t=>{w=t;let n=R(t).sort((e,t)=>{let n=e.horaInicio||`00:00`,r=t.horaInicio||`00:00`;return n.localeCompare(r)});e(`#mes_side_fecha`).html(`<i class="fas fa-calendar-day"></i> ${D(t)}`),e(`#mes_quick_add`).removeClass(`dpn`);let r=e(`#mes_side_body`);if(!n.length){r.html(`<div class="mes_empty"><i class="fas fa-calendar-xmark"></i><span>Sin eventos este día</span></div>`);return}r.html(n.map(e=>{let t=b[e.tipo]||b.otro,n=e.estado===`completado`;return`
      <div class="mes_side_item ${n?`mes_side_done`:``}" data-id="${e._fsId}">
        <div class="mes_side_bar" style="background:${e.color||t.color}"></div>
        <div class="mes_side_content">
          <div class="mes_side_time">${e.horaInicio||`--:--`} - ${e.horaFin||`--:--`}</div>
          <div class="mes_side_titulo">${e.titulo}</div>
          <div class="mes_side_tipo"><i class="fas ${t.icon}"></i> ${t.label}</div>
        </div>
        <div class="mes_side_actions">
          <button class="mes_side_check" data-id="${e._fsId}" ${o(n?`Pendiente`:`Completar`)}><i class="fas ${n?`fa-undo`:`fa-check`}"></i></button>
          <button class="mes_side_edit" data-id="${e._fsId}" ${o(`Editar`)}><i class="fas fa-pen"></i></button>
        </div>
      </div>
    `}).join(``)),e(`.mes_day`).removeClass(`mes_day_sel`),e(`.mes_day[data-fecha="${t}"]`).addClass(`mes_day_sel`)},q=(t=null)=>{T=t;let n=!t;e(`#mes_m_tit`).text(n?`Nuevo Evento`:`Editar Evento`),e(`#mes_m_sub`).text(n?`Planifica tu mes`:`Modifica los detalles`),e(`#mes_m_ico i`).attr(`class`,n?`fas fa-calendar-plus`:`fas fa-calendar-pen`),e(`#m_titulo`).val(t?.titulo||``),e(`#m_desc`).val(t?.descripcion||``),e(`#m_fecha`).val(t?.fecha||w||E()),e(`#m_inicio`).val(t?.horaInicio||`09:00`),e(`#m_fin`).val(t?.horaFin||`10:00`),e(`#m_tipo`).val(t?.tipo||`trabajo`),e(`#m_prio`).val(t?.prioridad||`media`),e(`.mes_color_opt`).removeClass(`active`),e(`.mes_color_opt[data-color="${t?.color||b[t?.tipo||`trabajo`]?.color||x[0]}"]`).addClass(`active`),e(`#m_eliminar`).toggleClass(`dpn`,n),a(`modal_mensual`),setTimeout(()=>e(`#m_titulo`).trigger(`focus`),100)},J=()=>{let t=e(`#m_titulo`).val().trim();if(!t)return n(`El título es requerido`,`error`);let i=e(`#m_fecha`).val();if(!i)return n(`La fecha es requerida`,`error`);H({...T||{},titulo:t,descripcion:e(`#m_desc`).val().trim(),fecha:i,horaInicio:e(`#m_inicio`).val(),horaFin:e(`#m_fin`).val(),tipo:e(`#m_tipo`).val(),prioridad:e(`#m_prio`).val(),color:e(`.mes_color_opt.active`).data(`color`)||x[0],estado:T?.estado||`pendiente`}),r(`modal_mensual`),G(),w&&K(w),n(T?`✓ Evento actualizado`:`✓ Evento creado`,`success`)},Y=()=>{e(`#mes_prev`).off(`click.mes`).on(`click.mes`,()=>{S--,S<0&&(S=11,C--),G()}),e(`#mes_next`).off(`click.mes`).on(`click.mes`,()=>{S++,S>11&&(S=0,C++),G()}),e(`#mes_prev_y`).off(`click.mes`).on(`click.mes`,()=>{C--,G()}),e(`#mes_next_y`).off(`click.mes`).on(`click.mes`,()=>{C++,G()}),e(`#mes_hoy`).off(`click.mes`).on(`click.mes`,()=>{let e=new Date;S=e.getMonth(),C=e.getFullYear(),w=E(),G(),K(w)}),e(document).off(`click.mes_day`).on(`click.mes_day`,`.mes_day:not(.mes_day_empty)`,function(){K(e(this).data(`fecha`))}),e(`#mes_add`).off(`click.mes`).on(`click.mes`,()=>q()),e(`#mes_quick_add`).off(`click.mes`).on(`click.mes`,()=>q()),e(`#m_guardar`).off(`click.mes`).on(`click.mes`,J),e(`#m_cancelar`).off(`click.mes`).on(`click.mes`,()=>r(`modal_mensual`)),e(document).off(`click.mes_col`).on(`click.mes_col`,`.mes_color_opt`,function(){e(`.mes_color_opt`).removeClass(`active`),e(this).addClass(`active`)}),e(document).off(`click.mes_edit`).on(`click.mes_edit`,`.mes_side_edit, .mes_side_item`,function(t){if(e(t.target).closest(`.mes_side_check`).length)return;let n=e(this).data(`id`)||e(this).closest(`.mes_side_item`).data(`id`),r=I().find(e=>e._fsId===n);r&&q(r)}),e(document).off(`click.mes_check`).on(`click.mes_check`,`.mes_side_check`,function(t){t.stopPropagation();let r=e(this).data(`id`),i=I().find(e=>e._fsId===r);i&&(i.estado=i.estado===`completado`?`pendiente`:`completado`,H(i),G(),w&&K(w),n(i.estado===`completado`?`✓ Completado`:`↺ Pendiente`,`success`))}),e(`#m_eliminar`).off(`click.mes`).on(`click.mes`,()=>{T&&(e(`#mes_confirm_nombre`).text(T.titulo),a(`modal_mes_confirm`))}),e(`#mes_conf_si`).off(`click.mes`).on(`click.mes`,()=>{T&&(U(T),r(`modal_mes_confirm`),r(`modal_mensual`),G(),w&&K(w),n(`🗑 Evento eliminado`,`success`))}),e(`#mes_conf_no`).off(`click.mes`).on(`click.mes`,()=>r(`modal_mes_confirm`)),e(document).off(`keydown.mes`).on(`keydown.mes`,t=>{if(!e(`.wiModal.active`).length&&((t.key===`n`||t.key===`N`)&&(t.preventDefault(),q()),t.key===`ArrowLeft`&&(t.preventDefault(),S--,S<0&&(S=11,C--),G()),t.key===`ArrowRight`&&(t.preventDefault(),S++,S>11&&(S=0,C++),G()),t.key===`t`||t.key===`T`)){t.preventDefault();let e=new Date;S=e.getMonth(),C=e.getFullYear(),G()}})},X=async()=>{await V(),G(),Y()},Z=()=>{e(document).off(`.mes`),e(document).off(`.mes_day`),e(document).off(`.mes_col`),e(document).off(`.mes_edit`),e(document).off(`.mes_check`)};export{Z as cleanup,X as init,W as render};