import{t as e}from"./rolldown-runtime-WNZMJCWm.js";import{t}from"./vendor-CdV9uUFu.js";import{S as n,T as r,a as i,x as a}from"./widev-DUThRLxv.js";import{n as o,s,t as c}from"./wii-CfWM6qmV.js";var l=e({cleanup:()=>y,init:()=>v,render:()=>_}),u=[`Creadores de contenido 🚀`,`Marcas y negocios 💼`,`Freelancers creativos 🎨`,`Emprendedores 💡`,`Influencers 🌟`],d=[{valor:100,label:`Gratis`,sufijo:`%`},{valor:0,label:`Límites`,sufijo:``},{valor:24,label:`Soporte`,sufijo:`/7`},{valor:3,label:`Pasos para crear`,sufijo:``}],f=[{id:`p/crear`,icon:`fa-magic`,color:`#0EBEFF`,nombre:`Editor en vivo`,desc:`Construye tu Linkwii en tiempo real`,items:[{icon:`fa-eye`,name:`Vista previa`,desc:`Lo que ves es lo que tienes`},{icon:`fa-paint-roller`,name:`Temas`,desc:`Paletas de color premium`},{icon:`fa-bolt`,name:`Rápido`,desc:`Carga instantánea`}]},{id:`p/metricas`,icon:`fa-chart-pie`,color:`#29C72E`,nombre:`Métricas Reales`,desc:`Mide el impacto de tu audiencia`,items:[{icon:`fa-eye`,name:`Vistas totales`,desc:`Tráfico de tus perfiles`},{icon:`fa-layer-group`,name:`Multiperfil`,desc:`Analiza todos tus proyectos`},{icon:`fa-bolt`,name:`Tiempo real`,desc:`Datos precisos al instante`}]},{id:`p/ejemplos`,icon:`fa-palette`,color:`#7000FF`,nombre:`Personalización`,desc:`Haz que tu marca destaque`,items:[{icon:`fa-image`,name:`Avatares`,desc:`Tu logo o foto de perfil`},{icon:`fa-icons`,name:`Íconos`,desc:`Detección automática`},{icon:`fa-font`,name:`Biografía`,desc:`Mensaje para tu audiencia`}]},{id:`p/pasos`,icon:`fa-mobile-screen`,color:`#FF5C69`,nombre:`Mobile First`,desc:`Diseñado para la era de los smartphones`,items:[{icon:`fa-mobile`,name:`Responsive`,desc:`Perfecto en cualquier pantalla`},{icon:`fa-bolt`,name:`Ligero`,desc:`Máxima velocidad de carga`},{icon:`fa-hand-pointer`,name:`Conversión`,desc:`Diseñado para recibir clics`}]},{id:`p/seo`,icon:`fa-magnifying-glass`,color:`#FFB800`,nombre:`SEO Optimizado`,desc:`Aparece en búsquedas de Google`,items:[{icon:`fa-tags`,name:`Meta Tags`,desc:`Títulos y descripciones`},{icon:`fa-link`,name:`Slugs`,desc:`URLs amigables y legibles`},{icon:`fa-gauge-high`,name:`Rendimiento`,desc:`Puntuación perfecta de SEO`}]},{id:`p/tienda`,icon:`fa-bag-shopping`,color:`#FF8C00`,nombre:`Integraciones`,desc:`Conecta con tus herramientas favoritas`,items:[{icon:`fa-cart-shopping`,name:`Tiendas`,desc:`Enlaces a tus productos`},{icon:`fa-envelope`,name:`Formularios`,desc:`Capta correos y leads`},{icon:`fa-whatsapp`,name:`WhatsApp`,desc:`Mensajes directos a tu chat`}]}],p=[{icon:`fa-link`,titulo:`Un solo enlace para todos`,desc:`Comparte tu Linkwii en tu bio de Instagram, TikTok o YouTube y dirige a tu audiencia a donde realmente importa.`},{icon:`fa-bolt`,titulo:`Velocidad de conversión`,desc:`Nuestros perfiles cargan en milisegundos, garantizando que no pierdas ningún clic por tiempos de espera.`},{icon:`fa-layer-group`,titulo:`Proyectos ilimitados`,desc:`Crea un perfil para tu marca personal, otro para tu tienda y otro para tu canal. Todo desde una sola cuenta gratis.`}],m=e=>`
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${e.valor}" data-sufijo="${e.sufijo}">0</div>
    <div class="ini_stat_l">${e.label}</div>
  </div>`,h=e=>`
  <div class="ini_cat_card" style="--cc:${e.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="fas ${e.icon}"></i></div>
      <div class="ini_cat_info"><h3>${e.nombre}</h3><p>${e.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${e.items.map(t=>`
        <li><a href="/${e.id}" class="ini_tool_a">
          <i class="fas ${t.icon}"></i>
          <div><strong>${t.name}</strong><span>${t.desc}</span></div>
          <i class="fas fa-arrow-right ini_ext"></i>
        </a></li>`).join(``)}
    </ul>
  </div>`,g=(e,t)=>`
  <div class="ini_about_card" style="--d:${t*.15}s">
    <div class="ini_card_ico"><i class="fas ${e.icon}"></i></div>
    <h3>${e.titulo}</h3>
    <p>${e.desc}</p>
  </div>`,_=()=>`
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${i()} Influencer</span><span class="ini_wave">👋</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        El Link en Bio <span class="ini_grad">Definitivo</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${u.map((e,t)=>`<span class="ini_role${t===0?` active`:``}">${e}</span>`).join(``)}
      </div>

      <p class="ini_sub" style="--d:.54s">
        Centraliza todos tus enlaces, redes sociales y proyectos en un solo perfil profesional. Carga ultrarrápida, diseño impecable y 100% gratis.
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${d.map(m).join(``)}
      </div>

      <div class="ini_btns" style="--d:.9s">
        <a href="/p/crear" class="ini_btn_p"><i class="fas fa-magic"></i> Crear mi Linkwii</a>
        <a href="/p/ejemplos" class="ini_btn_s"><i class="fas fa-eye"></i> Ver ejemplos</a>
      </div>

    </div>

    <!-- Derecha: preview Linkwii -->
    <div class="ini_hero_visual">
      <div class="ini_linkwii_preview" style="--d:.3s">
        <div class="ini_lw_avatar">LW</div>
        <div class="ini_lw_title">@tu_marca</div>
        <div class="ini_lw_bio">Todos mis enlaces en un solo lugar 👇</div>
        <div class="ini_lw_links">
          <div class="ini_lw_btn"><i class="fab fa-instagram"></i> Mi Instagram</div>
          <div class="ini_lw_btn"><i class="fab fa-tiktok"></i> TikTok</div>
          <div class="ini_lw_btn"><i class="fab fa-youtube"></i> YouTube Canal</div>
          <div class="ini_lw_btn"><i class="fas fa-store"></i> Tienda Oficial</div>
        </div>
      </div>
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${a(`Instagram`)}><i class="fab fa-instagram"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${a(`TikTok`)}><i class="fab fa-tiktok"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${a(`WhatsApp`)}><i class="fab fa-whatsapp"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${a(`Spotify`)}><i class="fab fa-spotify"></i></div>
    </div>
  </section>

  <!-- ===== FUNCIONALIDADES ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Todo lo que <span class="ini_grad">necesitas</span></h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">Herramientas poderosas para maximizar tu presencia digital</p>
    </div>
    <div class="ini_cats_grid">${f.map(h).join(``)}</div>
  </section>

  <!-- ===== ¿POR QUÉ? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Por qué usar <span class="ini_grad">${c}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${p.map(g).join(``)}</div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="ini_cta_sec">
    <div class="ini_cta_wrap">
      <i class="fas fa-link ini_cta_ico"></i>
      <h2>¿Listo para impulsar tus enlaces?</h2>
      <p>Crea tu perfil en segundos. Es completamente gratis.</p>
      <div class="ini_cta_chips">
        <a href="/p/crear" class="ini_btn_p"><i class="fas fa-rocket"></i> Empezar Ahora</a>
      </div>
      <p class="ini_cta_autor" style="margin-top:2vh;">Creado con ❤️ por <a href="${s}" target="_blank" rel="noopener">${o}</a> · v15 © ${r()}</p>
    </div>
  </section>

</div>`,v=()=>{let e=0,r=t(`.ini_role`);setInterval(()=>{r.removeClass(`active`),r.eq(e=(e+1)%r.length).addClass(`active`)},2800),n(`#in_stats`,()=>{t(`.ini_stat_n`).each(function(){let e=t(this),n=+e.data(`target`),r=e.data(`sufijo`)||``,i=0,a=setInterval(()=>{i+=n/50,i>=n?(e.text(n+r),clearInterval(a)):e.text(Math.floor(i))},28)})}),n(`.ini_cat_card`,null,{anim:`wi_fadeUp`,stagger:80}),n(`.ini_about_card`,null,{anim:`wi_fadeUp`,stagger:140}),n(`.ini_cta_wrap`,null,{anim:`wi_fadeUp`}),console.log(`🚀 ${c} v15 · Inicio OK`)},y=()=>console.log(`🧹 Inicio limpiado`);export{l as t};