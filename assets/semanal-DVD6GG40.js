import{t as e}from"./vendor-BDh6mtVu.js";import{b as t,g as n,h as r,i,l as a,m as o,o as s,x as c}from"./widev-CwEfqxZK.js";import{_ as l,a as u,f as d,h as f,l as p,m,n as h,u as g}from"./firebase-BzxEF9v7.js";import{db as _}from"./firebase-Be0frFSh.js";var v=`wii_horario_v1`,y=`horario`,b=[`Lunes`,`Martes`,`Miércoles`,`Jueves`,`Viernes`,`Sábado`,`Domingo`],x={trabajo:{label:`Trabajo`,icon:`fa-briefcase`,color:`#0EBEFF`},estudio:{label:`Estudio`,icon:`fa-book`,color:`#7000FF`},personal:{label:`Personal`,icon:`fa-user`,color:`#FFB800`},salud:{label:`Salud`,icon:`fa-heart-pulse`,color:`#FF5C69`},proyecto:{label:`Proyecto`,icon:`fa-diagram-project`,color:`#A855F7`},reunion:{label:`Reunión`,icon:`fa-users`,color:`#29C72E`},otro:{label:`Otro`,icon:`fa-circle`,color:`#94A3B8`}},S={alta:{label:`Alta`,color:`#FF5C69`,icon:`fa-arrow-up`},media:{label:`Media`,color:`#FFB800`,icon:`fa-minus`},baja:{label:`Baja`,color:`#29C72E`,icon:`fa-arrow-down`}},C=[`#0EBEFF`,`#7000FF`,`#FFB800`,`#FF5C69`,`#29C72E`,`#A855F7`,`#00C9B1`,`#94A3B8`],w=()=>new Date().toISOString().split(`T`)[0],T=(e=new Date)=>{let t=new Date(e),n=t.getDay()||7;return t.setDate(t.getDate()-n+1),t.toISOString().split(`T`)[0]},E=(e,t)=>{let n=new Date(e+`T12:00:00`);return n.setDate(n.getDate()+t),n.toISOString().split(`T`)[0]},D=e=>new Date(e+`T00:00:00`).toLocaleDateString(`es-PE`,{day:`numeric`,month:`short`}),O=e=>new Date(e+`T00:00:00`).toLocaleDateString(`es-PE`,{weekday:`long`,day:`numeric`,month:`long`}),k=e=>`${(e||`hor`).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/\s+/g,`_`).replace(/[^a-z0-9_]/g,``).slice(0,25)}_${Date.now()}`,A=e=>e===w(),j=e=>e<w(),M=e=>{let t=e.length,n=e.filter(e=>e.estado===`completado`).length;return t?Math.round(n/t*100):0},N=()=>o(`wiSmile`)||null,P=()=>!!N()?.usuario,F=()=>o(v)||[],I=e=>r(v,e,48),L=t=>{let n=e(`#sem_sync`);n.length&&(n[0].className=`sem_sync_dot sem_sync_${t}`)},R=async(e=!1)=>{if(!e&&F().length)return L(`ok`);if(!P())return L(`error`);L(`loading`);try{I((await u(p(m(_,y),d(`usuario`,`==`,N().usuario)))).docs.map(e=>({...e.data(),_fsId:e.id,id:e.id}))),L(`ok`)}catch(e){console.error(`❌ semanal:`,e),L(`error`)}},z=e=>{let t=F(),n=e._fsId||k(e.titulo),r={...e,_fsId:n,id:n},i=t.findIndex(e=>e._fsId===n);if(i>=0?t.splice(i,1,r):t.push(r),I(t),P()){L(`saving`);let e=N()||{},t={...r};delete t._fsId,g(f(_,y,n),{...t,usuario:e.usuario||``,email:e.email||``,actualizado:l()},{merge:!0}).then(()=>L(`ok`)).catch(e=>{console.error(`❌ upsert:`,e),L(`error`)})}return r},B=e=>{let t=e._fsId||e.id;I(F().filter(e=>e._fsId!==t)),P()&&(L(`saving`),h(f(_,y,t)).then(()=>L(`ok`)).catch(e=>{console.error(`❌ del:`,e),L(`error`)}))},V=T(),H=null,U=null,W=()=>{let e=E(V,6);return F().filter(t=>t.fecha>=V&&t.fecha<=e)},G=e=>F().filter(t=>t.fecha===e),K=()=>`
<div class="sem_wrap">

  <!-- TOOLBAR -->
  <div class="sem_toolbar">
    <div class="sem_tb_left">
      <div class="sem_logo"><i class="fas fa-table-cells"></i><span>Semana</span></div>
      <span class="sem_sync_dot sem_sync_loading" id="sem_sync" ${c(`Estado de sincronización`)}></span>
    </div>
    <div class="sem_tb_center">
      <div class="sem_week_nav">
        <button class="sem_nav_btn" id="sem_prev" ${c(`Semana anterior`)}><i class="fas fa-chevron-left"></i></button>
        <button class="sem_nav_hoy" id="sem_hoy"><i class="fas fa-crosshairs"></i> Hoy</button>
        <button class="sem_nav_btn" id="sem_next" ${c(`Semana siguiente`)}><i class="fas fa-chevron-right"></i></button>
      </div>
      <div class="sem_week_label" id="sem_week_label">—</div>
    </div>
    <div class="sem_tb_right">
      <div class="sem_resumen" id="sem_resumen">
        <div class="sem_res_item"><i class="fas fa-layer-group" style="color:var(--mco)"></i><strong id="sem_n_total">0</strong><span>Actividades</span></div>
        <div class="sem_res_sep"></div>
        <div class="sem_res_item"><i class="fas fa-circle-check" style="color:#29C72E"></i><strong id="sem_n_done">0</strong><span>Hechas</span></div>
        <div class="sem_res_sep"></div>
        <div class="sem_res_item"><i class="fas fa-chart-line" style="color:#0EBEFF"></i><strong id="sem_n_pct">0%</strong><span>Avance</span></div>
      </div>
      <button class="sem_btn_add" id="sem_nuevo"><i class="fas fa-plus"></i> Nueva</button>
    </div>
  </div>

  <!-- BOARD SEMANAL -->
  <div class="sem_board" id="sem_board"></div>

</div>

<!-- MODAL ACTIVIDAD -->
<div class="wiModal" id="modal_semanal">
  <div class="modalBody sem_modal">
    <button class="modalX"><i class="fas fa-times"></i></button>
    
    <div class="sem_modal_hero" id="sem_m_hero">
      <div class="sem_deco1"></div>
      <div class="sem_deco2"></div>
      <div class="sem_modal_ico" id="sem_m_ico"><i class="fas fa-calendar-plus"></i></div>
      <div class="sem_modal_info">
        <h2 class="sem_modal_tit" id="sem_m_tit">Nueva Actividad</h2>
        <p class="sem_modal_sub" id="sem_m_sub">Organiza tu semana</p>
      </div>
    </div>
    
    <div class="sem_modal_body">
      <div class="sem_section">
        <div class="sem_section_tit"><i class="fas fa-info-circle"></i> Información</div>
        <div class="sem_field">
          <label class="sem_label"><i class="fas fa-heading"></i> Título <span class="sem_req">*</span></label>
          <input type="text" class="sem_input" id="s_titulo" placeholder="Ej: Estudiar matemáticas" maxlength="80"/>
        </div>
        <div class="sem_field">
          <label class="sem_label"><i class="fas fa-align-left"></i> Descripción</label>
          <textarea class="sem_textarea" id="s_nota" placeholder="Detalles opcionales…" maxlength="300" rows="2"></textarea>
        </div>
      </div>
      
      <div class="sem_section">
        <div class="sem_section_tit"><i class="fas fa-clock"></i> Horario</div>
        <div class="sem_field_row">
          <div class="sem_field">
            <label class="sem_label"><i class="fas fa-calendar-day"></i> Fecha</label>
            <input type="date" class="sem_input" id="s_fecha"/>
          </div>
          <div class="sem_field">
            <label class="sem_label"><i class="fas fa-clock"></i> Inicio</label>
            <input type="time" class="sem_input" id="s_hora_inicio"/>
          </div>
          <div class="sem_field">
            <label class="sem_label"><i class="fas fa-hourglass-end"></i> Fin</label>
            <input type="time" class="sem_input" id="s_hora_fin"/>
          </div>
        </div>
      </div>
      
      <div class="sem_section">
        <div class="sem_section_tit"><i class="fas fa-sliders"></i> Detalles</div>
        <div class="sem_field_row">
          <div class="sem_field">
            <label class="sem_label"><i class="fas fa-tag"></i> Tipo</label>
            <select class="sem_select" id="s_tipo">
              ${Object.entries(x).map(([e,t])=>`<option value="${e}">${t.label}</option>`).join(``)}
            </select>
          </div>
          <div class="sem_field">
            <label class="sem_label"><i class="fas fa-flag"></i> Prioridad</label>
            <select class="sem_select" id="s_prio">
              ${Object.entries(S).map(([e,t])=>`<option value="${e}">${t.label}</option>`).join(``)}
            </select>
          </div>
          <div class="sem_field">
            <label class="sem_label"><i class="fas fa-circle-half-stroke"></i> Estado</label>
            <select class="sem_select" id="s_estado">
              <option value="pendiente">Pendiente</option>
              <option value="progreso">En progreso</option>
              <option value="completado">Completado</option>
            </select>
          </div>
        </div>
      </div>
      
      <div class="sem_section">
        <div class="sem_section_tit"><i class="fas fa-palette"></i> Personalizar</div>
        <div class="sem_colores" id="s_colores">
          ${C.map(e=>`<button type="button" class="sem_color_opt" data-color="${e}" style="--c:${e}"></button>`).join(``)}
        </div>
      </div>
    </div>
    
    <div class="sem_modal_footer">
      <button type="button" class="sem_btn_del dpn" id="s_eliminar"><i class="fas fa-trash"></i> Eliminar</button>
      <div class="sem_modal_footer_r">
        <button type="button" class="sem_btn_cancel" id="s_cancelar">Cancelar</button>
        <button type="button" class="sem_btn_save" id="s_guardar"><i class="fas fa-floppy-disk"></i> Guardar</button>
      </div>
    </div>
  </div>
</div>

<!-- MODAL CONFIRMAR -->
<div class="wiModal" id="modal_sem_confirm">
  <div class="modalBody sem_modal_confirm">
    <div class="sem_confirm_ico"><i class="fas fa-triangle-exclamation"></i></div>
    <h3>¿Eliminar actividad?</h3>
    <p id="sem_confirm_nombre"></p>
    <div class="sem_confirm_btns">
      <button class="sem_btn_cancel" id="sem_conf_no">Cancelar</button>
      <button class="sem_btn_del_confirm" id="sem_conf_si"><i class="fas fa-trash"></i> Eliminar</button>
    </div>
  </div>
</div>`,q=()=>{let t=e(`#sem_board`).empty(),n=W(),r=n.length,i=n.filter(e=>e.estado===`completado`).length,a=M(n);e(`#sem_n_total`).text(r),e(`#sem_n_done`).text(i),e(`#sem_n_pct`).text(`${a}%`);let o=E(V,6);e(`#sem_week_label`).text(`${D(V)} — ${D(o)}`),b.forEach((e,n)=>{let r=E(V,n),i=G(r),a=A(r),o=j(r),s=i.filter(e=>e.estado===`completado`).length,l=M(i);t.append(`
    <div class="sem_col${a?` sem_col_hoy`:``}${o?` sem_col_past`:``}" data-fecha="${r}">
      <div class="sem_col_head">
        <div class="sem_col_dia">
          <span class="sem_col_nombre">${e}</span>
          <span class="sem_col_fecha${a?` sem_col_hoy_badge`:``}">${D(r)}${a?` · Hoy`:``}</span>
        </div>
        <div class="sem_col_meta">
          ${i.length?`<span class="sem_col_count">${i.length}</span>`:``}
          ${o?``:`<button class="sem_col_add" data-fecha="${r}" ${c(`Agregar`)}><i class="fas fa-plus"></i></button>`}
        </div>
      </div>
      ${i.length?`
      <div class="sem_col_prog">
        <div class="sem_col_prog_bar"><div class="sem_col_prog_fill" style="width:${l}%"></div></div>
        <span class="sem_col_prog_txt">${s}/${i.length}</span>
      </div>`:``}
      <div class="sem_col_body" data-fecha="${r}">
        ${i.length===0?`<div class="sem_empty_dia"><i class="fas fa-moon"></i><span>${o?`Sin registros`:`Vacío`}</span></div>`:``}
      </div>
    </div>`);let u=t.find(`.sem_col_body[data-fecha="${r}"]`);i.sort((e,t)=>(e.horaInicio||`99:99`).localeCompare(t.horaInicio||`99:99`)).forEach(e=>{let t=x[e.tipo]||x.otro;S[e.prioridad]||S.media;let n=e.color||t.color,r=e.estado===`completado`;u.append(`
      <div class="sem_item${r?` sem_item_done`:``}" data-id="${e._fsId}" style="--ic:${n}">
        <div class="sem_item_left">
          <button class="sem_item_check${r?` sem_item_checked`:``}" data-id="${e._fsId}" ${c(r?`Marcar pendiente`:`Completar`)}>
            <i class="fas ${r?`fa-circle-check`:`fa-circle-dot`}"></i>
          </button>
        </div>
        <div class="sem_item_body">
          <div class="sem_item_titulo">${e.titulo}</div>
          <div class="sem_item_meta">
            ${e.horaInicio?`<span class="sem_item_hora"><i class="fas fa-clock"></i> ${e.horaInicio}${e.horaFin?` - `+e.horaFin:``}</span>`:``}
            <span class="sem_item_tipo" style="--tc:${t.color}"><i class="fas ${t.icon}"></i> ${t.label}</span>
          </div>
          ${e.descripcion?`<p class="sem_item_nota">${e.descripcion}</p>`:``}
        </div>
        <div class="sem_item_actions">
          <button class="sem_item_edit" data-id="${e._fsId}" ${c(`Editar`)}><i class="fas fa-pen"></i></button>
        </div>
      </div>`)})})},J=t=>{e(`#s_colores .sem_color_opt`).removeClass(`active`),e(`#s_colores .sem_color_opt[data-color="${t}"]`).addClass(`active`)},Y=()=>e(`#s_colores .sem_color_opt.active`).data(`color`)||C[0],X=(t,n)=>{e(`#sem_m_hero`).css(`background`,`linear-gradient(145deg,${t},${t}99)`),e(`#sem_m_ico`).css(`background`,`${t}33`).html(`<i class="fas ${n}" style="color:${t}"></i>`)},Z=(t={},n=null)=>{H=t._fsId?t:null;let r=t.tipo||`trabajo`,i=t.color||x[r]?.color||C[0];e(`#s_titulo`).val(t.titulo||``),e(`#s_nota`).val(t.descripcion||``),e(`#s_fecha`).val(t.fecha||n||w()),e(`#s_hora_inicio`).val(t.horaInicio||``),e(`#s_hora_fin`).val(t.horaFin||``),e(`#s_tipo`).val(r),e(`#s_prio`).val(t.prioridad||`media`),e(`#s_estado`).val(t.estado||`pendiente`),J(i),X(i,x[r]?.icon||`fa-calendar-plus`),e(`#sem_m_tit`).text(H?`Editar Actividad`:`Nueva Actividad`),e(`#sem_m_sub`).text(H?O(t.fecha):`Organiza tu semana`),e(`#s_eliminar`).toggleClass(`dpn`,!H),s(`modal_semanal`),setTimeout(()=>e(`#s_titulo`).focus(),30)},Q=()=>{let n=e(`#s_titulo`).val().trim();if(!n)return i(`Título requerido`,`warning`);let r=e(`#s_fecha`).val();if(!r)return i(`Fecha requerida`,`warning`);t(`#s_guardar`,!0,`Guardar`);let o=e(`#s_tipo`).val();z({...H||{},titulo:n,descripcion:e(`#s_nota`).val().trim(),fecha:r,horaInicio:e(`#s_hora_inicio`).val()||``,horaFin:e(`#s_hora_fin`).val()||``,tipo:o,prioridad:e(`#s_prio`).val(),estado:e(`#s_estado`).val(),color:Y(),creado:H?.creado||new Date().toISOString()}),a(`modal_semanal`),q(),t(`#s_guardar`,!1,`Guardar`),i(H?`✓ Actividad actualizada`:`✓ Actividad creada`,`success`)},$=e=>{let t=F().find(t=>t._fsId===e);if(!t)return;let n=t.estado===`completado`?`pendiente`:`completado`;z({...t,estado:n,completadoEn:n===`completado`?new Date().toISOString():``}),q(),n===`completado`&&i(`✅ ¡Completado!`,`success`)},ee=t=>{e(`#sem_confirm_nombre`).text(t.titulo||`Sin título`),U=()=>{B(t),a(`modal_sem_confirm`),q(),i(`Actividad eliminada ✓`,`success`)},s(`modal_sem_confirm`)},te=()=>{e(document).off(`.sem`),e(document).on(`click.sem`,`#sem_prev`,()=>{V=E(V,-7),q()}).on(`click.sem`,`#sem_next`,()=>{V=E(V,7),q()}).on(`click.sem`,`#sem_hoy`,()=>{V=T(),q()}).on(`click.sem`,`#sem_nuevo`,()=>Z({},null)).on(`click.sem`,`.sem_col_add`,function(t){t.stopPropagation(),Z({},e(this).data(`fecha`))}).on(`click.sem`,`.sem_item_check`,function(t){t.stopPropagation(),$(e(this).data(`id`))}).on(`click.sem`,`.sem_item`,function(t){if(e(t.target).closest(`.sem_item_check,.sem_item_edit`).length)return;let n=F().find(t=>t._fsId===e(this).data(`id`));n&&Z(n)}).on(`click.sem`,`.sem_item_edit`,function(t){t.stopPropagation();let n=F().find(t=>t._fsId===e(this).data(`id`));n&&Z(n)}).on(`change.sem`,`#s_tipo`,function(){let t=e(this).val();X(Y(),x[t]?.icon||`fa-calendar-plus`)}).on(`click.sem`,`#s_colores .sem_color_opt`,function(){J(e(this).data(`color`)),X(e(this).data(`color`),x[e(`#s_tipo`).val()]?.icon||`fa-calendar-plus`)}).on(`click.sem`,`#s_cancelar`,()=>a(`modal_semanal`)).on(`click.sem`,`#s_guardar`,Q).on(`keydown.sem`,`#s_titulo`,e=>{e.key===`Enter`&&Q()}).on(`click.sem`,`#s_eliminar`,()=>{H&&(a(`modal_semanal`),ee(H))}).on(`click.sem`,`#sem_conf_no`,()=>a(`modal_sem_confirm`)).on(`click.sem`,`#sem_conf_si`,()=>U?.()).on(`keydown.sem`,t=>{e(`.wiModal.active`).length||t.target.tagName===`INPUT`||t.target.tagName===`TEXTAREA`||((t.key===`n`||t.key===`N`)&&(t.preventDefault(),Z({})),t.key===`ArrowLeft`&&(t.preventDefault(),V=E(V,-7),q()),t.key===`ArrowRight`&&(t.preventDefault(),V=E(V,7),q()),(t.key===`t`||t.key===`T`)&&(t.preventDefault(),V=T(),q()))})},ne=async()=>{V=T(),await R(),q(),te(),n(R,q),console.log(`📅 Semanal v2.0 PRO OK`)},re=()=>{e(document).off(`.sem`),console.log(`🧹 Semanal limpiado`)};export{re as cleanup,ne as init,K as render};