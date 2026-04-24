import './inicio.css';
import $ from 'jquery';
import { app, version, by, linkme } from '../wii.js';
import { wiVista, year, wiTip, Saludar } from '../widev.js';

// ── DATA ──────────────────────────────────────────────────────
const roles = ['Creadores de contenido 🚀','Marcas y negocios 💼','Freelancers creativos 🎨','Emprendedores 💡', 'Influencers 🌟'];

const stats = [
  { valor:100,  label:'Gratis',            sufijo:'%' },
  { valor:0,    label:'Límites',           sufijo:'' },
  { valor:24,   label:'Soporte',           sufijo:'/7' },
  { valor:3,    label:'Pasos para crear',  sufijo:'' },
];

const features = [
  { id:'p/crear',  icon:'fa-magic', color:'#0EBEFF', nombre:'Editor en vivo',  desc:'Construye tu Linkwii en tiempo real',
    items:[{icon:'fa-eye',name:'Vista previa',desc:'Lo que ves es lo que tienes'},{icon:'fa-paint-roller',name:'Temas',desc:'Paletas de color premium'},{icon:'fa-bolt',name:'Rápido',desc:'Carga instantánea'}]},
  { id:'p/metricas',   icon:'fa-chart-pie',    color:'#29C72E', nombre:'Métricas Reales',   desc:'Mide el impacto de tu audiencia',
    items:[{icon:'fa-eye',name:'Vistas totales',desc:'Tráfico de tus perfiles'},{icon:'fa-layer-group',name:'Multiperfil',desc:'Analiza todos tus proyectos'},{icon:'fa-bolt',name:'Tiempo real',desc:'Datos precisos al instante'}]},
  { id:'p/ejemplos',  icon:'fa-palette',   color:'#7000FF', nombre:'Personalización',  desc:'Haz que tu marca destaque',
    items:[{icon:'fa-image',name:'Avatares',desc:'Tu logo o foto de perfil'},{icon:'fa-icons',name:'Íconos',desc:'Detección automática'},{icon:'fa-font',name:'Biografía',desc:'Mensaje para tu audiencia'}]},
  { id:'p/pasos', icon:'fa-mobile-screen',   color:'#FF5C69', nombre:'Mobile First', desc:'Diseñado para la era de los smartphones',
    items:[{icon:'fa-mobile',name:'Responsive',desc:'Perfecto en cualquier pantalla'},{icon:'fa-bolt',name:'Ligero',desc:'Máxima velocidad de carga'},{icon:'fa-hand-pointer',name:'Conversión',desc:'Diseñado para recibir clics'}]},
  { id:'p/seo',  icon:'fa-magnifying-glass', color:'#FFB800', nombre:'SEO Optimizado',  desc:'Aparece en búsquedas de Google',
    items:[{icon:'fa-tags',name:'Meta Tags',desc:'Títulos y descripciones'},{icon:'fa-link',name:'Slugs',desc:'URLs amigables y legibles'},{icon:'fa-gauge-high',name:'Rendimiento',desc:'Puntuación perfecta de SEO'}]},
  { id:'p/tienda', icon:'fa-bag-shopping',   color:'#FF8C00', nombre:'Integraciones', desc:'Conecta con tus herramientas favoritas',
    items:[{icon:'fa-cart-shopping',name:'Tiendas',desc:'Enlaces a tus productos'},{icon:'fa-envelope',name:'Formularios',desc:'Capta correos y leads'},{icon:'fa-whatsapp',name:'WhatsApp',desc:'Mensajes directos a tu chat'}]},
];

const beneficios = [
  { icon:'fa-link',       titulo:'Un solo enlace para todos',   desc:'Comparte tu Linkwii en tu bio de Instagram, TikTok o YouTube y dirige a tu audiencia a donde realmente importa.' },
  { icon:'fa-bolt',       titulo:'Velocidad de conversión',   desc:'Nuestros perfiles cargan en milisegundos, garantizando que no pierdas ningún clic por tiempos de espera.' },
  { icon:'fa-layer-group',titulo:'Proyectos ilimitados', desc:'Crea un perfil para tu marca personal, otro para tu tienda y otro para tu canal. Todo desde una sola cuenta gratis.' },
];

// ── PLANTILLAS ────────────────────────────────────────────────
const tplStat = s => `
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${s.valor}" data-sufijo="${s.sufijo}">0</div>
    <div class="ini_stat_l">${s.label}</div>
  </div>`;

const tplFeature = f => `
  <div class="ini_cat_card" style="--cc:${f.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="fas ${f.icon}"></i></div>
      <div class="ini_cat_info"><h3>${f.nombre}</h3><p>${f.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${f.items.map(it=>`
        <li><a href="/${f.id}" class="ini_tool_a">
          <i class="fas ${it.icon}"></i>
          <div><strong>${it.name}</strong><span>${it.desc}</span></div>
          <i class="fas fa-arrow-right ini_ext"></i>
        </a></li>`).join('')}
    </ul>
  </div>`;

const tplBeneficio = (b,i) => `
  <div class="ini_about_card" style="--d:${i*.15}s">
    <div class="ini_card_ico"><i class="fas ${b.icon}"></i></div>
    <h3>${b.titulo}</h3>
    <p>${b.desc}</p>
  </div>`;

// ── RENDER ────────────────────────────────────────────────────
export const render = () => `
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${Saludar()} Influencer</span><span class="ini_wave">👋</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        El Link en Bio <span class="ini_grad">Definitivo</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${roles.map((r,i)=>`<span class="ini_role${i===0?' active':''}">${r}</span>`).join('')}
      </div>

      <p class="ini_sub" style="--d:.54s">
        Centraliza todos tus enlaces, redes sociales y proyectos en un solo perfil profesional. Carga ultrarrápida, diseño impecable y 100% gratis.
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${stats.map(tplStat).join('')}
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
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${wiTip('Instagram')}><i class="fab fa-instagram"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${wiTip('TikTok')}><i class="fab fa-tiktok"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${wiTip('WhatsApp')}><i class="fab fa-whatsapp"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${wiTip('Spotify')}><i class="fab fa-spotify"></i></div>
    </div>
  </section>

  <!-- ===== FUNCIONALIDADES ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Todo lo que <span class="ini_grad">necesitas</span></h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">Herramientas poderosas para maximizar tu presencia digital</p>
    </div>
    <div class="ini_cats_grid">${features.map(tplFeature).join('')}</div>
  </section>

  <!-- ===== ¿POR QUÉ? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Por qué usar <span class="ini_grad">${app}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${beneficios.map(tplBeneficio).join('')}</div>
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
      <p class="ini_cta_autor" style="margin-top:2vh;">Creado con ❤️ por <a href="${linkme}" target="_blank" rel="noopener">${by}</a> · ${version} © ${year()}</p>
    </div>
  </section>

</div>`;

// ── INIT ──────────────────────────────────────────────────────
export const init = () => {

  // Roles rotantes
  let ri = 0;
  const $r = $('.ini_role');
  setInterval(() => { $r.removeClass('active'); $r.eq(ri = (ri+1) % $r.length).addClass('active'); }, 2800);

  // Stats contador — al entrar en viewport
  wiVista('#in_stats', () => {
    $('.ini_stat_n').each(function() {
      const $n = $(this), obj = +$n.data('target'), suf = $n.data('sufijo') || '';
      let v = 0;
      const t = setInterval(() => {
        v += obj / 50;
        if (v >= obj) { $n.text(obj + suf); clearInterval(t); }
        else $n.text(Math.floor(v));
      }, 28);
    });
  });

  // Scroll animations
  wiVista('.ini_cat_card',   null, { anim:'wi_fadeUp', stagger:80  });
  wiVista('.ini_about_card', null, { anim:'wi_fadeUp', stagger:140 });
  wiVista('.ini_cta_wrap',   null, { anim:'wi_fadeUp' });

  console.log(`🚀 ${app} ${version} · Inicio OK`);
};

export const cleanup = () => console.log('🧹 Inicio limpiado');