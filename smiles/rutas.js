import $ from 'jquery';
import { app } from './wii.js';
import { Notificacion, wiPath, wiFade } from './widev.js';
import * as inicioMod from './todos/inicio.js';

// ── NAV COMUN — rutas compartidas entre todos los roles ────────────────────────
const COMUN = [
  { href: '/p/ejemplos',   page: 'p/ejemplos',   ico: 'fa-palette',       txt: 'Ejemplos'      },
  { href: '/p/consejos',   page: 'p/consejos',   ico: 'fa-lightbulb',     txt: 'Como Funciona' },
  { href: '/p/precios',    page: 'p/precios',    ico: 'fa-calendar-days', txt: 'Precios'       },
  { href: '/p/acerca',     page: 'p/acerca',     ico: 'fa-circle-info',   txt: 'Acerca'        },
];

// ── NAV — Config visual por rol ────────────────────────────────────────────────
export const NAV = {
  todos: {
    nvleft:  [{ href: '/', page: 'inicio', ico: 'fa-house', txt: 'Inicio' }, ...COMUN],
    nvright: [
      { href: '/p/descubre', page: 'p/descubre', ico: 'fa-gauge',       txt: 'Descubre'  },
      { isBtn: true, cls: 'bt_auth registrar', ico: 'fa-user-plus', txt: 'Registrar' },
      { isBtn: true, cls: 'bt_auth login',     ico: 'fa-sign-in-alt', txt: 'Login'  },
    ]
  },
  smile: {
    nvleft:  [{ href: '/p/smile', page: 'p/smile', ico: 'fa-house', txt: 'Dashboard' }, ...COMUN],
    nvright: [
      { href: '/p/crear',      page: 'p/crear',      ico: 'fa-icons',         txt: 'Crear Links' },
      { href: '/p/notas',      page: 'p/notas',      ico: 'fa-note-sticky',   txt: 'Notas'       },
      { href: '/p/metricas',   page: 'p/metricas',   ico: 'fa-chart-line',    txt: 'Métricas'    },
      { href: '/p/emojis',     page: 'p/emojis',     ico: 'fa-palette',       txt: 'Emojis'      },
      { href: '/p/mensajes',   page: 'p/mensajes',   ico: 'fa-comments',      txt: 'Mensajes'    },
      { isPerfil: true }, { isSalir: true }
    ]
  },
  gestor: {
    nvleft:  [{ href: '/p/gestor', page: 'p/gestor', ico: 'fa-house', txt: 'Inicio' }, ...COMUN],
    nvright: [
      { href: '/p/crear',      page: 'p/crear',      ico: 'fa-icons',         txt: 'Crear Links' },
      { href: '/p/notas',      page: 'p/notas',      ico: 'fa-note-sticky',   txt: 'Notas'       },
      { href: '/p/metricas',   page: 'p/metricas',   ico: 'fa-chart-line',    txt: 'Métricas'    },
      { href: '/p/emojis',     page: 'p/emojis',     ico: 'fa-palette',       txt: 'Emojis'      },
      { href: '/p/mensajes',   page: 'p/mensajes',   ico: 'fa-comments',      txt: 'Mensajes'    },
      { isPerfil: true }, { isSalir: true }
    ]
  },
  empresa: {
    nvleft:  [{ href: '/p/empresa', page: 'p/empresa', ico: 'fa-building', txt: 'Panel' }],
    nvright: [
      { href: '/p/mensajes', page: 'p/mensajes', ico: 'fa-comments', txt: 'Mensajes' },
      { isPerfil: true }, { isSalir: true }
    ]
  },
  admin: {
    nvleft: [
      { href: '/p/admin',    page: 'p/admin',    ico: 'fa-globe',       txt: 'Plataforma'},
      { href: '/p/usuarios', page: 'p/usuarios', ico: 'fa-users',       txt: 'Usuarios'  },
      { href: '/p/permisos', page: 'p/permisos', ico: 'fa-user-shield', txt: 'Permisos'  },
      { href: '/p/sistema',  page: 'p/sistema',  ico: 'fa-database',    txt: 'Sistema'   },
    ],
    nvright: [
      { href: '/p/mensajes', page: 'p/mensajes', ico: 'fa-comments', txt: 'Mensajes' },
      { isPerfil: true }, { isSalir: true }
    ]
  }
};

// ── RUTAS — Fuente única de verdad ─────────────────────────────────────────────
// roles: null = público · ['rol',...] = protegido · area = subcarpeta en web/
export const RUTAS = [
  // PÚBLICAS — web/todos/
  { path: '/inicio',       area: 'todos/' },
  { path: '/p/acerca',     area: 'todos/', mod: 'acerca'   },
  { path: '/p/login',      area: 'todos/', mod: 'login'    },
  { path: '/p/descubre',   area: 'todos/', mod: 'descubre' },
  // Nuevas rutas
  { path: '/p/emojis',     area: 'todos/', mod: 'emojis' },
  { path: '/p/precios',    area: 'todos/', mod: 'precios'  },
  { path: '/p/ejemplos',   area: 'todos/', mod: 'ejemplos' },
  { path: '/p/consejos',   area: 'todos/', mod: 'consejos' },

  // SMILE — web/smile/ (autenticadas)
  { path: '/p/smile',    area: 'smile/', mod: 'smile',    roles: ['smile','gestor','admin','empresa'] },
  { path: '/p/crear',    area: 'smile/', mod: 'crear',    roles: ['smile','gestor','admin','empresa'] },
  { path: '/p/notas',    area: 'smile/', mod: 'notas',    roles: ['smile','gestor','admin','empresa'] },
  { path: '/p/metricas', area: 'smile/', mod: 'metricas', roles: ['smile','gestor','admin','empresa'] },
  { path: '/p/agregar',  area: 'smile/', mod: 'agregar',  roles: ['smile','gestor','admin','empresa'] },
  { path: '/p/perfil',   area: 'smile/', mod: 'perfil',   roles: ['smile','gestor','admin','empresa'] },
  { path: '/p/mensajes', area: 'smile/', mod: 'mensajes', roles: ['smile','gestor','admin','empresa'] },

  // GESTOR
  { path: '/p/gestor', area: 'gestor/', mod: 'gestor', roles: ['gestor','admin','empresa'] },

  // EMPRESA
  { path: '/p/empresa', area: 'empresa/', mod: 'empresa', roles: ['empresa','admin'] },

  // ADMIN
  { path: '/p/admin',    area: 'admin/', mod: 'admin',    roles: ['admin'] },
  { path: '/p/usuarios', area: 'admin/', mod: 'usuarios', roles: ['admin'] },
  { path: '/p/permisos', area: 'admin/', mod: 'permisos', roles: ['admin'] },
  { path: '/p/sistema',  area: 'admin/', mod: 'sistema',  roles: ['admin'] },
];

// ── GLOB — Vite mapea todos los módulos en build time ─────────────────────────
// rutas.js está en smiles/web/ → las áreas (todos/, smile/, etc.) son relativas a aquí
const MODS = import.meta.glob('./**/*.js');
const mod$ = (area, page) => MODS[`./${area}${page}.js`];

// ── MOTOR ──────────────────────────────────────────────────────────────────────
class WiRutas {
  constructor() {
    this.rutas     = {};               // funciones lazy originales — nunca se sobreescriben
    this.cache     = { '/inicio': inicioMod }; // inicio eagerly bundled, cero red
    this.modActual = null;
    this.cargand   = false;
    this.HOME      = 'inicio';
    this.main      = '#wimain';
  }

  register(path, fn) { this.rutas[path] = fn; }

  registerAll(getRol) {
    const pub = {}, priv = {};

    RUTAS.forEach(({ path, area, roles = null, mod }) => {
      const page = mod ?? path.slice(1);
      const imp  = mod$(area, page);
      if (!imp) { console.warn(`[ruta] no encontrado: ../web/${area}${page}.js`); return; }
      roles === null ? (pub[path] = imp) : (priv[path] ??= []).push({ roles, imp });
    });

    const noAuth = () => Promise.resolve({
      render: () => '',
      init:   () => setTimeout(() => this.navigate('/p/login'), 0),
    });

    new Set([...Object.keys(pub), ...Object.keys(priv)]).forEach(path => {
      const pubImp   = pub[path];
      const privList = priv[path] || [];
      const resolve  = () => { const rol = getRol?.() || null; return privList.find(e => e.roles.includes(rol)); };

      if (!privList.length)  return this.register(path, pubImp);
      if (!pubImp)           return this.register(path, () => { const e = resolve(); return e ? e.imp() : noAuth(); });
      this.register(path, () => { const e = resolve(); return e ? e.imp() : pubImp(); });
    });
  }

  // ── PREFETCH: descarga el módulo al hacer hover, sin bloquear nada ───────────
  async prefetch(ruta) {
    let norm = wiPath.limpiar(ruta);
    if (norm === '/') norm = `/${this.HOME}`;
    if (this.cache[norm] || !this.rutas[norm]) return;   // ya listo o no existe
    try {
      this.cache[norm] = await this.rutas[norm]();
      console.log(`⚡ Listo ${norm.replace('/', '')}`);
    } catch { console.warn('[ruta] prefetch falló:', norm); }
  }

  // ── NAVIGATE: si ya está en cache, carga instantánea ─────────────────────────
  async navigate(ruta, historial = true) {
    if (this.cargand) return;
    this.cargand = true;
    let norm = wiPath.limpiar(ruta);
    if (norm === '/') norm = `/${this.HOME}`;

    // ── MAGIA ZERO-BLINK (Enrutamiento dinámico de perfiles) ──
    let esPerfil = false;
    let cargar;

    if (norm !== `/${this.HOME}` && !norm.startsWith('/p/')) {
      // Si no es home y NO tiene /p/, capturamos la ruta como @usuario
      esPerfil = true;
      cargar = mod$('', 'publico'); // Usa publico.js en la raíz de smiles/
    } else {
      cargar = this.rutas[norm] ?? mod$('todos/', '404');
    }

    try {
      this.modActual?.cleanup?.();
      
      let mod = this.cache[norm];
      if (!mod) {
        mod = typeof cargar === 'function' ? await cargar() : cargar;
        if (typeof cargar === 'function' && !esPerfil) this.cache[norm] = mod;
      }
      
      const param = esPerfil ? norm.slice(1) : null;
      const html = await mod.render(param);
      
      let titulo;
      if (esPerfil) {
        titulo = `${param} - Linkwii`;
        document.body.classList.add('is-public-profile');
      } else {
        const pagName = norm.split('/').pop();
        titulo = `${pagName.replace(/^\w/, c => c.toUpperCase()) || 'Inicio'} - ${app}`;
        document.body.classList.remove('is-public-profile');
      }

      this.marcarNav(norm);
      await wiFade(this.main, html);
      window.scrollTo(0, 0);
      document.title = titulo;
      
      mod.init?.(param);
      
      if (historial) wiPath.poner(norm === `/${this.HOME}` ? '/' : norm, titulo);
      this.modActual = mod;
      
      if (norm !== `/${this.HOME}`) setTimeout(() => this.prefetch('/'), 800);
    } catch (err) {
      Notificacion('Error en la ruta');
      console.error('[ruta] navigate:', err);
    } finally {
      this.cargand = false;
    }
  }

  marcarNav(norm) {
    const pag = norm.slice(1) || this.HOME;
    $('.nv_item').removeClass('active');
    $(`.nv_item[data-page="${pag}"]`).addClass('active');
  }

  init() {
    this.marcarNav(wiPath.actual === '/' ? `/${this.HOME}` : wiPath.limpiar(wiPath.actual));

    $(document)
      .on('click', '.nv_item', (e) => {
        e.preventDefault();
        const pag = $(e.currentTarget).data('page');
        this.navigate(pag === this.HOME ? '/' : (pag.startsWith('p/') ? `/${pag}` : `/${pag}`));
      })
      .on('mouseenter touchstart', '.nv_item[data-page]', (e) => {
        const pag = $(e.currentTarget).data('page');
        this.prefetch(pag === this.HOME ? '/' : `/${pag}`);
      });

    window.addEventListener('popstate', (e) =>
      this.navigate(e.state?.ruta || wiPath.actual, false)
    );
    this.navigate(wiPath.actual, false);
  }
}

export const rutas = new WiRutas();