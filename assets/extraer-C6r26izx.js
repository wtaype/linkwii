import{t as e}from"./vendor-BDh6mtVu.js";import{i as t}from"./widev-CwEfqxZK.js";import{t as n}from"./wii-hgYUGqM9.js";var r=(()=>{if(typeof window>`u`)return``;let e=window.location.hostname;return new Set([`localhost`,void 0]).has(e)?`http://${e}:3000`:window.location.origin})(),i=()=>`
  <div class="extraer_container mwb">
    <section class="extraer_main">
      <!-- LEFT COLUMN (29%) -->
      <div class="extraer_left">
        <div class="video_info_section">
          <div class="video_info_header">
            <h3><i class="fas fa-wand-magic-sparkles"></i> Extraer Contenido</h3>
          </div>

          <div class="upload_zone_compact" id="uploadZone">
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Doble clic para seleccionar video</p>
            <input type="file" id="videoInput" accept="video/*" hidden>
          </div>

          <div class="video_actions">
            <button class="btn_select" id="btnSelect">
              <i class="fas fa-folder-open"></i>
              <span>Seleccionar</span>
            </button>
            <button class="btn_delete" id="btnDelete">
              <i class="fas fa-trash-alt"></i>
              <span>Eliminar</span>
            </button>
          </div>

          <div class="video_stats_grid" id="videoStatsGrid" style="display:none;">
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-clock"></i></div>
              <div class="stat_card_label">Duración:</div>
              <div class="stat_card_value" id="videoDuration">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-desktop"></i></div>
              <div class="stat_card_label">Resolución:</div>
              <div class="stat_card_value" id="videoResolution">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-hdd"></i></div>
              <div class="stat_card_label">Tamaño:</div>
              <div class="stat_card_value" id="videoSize">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-file-video"></i></div>
              <div class="stat_card_label">Formato:</div>
              <div class="stat_card_value" id="videoFormat">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-tachometer-alt"></i></div>
              <div class="stat_card_label">Bitrate:</div>
              <div class="stat_card_value" id="videoBitrate">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-star"></i></div>
              <div class="stat_card_label">FPS:</div>
              <div class="stat_card_value" id="videoFps">--</div>
            </div>
          </div>

          <div class="extraction_preview" id="extractionPreview" style="display:none;">
            <div class="preview_header">
              <h4><i class="fas fa-eye"></i> <span id="previewTitle">Vista Previa</span></h4>
            </div>
            <div class="preview_comparison">
              <div class="preview_cell">
                <span class="preview_label">Original:</span>
                <span class="preview_value" id="previewOriginal">--</span>
              </div>
              <div class="preview_arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="preview_cell">
                <span class="preview_label" id="previewLabel">Estimado:</span>
                <span class="preview_value success" id="previewEstimated">--</span>
              </div>
              <div class="preview_reduction">
                <i class="fas fa-chart-pie"></i>
                <span id="previewReduction">0%</span>
              </div>
            </div>
          </div>

          <div class="file_info_left" id="fileInfoLeft" style="display:none;">
            <div class="file_info_header">
              <i class="fas fa-file-video"></i>
              <span>Nombre:</span>
            </div>
            <div class="file_name_display" id="fileNameDisplay" title="">video.mp4</div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN (70%) -->
      <div class="extraer_right">
        <div class="video_player_wrapper">
          <div class="no_video_placeholder" id="noVideoPlaceholder">
            <i class="fas fa-video"></i>
            <h3>Carga un video para extraer contenido</h3>
            <p>Soporta MP4, MOV, WEBM, AVI, MKV y más formatos</p>
          </div>
          <div class="video_player_container" id="videoPlayerContainer" style="display:none;">
            <video id="extraerVideo" controls playsinline autoplay loop></video>
            <div class="video_timeline" id="videoTimeline" style="display:none;">
              <div class="timeline_marker" id="timelineMarker"></div>
              <div class="timeline_tooltip" id="timelineTooltip">0:00</div>
            </div>
          </div>
        </div>

        <div class="extraction_controls" id="extractionControls" style="display:none;">
          <div class="controls_row">
            <div class="control_group">
              <label><i class="fas fa-magic"></i> Extraer:</label>
              <select id="extractionTypeSelect">
                <option value="audio">🎵 Audio (MP3)</option>
                <option value="frame-manual">📸 Frame Actual</option>
                <option value="frame-auto">🖼️ 3 Frames Automáticos</option>
              </select>
            </div>

            <div class="control_group" id="qualityGroup">
              <label><i class="fas fa-star"></i> Calidad:</label>
              <select id="qualitySelect">
                <option value="320">Alta (320 kbps)</option>
                <option value="192" selected>Media (192 kbps)</option>
                <option value="128">Baja (128 kbps)</option>
                <option value="96">Muy Baja (96 kbps)</option>
              </select>
            </div>

            <div class="control_group" id="formatGroup" style="display:none;">
              <label><i class="fas fa-image"></i> Formato:</label>
              <select id="formatSelect">
                <option value="jpg" selected>JPG</option>
                <option value="png">PNG</option>
                <option value="webp">WEBP</option>
              </select>
            </div>
          </div>

          <div class="controls_row extraction_action">
            <button class="btn_extract" id="btnExtract">
              <i class="fas fa-download"></i>
              <span>Extraer Audio</span>
            </button>
            <div class="progress_wrapper" id="progressWrapper" style="display:none;">
              <div class="progress_bar_inline">
                <div class="progress_fill_inline" id="progressFillInline"></div>
              </div>
              <span class="progress_text" id="progressText">0%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
`,a=()=>{console.log(`✅ Extraer de ${n} cargado`);let i=null,a={},o=null,s=`audio`,c=!1,l=(e,t)=>{let n=t.duration,r=e.size,i=r*8/n/1e3;return{duration:n,size:r,bitrate:i,bitrateMbps:i/1e3,format:e.name.split(`.`).pop().toLowerCase(),width:t.videoWidth,height:t.videoHeight,fps:30}},u=()=>{if(!o)return;let t=e(`#extractionTypeSelect`).val(),n=0;switch(t){case`audio`:let t=e(`#qualitySelect`).val(),r=parseInt(t);n=o.duration*r*1e3/8;break;case`frame-auto`:n=d(e(`#formatSelect`).val(),90)*3;break;case`frame-manual`:n=d(e(`#formatSelect`).val(),90);break}let r=((1-n/o.size)*100).toFixed(1);e(`#previewOriginal`).text(y(o.size)),e(`#previewEstimated`).text(y(n)),e(`#previewReduction`).text(`${r>0?`-`:`+`}${Math.abs(r)}%`),e(`#previewLabel`).text(`Estimado:`),e(`#previewTitle`).text(`Vista Previa`),n>=o.size*.95?(e(`#previewEstimated`).removeClass(`success`).addClass(`warning`),e(`#previewReduction`).closest(`.preview_reduction`).css(`background`,`var(--warning)`)):(e(`#previewEstimated`).removeClass(`warning`).addClass(`success`),e(`#previewReduction`).closest(`.preview_reduction`).css(`background`,`var(--success)`)),e(`#extractionPreview`).fadeIn()},d=(e,t)=>{let n=o.width*o.height/10,r={jpg:.8,png:2.5,webp:.6}[e]||1,i=parseInt(t)/100;return n*r*i},f=e=>`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`,p=n=>{if(!n.type.startsWith(`video/`)){t(`Por favor selecciona un archivo de video válido`,`error`,3e3);return}i=n;let r=URL.createObjectURL(n),s=e(`#extraerVideo`)[0];s.onloadedmetadata=s.onerror=null,s.src=r,s.onloadedmetadata=()=>{a={duration:s.duration,width:s.videoWidth,height:s.videoHeight,size:n.size,format:n.name.split(`.`).pop().toUpperCase(),name:n.name},o=l(n,s),e(`#noVideoPlaceholder`).hide(),e(`#videoPlayerContainer, #extractionControls, #extractionPreview, #videoStatsGrid, #fileInfoLeft, #videoTimeline`).show(),e(`#fileNameDisplay`).text(n.name).attr(`title`,n.name),e(`#videoDuration`).text(f(s.duration)),e(`#videoResolution`).text(`${s.videoWidth}x${s.videoHeight}`),e(`#videoSize`).text(y(n.size)),e(`#videoFormat`).text(a.format),e(`#videoBitrate`).text(`${o.bitrateMbps.toFixed(2)} Mbps`),e(`#videoFps`).text(`${o.fps} fps`),u(),t(`✅ Video analizado: ${o.format.toUpperCase()} | ${f(s.duration)}`,`success`,3e3)},s.onerror=()=>{i&&(t(`Error al cargar el video. Intenta con otro archivo.`,`error`,3e3),m())}},m=()=>{let t=e(`#extraerVideo`)[0];t&&(t.onloadedmetadata=t.onerror=null,t.pause(),t.src&&URL.revokeObjectURL(t.src),t.src=``,t.load()),e(`#videoPlayerContainer, #extractionControls, #extractionPreview, #videoStatsGrid, #fileInfoLeft, #videoTimeline`).hide(),e(`#noVideoPlaceholder`).show(),e(`#videoInput`).val(``),e(`#progressWrapper`).hide(),i=null,a={},o=null,s=`audio`,c=!1},h=async()=>{if(!i){t(`No hay video para extraer`,`warning`,2e3);return}if(c){t(`Ya hay una extracción en progreso`,`warning`,2e3);return}try{c=!0,e(`#btnExtract`).prop(`disabled`,!0).html(`<i class="fas fa-spinner fa-spin"></i> Extrayendo...`),e(`#progressWrapper`).fadeIn(),v(0);let n=e(`#extractionTypeSelect`).val(),a=new FormData;switch(a.append(`video`,i),a.append(`type`,n),n){case`audio`:a.append(`quality`,e(`#qualitySelect`).val());break;case`frame-manual`:let t=e(`#extraerVideo`)[0];a.append(`timestamp`,t.currentTime),a.append(`format`,e(`#formatSelect`).val());break;case`frame-auto`:a.append(`format`,e(`#formatSelect`).val());break}v(10);let s=await fetch(`${r}/extract`,{method:`POST`,body:a});if(!s.ok)throw Error(`Error del servidor: ${s.statusText}`);v(50);let l=await s.json();if(!l.success)throw Error(l.error||`Error desconocido`);if(v(80),l.files&&Array.isArray(l.files)){for(let e of l.files)await g(`${r}${e.downloadUrl}`,e.filename);let n=l.files.reduce((e,t)=>e+(t.size||0),0);v(100),e(`#previewTitle`).text(`Resultado`),e(`#previewLabel`).text(`Extraído:`),e(`#previewEstimated`).text(y(n));let i=((1-n/o.size)*100).toFixed(1);e(`#previewReduction`).text(`${i>0?`-`:`+`}${Math.abs(i)}%`),setTimeout(()=>{e(`#progressWrapper`).fadeOut(),e(`#btnExtract`).prop(`disabled`,!1).html(`<i class="fas fa-download"></i> Extraer Frames`),t(`✅ ${l.files.length} frames extraídos: ${y(n)}`,`success`,4e3)},1e3)}else{let i=`${r}${l.downloadUrl}`,a=await(await fetch(i)).blob();v(95);let s=document.createElement(`a`),c=URL.createObjectURL(a);s.href=c,s.download=l.filename,s.click(),URL.revokeObjectURL(c);let u=a.size,d=((1-u/o.size)*100).toFixed(1);v(100),e(`#previewTitle`).text(`Resultado`),e(`#previewLabel`).text(`Extraído:`),e(`#previewEstimated`).text(y(u)),e(`#previewReduction`).text(`${d>0?`-`:`+`}${Math.abs(d)}%`),u>=o.size?(e(`#previewEstimated`).removeClass(`success`).addClass(`warning`),e(`#previewReduction`).closest(`.preview_reduction`).css(`background`,`var(--warning)`)):(e(`#previewEstimated`).removeClass(`warning`).addClass(`success`),e(`#previewReduction`).closest(`.preview_reduction`).css(`background`,`var(--success)`)),setTimeout(()=>{e(`#progressWrapper`).fadeOut(),e(`#btnExtract`).prop(`disabled`,!1).html(`<i class="fas fa-download"></i> Extraer ${_(n)}`),t(`✅ ${_(n)} extraído: ${y(u)}`,`success`,4e3)},1e3)}}catch(n){console.error(`❌ Error extrayendo:`,n),e(`#progressWrapper`).fadeOut(),e(`#btnExtract`).prop(`disabled`,!1).html(`<i class="fas fa-download"></i> Extraer ${_(s)}`),t(`Error al extraer: ${n.message}`,`error`,4e3)}finally{c=!1}},g=async(e,t)=>{let n=await(await fetch(e)).blob(),r=document.createElement(`a`),i=URL.createObjectURL(n);r.href=i,r.download=t,r.click(),URL.revokeObjectURL(i)},_=e=>({audio:`Audio`,"frame-auto":`Frames`,"frame-manual":`Frame`})[e]||`Contenido`,v=t=>{e(`#progressFillInline`).css(`width`,`${t}%`),e(`#progressText`).text(`${t}%`)},y=e=>e<1024?e.toFixed(2)+` B`:e<1024*1024?(e/1024).toFixed(2)+` KB`:(e/(1024*1024)).toFixed(2)+` MB`;e(`#uploadZone`).on(`dblclick`,()=>e(`#videoInput`).click()).on(`dragover`,t=>{t.preventDefault(),e(t.currentTarget).addClass(`dragover`)}).on(`dragleave`,t=>e(t.currentTarget).removeClass(`dragover`)).on(`drop`,t=>{t.preventDefault(),e(t.currentTarget).removeClass(`dragover`);let n=t.originalEvent.dataTransfer.files;n.length&&p(n[0])}),e(`#videoInput`).on(`change`,e=>{let t=e.target.files[0];t&&p(t)}),e(document).on(`click`,`#btnSelect`,()=>!c&&e(`#videoInput`).click()),e(document).on(`click`,`#btnDelete`,()=>{if(c)return t(`No puedes eliminar mientras se extrae`,`warning`,2e3);confirm(`¿Estás seguro de eliminar este video?`)&&(m(),t(`Video eliminado`,`success`,2e3))}),e(document).on(`change`,`#extractionTypeSelect`,()=>{let t=e(`#extractionTypeSelect`).val();s=t,t===`audio`?(e(`#qualityGroup`).show(),e(`#formatGroup`).hide()):(e(`#qualityGroup`).hide(),e(`#formatGroup`).show()),e(`#btnExtract span`).text(`Extraer ${{audio:`Audio`,"frame-auto":`Frames`,"frame-manual":`Frame`}[t]}`),o&&u()}),e(document).on(`change`,`#qualitySelect, #formatSelect`,()=>{o&&u()}),e(document).on(`click`,`#btnExtract`,h),e(`#extraerVideo`).on(`timeupdate`,function(){let t=this.currentTime/this.duration*100;e(`#timelineMarker`).css(`left`,`${t}%`)}),e(`#videoTimeline`).on(`mousemove`,function(t){let n=e(`#extraerVideo`)[0],r=this.getBoundingClientRect(),i=(t.clientX-r.left)/r.width*n.duration;e(`#timelineTooltip`).text(f(i)).css(`left`,`${t.clientX-r.left}px`).show()}).on(`mouseleave`,function(){e(`#timelineTooltip`).hide()}).on(`click`,function(n){let r=e(`#extraerVideo`)[0],i=this.getBoundingClientRect();r.currentTime=(n.clientX-i.left)/i.width*r.duration,t(`📸 Posicionado en: ${f(r.currentTime)}`,`success`,2e3)})},o=()=>{console.log(`🧹 Extraer limpiado`),e(`#uploadZone, #videoInput, #btnSelect, #btnDelete, #btnExtract, #extractionTypeSelect, #videoTimeline`).off();let t=e(`#extraerVideo`)[0];t?.src&&URL.revokeObjectURL(t.src)};export{o as cleanup,a as init,i as render};