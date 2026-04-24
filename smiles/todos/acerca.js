import './acerca.css';
import $ from 'jquery';
import { app, version, by, linkme } from '../wii.js';
import { wiVista, year, wiTip, wicopy } from '../widev.js';

// ============================================================
// 📦 DATA
// ============================================================
const stats = [
  { num: '∞',    label: 'Enlaces ilimitados', icon: 'fa-link',             color: '#0EBEFF' },
  { num: '100%', label: 'Gratis para siempre',  icon: 'fa-heart',          color: '#FF5C69' },
  { num: '0',    label: 'Límites de proyectos', icon: 'fa-infinity',       color: '#29C72E' },
  { num: '24/7', label: 'Estadísticas en vivo', icon: 'fa-chart-pie',      color: '#7000FF' },
];

const beneficios = [
  {
    icon: 'fa-layer-group', color: 'Cielo',
    titulo: 'Múltiples Proyectos',
    desc: 'Crea un perfil para tu marca personal, otro para tu empresa y otro para tu portafolio. Administra infinitos "Linkwiis" desde una sola cuenta.',
  },
  {
    icon: 'fa-bolt', color: 'Dulce',
    titulo: 'Carga Ultrarrápida',
    desc: 'Nuestros perfiles públicos están diseñados para cargar al instante, sin elementos pesados que distraigan a tu audiencia.',
  },
  {
    icon: 'fa-wand-magic-sparkles', color: 'Paz',
    titulo: 'Detección Automática',
    desc: 'Solo pega la URL y nuestro sistema detectará automáticamente si es Instagram, WhatsApp, TikTok o cualquier otra red social, asignándole su ícono.',
  },
  {
    icon: 'fa-paint-roller', color: 'Mora',
    titulo: 'Personalización',
    desc: 'Elige los colores de tus botones, actualiza tu avatar y biografía en tiempo real con una vista previa al lado de tu editor.',
  },
  {
    icon: 'fa-chart-line', color: 'Cielo',
    titulo: 'Analíticas Integradas',
    desc: 'Mide cuántas personas visitan cada uno de tus proyectos en tiempo real y optimiza tu estrategia de conversión.',
  },
  {
    icon: 'fa-mobile-screen', color: 'Dulce',
    titulo: '100% Mobile First',
    desc: 'Sabemos que el 90% de tus clics vienen de Instagram o TikTok. Todo Linkwii está pensado y diseñado para móviles.',
  },
];

const modulos = [
  { icon: 'fa-plus-circle',   color: '#0EBEFF', nombre: 'Editor en vivo',  desc: 'Crea tu perfil en segundos',   url: '/p/crear'  },
  { icon: 'fa-chart-line',    color: '#FF5C69', nombre: 'Métricas',        desc: 'Monitorea tu tráfico',         url: '/p/metricas'},
  { icon: 'fa-palette',       color: '#29C72E', nombre: 'Temas',           desc: 'Personaliza colores',          url: '/p/crear'  },
];

const pasos = [
  { num: '1', icon: 'fa-user-plus',    titulo: 'Crea tu cuenta',      desc: 'Regístrate gratis en segundos.' },
  { num: '2', icon: 'fa-pen-nib',      titulo: 'Agrega tus enlaces',  desc: 'Crea un proyecto y pega todos tus links de redes sociales y webs.' },
  { num: '3', icon: 'fa-share-nodes',  titulo: 'Comparte al mundo',   desc: 'Pon tu enlace de Linkwii en tu bio de Instagram o TikTok y listo.' },
];

const valores = [
  { icon: 'fa-bullseye', color: '#FF5C69', titulo: 'Nuestra Misión',
    desc: 'Centralizar toda la presencia digital de las personas y marcas en un solo enlace hiper-optimizado, sin barreras de pago.' },
  { icon: 'fa-eye', color: '#0EBEFF', titulo: 'Nuestra Visión',
    desc: 'Convertirnos en la plataforma definitiva para creadores y empresas que necesitan organizar sus links de forma profesional.' },
  { icon: 'fa-heart', color: '#29C72E', titulo: 'Nuestros Valores',
    desc: 'Sencillez extrema, gratuidad, velocidad inigualable y un diseño que prioriza a tu audiencia.' },
];

const testimonios = [
  { avatar: '👩‍💼', nombre: 'Carla Mendoza',  rol: 'Influencer de Moda',
    texto: 'Linkwii cambió mi vida. Ahora pongo un solo enlace en TikTok y mis seguidores encuentran mi tienda, mi Instagram y mis videos al instante.', estrellas: 5 },
  { avatar: '👨‍🎓', nombre: 'Diego Torres',   rol: 'Creador de Contenido',
    texto: 'Lo mejor es que puedo tener un perfil para mi canal de gaming y otro para mi portafolio de diseño, todo en la misma cuenta.', estrellas: 5 },
  { avatar: '👩‍💻', nombre: 'Sofía Quispe',   rol: 'Emprendedora',
    texto: 'Antes pagaba por herramientas similares. Con Linkwii tengo todo gratis, se ve súper profesional y carga rapidísimo.', estrellas: 5 },
];

const tecnologias = [
  { icon: 'fab fa-js',            label: 'JavaScript ES6+', color: '#FFB800' },
  { icon: 'fab fa-css3-alt',      label: 'CSS3 Moderno',    color: '#0EBEFF' },
  { icon: 'fas fa-fire',          label: 'Firebase 10',     color: '#FF8C00' },
  { icon: 'fas fa-bolt',          label: 'Vite',            color: '#7000FF' },
];

// ============================================================
// 🎨 RENDER
// ============================================================
export const render = () => `
<div class="ac_wrap">

  <!-- ══ HERO ══ -->
  <section class="ac_hero">
    <div class="ac_hero_orb ac_orb1"></div>
    <div class="ac_hero_orb ac_orb2"></div>
    <div class="ac_hero_orb ac_orb3"></div>
    <div class="ac_hero_body">
      <div class="ac_hero_logo">
        <img src="${import.meta.env.BASE_URL}logo.webp" alt="${app}" loading="lazy">
      </div>
      <div class="ac_hero_badge"><i class="fas fa-link"></i> El Link en Bio Definitivo</div>
      <h1 class="ac_hero_tit">${app}</h1>
      <p class="ac_hero_sub">
        Todos tus enlaces <strong>en un solo lugar</strong>. Crea perfiles profesionales, 
        comparte tus redes, proyectos y tienda en segundos.
        <strong>100% gratis</strong>.
      </p>
      <div class="ac_hero_stats">
        ${stats.map(s => `
          <div class="ac_stat" style="--sc:${s.color}">
            <i class="fas ${s.icon}" style="color:${s.color}"></i>
            <strong>${s.num}</strong>
            <span>${s.label}</span>
          </div>`).join('')}
      </div>
      <div class="ac_hero_btns">
        <a href="/p/crear" class="ac_btn_p"><i class="fas fa-magic"></i> Crear mi enlace</a>
        <button class="ac_btn_s" id="ac_compartir"><i class="fas fa-share-nodes"></i> Compartir</button>
      </div>
      <div class="ac_hero_scroll"><i class="fas fa-chevron-down"></i></div>
    </div>
  </section>

  <!-- ══ COUNTER BAND ══ -->
  <div class="ac_counter_band">
    <div class="ac_counter_item">
      <span class="ac_counter_num" data-target="100">0</span><span>%</span>
      <p>Gratis para siempre</p>
    </div>
    <div class="ac_counter_sep"></div>
    <div class="ac_counter_item">
      <span class="ac_counter_num" data-target="99">0</span><span>%</span>
      <p>Velocidad de Carga</p>
    </div>
    <div class="ac_counter_sep"></div>
    <div class="ac_counter_item">
      <span>∞</span>
      <p>Enlaces Ilimitados</p>
    </div>
    <div class="ac_counter_sep"></div>
    <div class="ac_counter_item">
      <span class="ac_counter_num" data-target="2026">0</span>
      <p>Siempre actualizado</p>
    </div>
  </div>

  <!-- ══ MÓDULOS ══ -->
  <section class="ac_sec">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-layer-group"></i> Funciones</div>
      <h2 class="ac_sec_tit">Todo lo que necesitas para <span class="ac_grad">compartir tus enlaces</span></h2>
      <p class="ac_sec_sub">Herramientas simples y poderosas para creadores y marcas</p>
    </div>
    <div class="ac_modulos_grid">
      ${modulos.map(m => `
        <a href="${m.url}" class="ac_modulo_card wi_fadeUp" style="--mc:${m.color}">
          <div class="ac_modulo_ico"><i class="fas ${m.icon}"></i></div>
          <div class="ac_modulo_info">
            <strong>${m.nombre}</strong>
            <span>${m.desc}</span>
          </div>
          <div class="ac_modulo_arr"><i class="fas fa-arrow-right"></i></div>
        </a>`).join('')}
    </div>
  </section>

  <!-- ══ BENEFICIOS ══ -->
  <section class="ac_sec ac_sec_alt">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-star"></i> ¿Por qué Linkwii?</div>
      <h2 class="ac_sec_tit">Beneficios reales para <span class="ac_grad">tu presencia digital</span></h2>
      <p class="ac_sec_sub">Diseñado para maximizar clics, sin distracciones</p>
    </div>
    <div class="ac_feat_grid">
      ${beneficios.map(f => `
        <div class="ac_feat_card wi_fadeUp ac_color_${f.color.toLowerCase()}">
          <div class="ac_feat_ico"><i class="fas ${f.icon}"></i></div>
          <h3>${f.titulo}</h3>
          <p>${f.desc}</p>
        </div>`).join('')}
    </div>
  </section>

  <!-- ══ CÓMO FUNCIONA ══ -->
  <section class="ac_sec">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-route"></i> Cómo funciona</div>
      <h2 class="ac_sec_tit">3 pasos para <span class="ac_grad">empezar hoy</span></h2>
      <p class="ac_sec_sub">Sin complicaciones. En minutos tendrás tu semana bajo control</p>
    </div>
    <div class="ac_pasos">
      ${pasos.map((p, i) => `
        <div class="ac_paso wi_fadeUp">
          <div class="ac_paso_num">${p.num}</div>
          <div class="ac_paso_ico"><i class="fas ${p.icon}"></i></div>
          <h3>${p.titulo}</h3>
          <p>${p.desc}</p>
        </div>
        ${i < pasos.length - 1 ? '<div class="ac_paso_sep"><i class="fas fa-chevron-right"></i></div>' : ''}`
      ).join('')}
    </div>
  </section>

  <!-- ══ TESTIMONIOS ══ -->
  <section class="ac_sec ac_sec_alt">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-comments"></i> Testimonios</div>
      <h2 class="ac_sec_tit">Personas que ya usan <span class="ac_grad">Linkwii</span></h2>
      <p class="ac_sec_sub">Descubre cómo transformamos la conversión de sus redes sociales</p>
    </div>
    <div class="ac_test_grid">
      ${testimonios.map(t => `
        <div class="ac_test_card wi_fadeUp">
          <div class="ac_test_stars">${'<i class="fas fa-star"></i>'.repeat(t.estrellas)}</div>
          <p class="ac_test_txt">"${t.texto}"</p>
          <div class="ac_test_autor">
            <span class="ac_test_avatar">${t.avatar}</span>
            <div><strong>${t.nombre}</strong><span>${t.rol}</span></div>
          </div>
        </div>`).join('')}
    </div>
  </section>

  <!-- ══ MISIÓN / VISIÓN ══ -->
  <section class="ac_sec">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-bullseye"></i> Misión y Visión</div>
      <h2 class="ac_sec_tit">Lo que nos <span class="ac_grad">impulsa cada día</span></h2>
    </div>
    <div class="ac_mv_grid">
      ${valores.map(v => `
        <div class="ac_mv_card wi_fadeUp" style="--mc:${v.color}">
          <div class="ac_mv_ico" style="background:${v.color}"><i class="fas ${v.icon}"></i></div>
          <h3>${v.titulo}</h3>
          <p>${v.desc}</p>
        </div>`).join('')}
    </div>
  </section>

  <!-- ══ TECNOLOGÍA ══ -->
  <section class="ac_sec ac_sec_alt">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-code"></i> Stack técnico</div>
      <h2 class="ac_sec_tit">Construido con <span class="ac_grad">lo mejor</span></h2>
      <p class="ac_sec_sub">Tecnología moderna para una experiencia rápida y confiable</p>
    </div>
    <div class="ac_tech_grid">
      ${tecnologias.map(t => `
        <div class="ac_tech_item wi_fadeUp" style="--tc:${t.color}">
          <i class="${t.icon}" style="color:${t.color}"></i>
          <span>${t.label}</span>
        </div>`).join('')}
    </div>
  </section>

  <!-- ══ CTA ══ -->
  <section class="ac_cta_sec">
    <div class="ac_cta_wrap wi_fadeUp">
      <div class="ac_cta_glow"></div>
      <div class="ac_cta_particles">
        ${Array.from({length:6}).map(()=>'<span class="ac_particle"></span>').join('')}
      </div>
      <div class="ac_cta_inner">
        <span class="ac_cta_emoji">📅</span>
        <h2>¿Listo para dominar<br>tu semana?</h2>
        <p>Empieza ahora, es completamente gratis y sin registro obligatorio</p>
        <div class="ac_cta_chips">
          ${modulos.map(m=>`
            <a href="${m.url}" class="ac_chip" style="--cc:${m.color}" ${wiTip(m.desc)}>
              <i class="fas ${m.icon}"></i> ${m.nombre}
            </a>`).join('')}
        </div>
        <div class="ac_cta_btns">
          <a href="/p/crear" class="ac_btn_p ac_btn_lg"><i class="fas fa-magic"></i> Crear mi enlace gratis</a>
          <a href="/p/smile" class="ac_btn_s ac_btn_lg"><i class="fas fa-house"></i> Mi Dashboard</a>
        </div>
        <p class="ac_footer_txt">
          ${app} ${version} · Hecho con <i class="fas fa-heart"></i> por
          <a href="${linkme}" target="_blank" rel="noopener">${by}</a> · ${year()}
        </p>
      </div>
    </div>
  </section>

</div>`;

// ============================================================
// 🔢 COUNTER ANIMATION
// ============================================================
const _animateCounters = () => {
  $('.ac_counter_num').each(function () {
    const $el = $(this), target = +$el.data('target'), duration = 1800;
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      $el.text(Math.floor(ease * target).toLocaleString());
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
};

// ============================================================
// ⚡ INIT
// ============================================================
export const init = () => {
  wiVista('.ac_modulo_card', null, { anim: 'wi_fadeUp', stagger: 60  });
  wiVista('.ac_feat_card',   null, { anim: 'wi_fadeUp', stagger: 80  });
  wiVista('.ac_paso',        null, { anim: 'wi_fadeUp', stagger: 120 });
  wiVista('.ac_mv_card',     null, { anim: 'wi_fadeUp', stagger: 100 });
  wiVista('.ac_tech_item',   null, { anim: 'wi_fadeUp', stagger: 60  });
  wiVista('.ac_test_card',   null, { anim: 'wi_fadeUp', stagger: 80  });
  wiVista('.ac_cta_wrap',    null, { anim: 'wi_fadeUp' });

  const $band = $('.ac_counter_band')[0];
  if ($band) {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { _animateCounters(); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe($band);
  }

  $('#ac_compartir').on('click', function () {
    const url = 'https://winwii.web.app/';
    if (navigator.share) {
      navigator.share({ title: app, text: `📅 ${app} — Planificador Semanal Profesional`, url }).catch(() => {});
    } else {
      wicopy(url, this, '¡Link copiado! ✨');
    }
  });

  console.log(`📖 ${app} ${version} · Acerca ${year()}`);
};

export const cleanup = () => {
  $('#ac_compartir').off('click');
  console.log('🧹 Acerca');
};