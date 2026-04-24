import $ from 'jquery';
import { app } from './wii.js';
import { Notificacion, wiPath, wiFade } from './widev.js';

// ── NAV — Config visual por rol ────────────────────────────────────────────────
export const NAV = {
  todos: {
    winav: [
      { href: '/',             page: 'inicio',       ico: 'fa-house',         txt: 'Inicio'    },
      { href: '/p/ejemplos',   page: 'p/ejemplos',   ico: 'fa-palette',     txt: 'Ejemplos'    },
      { href: '/p/consejos',   page: 'p/consejos',   ico: 'fa-lightbulb',   txt: 'Como Funciona'    },
      { href: '/p/precios',    page: 'p/precios',    ico: 'fa-calendar-days', txt: 'Precios'   },
      { href: '/p/acerca',     page: 'p/acerca',     ico: 'fa-circle-info',   txt: 'Acerca'    },
    ],
    nvrig: [
      { href: '/p/descubre',   page: 'p/descubre',   ico: 'fa-gauge',         txt: 'Descubre'  },
      { isBtn: true, cls: 'bt_auth registrar',       ico: 'fa-user-plus',     txt: 'Registrar' },
      { isBtn: true, cls: 'bt_auth login',           ico: 'fa-sign-in-alt',   txt: 'Login'     },
    ]
  },
  smile: {
    winav: [
      { href: '/p/smile',      page: 'p/smile',      ico: 'fa-house',         txt: 'Dasboard'    },
      { href: '/p/crear',      page: 'p/crear',      ico: 'fa-icons',         txt: 'Crear Links'   },
      { href: '/p/metricas',   page: 'p/metricas',   ico: 'fa-chart-line',    txt: 'Métricas'  },
      { href: '/p/emojis',     page: 'p/emojis',     ico: 'fa-palette',       txt: 'Emojis'    },
      { href: '/p/acerca',     page: 'p/acerca',     ico: 'fa-circle-info',   txt: 'Acerca'    },
    ],
    nvrig: [
      { href: '/p/notas',      page: 'p/notas',      ico: 'fa-note-sticky',   txt: 'Notas'     },
      { href: '/p/mensajes',   page: 'p/mensajes',   ico: 'fa-comments',      txt: 'Mensajes'  },
      { isPerfil: true }, { isSalir: true }
    ]
  },
  gestor: {
    winav: [
      { href: '/p/gestor',     page: 'p/gestor',     ico: 'fa-house',         txt: 'Inicio'    },
    ],
    nvrig: [
      { href: '/p/mensajes',   page: 'p/mensajes',   ico: 'fa-comments',      txt: 'Mensajes'  },
      { isPerfil: true }, { isSalir: true }
    ]
  },
  empresa: {
    winav: [
      { href: '/p/empresa',    page: 'p/empresa',    ico: 'fa-building',      txt: 'Panel'     },
    ],
    nvrig: [
      { href: '/p/mensajes',   page: 'p/mensajes',   ico: 'fa-comments',      txt: 'Mensajes'  },
      { isPerfil: true }, { isSalir: true }
    ]
  },
  admin: {
    winav: [
      { href: '/p/admin',      page: 'p/admin',      ico: 'fa-globe',         txt: 'Plataforma'},
      { href: '/p/usuarios',   page: 'p/usuarios',   ico: 'fa-users',         txt: 'Usuarios'  },
      { href: '/p/permisos',   page: 'p/permisos',   ico: 'fa-user-shield',   txt: 'Permisos'  },
      { href: '/p/sistema',    page: 'p/sistema',    ico: 'fa-database',      txt: 'Sistema'   },
    ],
    nvrig: [
      { href: '/p/mensajes',   page: 'p/mensajes',   ico: 'fa-comments',      txt: 'Mensajes'  },
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
    this.rutas     = {};
    this.modActual = null;
    this.cargand   = false;
    this.precach   = new Set();
    this.HOME      = 'inicio';
    this.main      = '#wimain';
  }

  register(ruta, mod) { this.rutas[ruta] = mod; }

  // Registra rutas con manejo inteligente de paths duplicados:
  // Si una ruta existe en público Y en área protegida, se crea un handler unificado
  // que sirve el módulo protegido si el rol aplica, si no el público.
  registerAll(getRol) {
    const pub  = {};  // path → imp()   (rutas públicas)
    const priv = {};  // path → [{ roles, imp }]  (rutas protegidas)

    RUTAS.forEach(({ path, area, roles = null, mod }) => {
      const page = mod ?? path.slice(1);
      const imp  = mod$(area, page);
      if (!imp) { console.warn(`[ruta] no encontrado: ../web/${area}${page}.js`); return; }
      if (roles === null) {
        pub[path] = imp;
      } else {
        (priv[path] = priv[path] || []).push({ roles, imp });
      }
    });

    const noAuth = () => Promise.resolve({
      render: () => '',
      init:   () => setTimeout(() => this.navigate('/p/login'), 0)
    });

    const allPaths = new Set([...Object.keys(pub), ...Object.keys(priv)]);
    allPaths.forEach(path => {
      const pubImp    = pub[path];
      const privList  = priv[path] || [];

      if (!privList.length) {
        // Solo pública
        this.register(path, pubImp);
      } else if (!pubImp) {
        // Solo protegida
        this.register(path, () => {
          const rol   = getRol?.();
          const entry = privList.find(e => e.roles.includes(rol));
          return entry ? entry.imp() : noAuth();
        });
      } else {
        // Pública + protegida: el rol decide cuál sirve
        this.register(path, () => {
          const rol   = getRol?.();
          const entry = privList.find(e => e.roles.includes(rol));
          return entry ? entry.imp() : pubImp();
        });
      }
    });
  }

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
      const mod = typeof cargar === 'function' ? await cargar() : cargar;
      if (typeof cargar === 'function' && !esPerfil) this.rutas[norm] = mod;
      
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

  async prefetch(ruta) {
    let norm = wiPath.limpiar(ruta);
    if (norm === '/') norm = `/${this.HOME}`;
    if (this.precach.has(norm) || typeof this.rutas[norm] !== 'function') return;
    try { this.rutas[norm] = await this.rutas[norm](); this.precach.add(norm); }
    catch { console.warn('[ruta] prefetch:', norm); }
  }

  init() {
    const rActual = wiPath.actual === '/' ? `/${this.HOME}` : wiPath.limpiar(wiPath.actual);
    this.marcarNav(rActual);

    $(document)
      .on('click', '.nv_item', (e) => {
        e.preventDefault();
        const pag = $(e.currentTarget).data('page');
        this.navigate(pag === this.HOME ? '/' : (pag.startsWith('p/') ? `/${pag}` : `/${pag}`));
      })
      .on('mouseenter', '.nv_item[data-page]', (e) => {
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