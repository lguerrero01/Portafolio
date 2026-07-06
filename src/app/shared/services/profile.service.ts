import { Injectable } from '@angular/core';
//////////////
// interfaces
//////////////
import {
  EducationData,
  Experiance,
  Proyect,
  Skill,
  SkillGroup,
} from '../models/experiance.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  //////////////
  // Identidad / Hero
  //////////////
  public fullName: string = 'Luis Alejandro Guerrero';
  public role: string = 'Full Stack Developer';
  public tagline: string =
    'Construyo productos completos: apps web y móviles con Angular e Ionic, APIs robustas con Laravel y Node, y paneles administrativos con Vue.';

  //////////////
  // About
  //////////////
  public about2: string = `Software Developer con más de 4 años de experiencia construyendo productos reales de principio a fin .
  Me especializo en el ecosistema Angular (2+ hasta la versión 20) e Ionic/Capacitor para móvil, con TypeScript y RxJS como base .
  Del lado del servidor trabajo con Node/Express y Laravel/PHP, exponiendo APIs REST sobre MySQL y MongoDB .
  También desarrollo paneles administrativos con Vue e integro servicios como Google Maps y notificaciones push (OneSignal) .
  Integro herramientas de IA (Claude, Claude Code, Gemini, GitHub Copilot) en mi flujo de desarrollo y diseño para acelerar la entrega sin sacrificar calidad.`;

  public about: string =
    'Amante de la innovación y de la tecnología para adquirir nuevos conocimientos. Muy calculador con el tiempo que dedico y el trabajo que realizo, enfocado en entregar productos de calidad siguiendo buenas prácticas.';

  //////////////
  // Métricas del hero
  //////////////
  public stats = [
    { value: '4+', label: 'Años de experiencia' },
    { value: '10+', label: 'Productos entregados' },
    { value: '15+', label: 'Tecnologías' },
  ];

  //////////////
  // Resume
  //////////////
  public resumeUrlEn: string =
    'https://drive.google.com/file/d/1IJE9Mr2AB5hyi7Tg7IxU4F2j54WCYhBL/view';

  public resumeUrlEs: string =
    'https://drive.google.com/file/d/1cB_EQPER_ok6BrSy1kWtaryxzqEHHXJJ/view';

  //////////////
  // Redes
  //////////////
  public socials = {
    github: 'https://github.com/lguerrero01',
    linkedin: 'https://www.linkedin.com/in/luis-guerrero96/',
    twitter: 'https://twitter.com/oneminutealone',
    instagram: 'https://www.instagram.com/l_guerrero01/',
    facebook: 'https://www.facebook.com/alejandro.guerrero.7',
  };

  //////////////
  // Projects — PRINCIPALES (los que se muestran)
  // NOTA: las descripciones son BORRADORES inferidos del stack; ajústalas.
  // Curados por: ecosistema más completo (app + web + API + admin) y actividad
  // más reciente en D:\KeetUp. Para mostrar otro, muévelo desde otherProjects.
  //////////////
  public projects: Proyect[] = [
    {
      id: 1,
      title: 'Mootiva',
      desc: 'Plataforma completa de engagement con app móvil, portal web y panel administrativo. Incluye lector de QR/código de barras, notificaciones push, multi-idioma y gráficas de métricas.',
      category: 'Full Stack',
      techs: ['Ionic', 'Angular', 'Capacitor', 'Laravel', 'Vue.js', 'MySQL'],
      imgUrl: 'assets/img/projects/mootiva/panel.jpg',
      gallery: [
        'assets/img/projects/mootiva/panel.jpg',
        'assets/img/projects/mootiva/landing-page-color.jpg',
        'assets/img/projects/mootiva/cursos-desktop-perfil-comp.jpg',
        'assets/img/projects/mootiva/programas-desktop-listado.jpg',
        'assets/img/projects/mootiva/eventos-desktop-perfil-no.jpg',
        'assets/img/projects/mootiva/seleccionar-dia-y-horario.jpg',
        'assets/img/projects/mootiva/checkout-tengo-un-cupon-de.jpg',
      ],
      livedemo: 'https://xn--aliciapea-s6a.com.ar/home',
      githurl: '',
      featured: true,
    },
    {
      id: 2,
      title: 'Adoratrices',
      desc: 'Ecosistema educativo del Colegio San José: sitio institucional y portal privado para familias (comunicaciones, talleres, inscripciones) en Angular, más app móvil con Ionic/Capacitor (geolocalización, escáner QR, cámara y push), API en Laravel y panel administrativo en Vue.',
      category: 'Full Stack',
      techs: ['Angular', 'Ionic', 'Capacitor', 'Laravel', 'Vue.js'],
      imgUrl: 'assets/img/projects/adoratrices/home.jpg',
      gallery: [
        'assets/img/projects/adoratrices/home.jpg',
        'assets/img/projects/adoratrices/login.jpg',
        'assets/img/projects/adoratrices/mobile.jpg',
      ],
      livedemo: 'https://sanjoseadoratricessf.edu.ar/home',
      githurl: '',
      featured: true,
    },
    {
      id: 3,
      title: 'UbicaEventos',
      desc: 'Plataforma para descubrir y gestionar eventos con mapas interactivos (Google Maps), frontend en Angular, API en Laravel y administración en Vue.',
      category: 'Full Stack',
      techs: ['Angular', 'Laravel', 'Vue.js', 'Google Maps', 'MySQL'],
      imgUrl: 'assets/img/projects/ubicaeventos/home-sin-inicio.jpg',
      gallery: [
        'assets/img/projects/ubicaeventos/home-sin-inicio.jpg',
        'assets/img/projects/ubicaeventos/listado.jpg',
        'assets/img/projects/ubicaeventos/perfil-del-evento-informac.jpg',
        'assets/img/projects/ubicaeventos/perfil-del-evento-disponib.jpg',
        'assets/img/projects/ubicaeventos/perfil-del-evento-rese-as.jpg',
        'assets/img/projects/ubicaeventos/ubicacion.jpg',
        'assets/img/projects/ubicaeventos/chat.jpg',
        'assets/img/projects/ubicaeventos/lista-de-msj.jpg',
        'assets/img/projects/ubicaeventos/listado-1.jpg',
        'assets/img/projects/ubicaeventos/group-2049.jpg',
      ],
      livedemo: '',
      githurl: '',
      featured: true,
    },
    {
      id: 4,
      title: 'Cuadernito',
      desc: 'App móvil de comunicaciones para colegios (Adoratrices): notificaciones a familias, talleres, inscripciones y noticias. Construida con Ionic + Capacitor sobre Angular.',
      category: 'Mobile',
      techs: ['Ionic', 'Angular', 'Capacitor', 'TypeScript'],
      imgUrl: 'assets/img/projects/cuadernito/1.jpg',
      gallery: [
        'assets/img/projects/cuadernito/1.jpg',
        'assets/img/projects/cuadernito/3.jpg',
        'assets/img/projects/cuadernito/2.jpg',
      ],
      livedemo: '',
      githurl: '',
      playstore: 'https://play.google.com/store/apps/details?id=com.keetup.comunicaciones&hl=es_VE',
      featured: true,
    },
    {
      id: 5,
      title: 'MovieLearning',
      desc: 'Plataforma de e-learning (Double Healix): catálogo de cursos de desarrollo personal y liderazgo con lecciones en video, temario, inscripción y reproductor. Frontend en Angular con API en Node/Express y Laravel.',
      category: 'Full Stack',
      techs: ['Angular', 'Node.js', 'Express', 'Laravel'],
      imgUrl: 'assets/img/projects/movielearning/home.jpg',
      gallery: [
        'assets/img/projects/movielearning/home.jpg',
        'assets/img/projects/movielearning/catalog.jpg',
        'assets/img/projects/movielearning/course.jpg',
        'assets/img/projects/movielearning/lesson.jpg',
        'assets/img/projects/movielearning/curriculum.jpg',
        'assets/img/projects/movielearning/m-home.jpg',
        'assets/img/projects/movielearning/m-catalog.jpg',
        'assets/img/projects/movielearning/m-lesson.jpg',
        'assets/img/projects/movielearning/live-login.jpg',
        'assets/img/projects/movielearning/live-mobile.jpg',
      ],
      livedemo: 'https://courses.movielearning.com/login/en',
      githurl: '',
      featured: true,
    },
    {
      id: 6,
      title: 'Cibergym · CiberChallenge',
      desc: 'Plataforma de encuestas y challenges corporativos construida con Angular 20: autenticación de usuarios, multi-idioma y flujo de encuestas. Desplegada como "Indra CiberChallenge" para Indra Group.',
      category: 'Web',
      techs: ['Angular', 'TypeScript', 'RxJS'],
      imgUrl: 'assets/img/projects/cibergym/login.jpg',
      gallery: [
        'assets/img/projects/cibergym/login.jpg',
        'assets/img/projects/cibergym/mobile.jpg',
      ],
      livedemo: '',
      githurl: '',
    },
    {
      id: 7,
      title: 'DoubleHealix Card Game',
      desc: 'Juego de cartas móvil interactivo (arquetipos/coaching) con conjuntos de cartas, multi-idioma (inglés, neerlandés, español), sacar carta al azar y almacenamiento local. Construido con Ionic + Angular y Capacitor.',
      category: 'Mobile',
      techs: ['Ionic', 'Angular', 'Capacitor'],
      imgUrl: 'assets/img/projects/doublehealix/card.jpg',
      gallery: [
        'assets/img/projects/doublehealix/card.jpg',
        'assets/img/projects/doublehealix/sets.jpg',
        'assets/img/projects/doublehealix/menu.jpg',
        'assets/img/projects/doublehealix/draw.jpg',
        'assets/img/projects/doublehealix/slide-1.jpg',
        'assets/img/projects/doublehealix/slide-2.jpg',
        'assets/img/projects/doublehealix/slide-3.jpg',
        'assets/img/projects/doublehealix/lang.jpg',
      ],
      livedemo: '',
      githurl: '',
    },
    {
      id: 8,
      title: 'Reciclapp',
      desc: 'App móvil enfocada en reciclaje y sostenibilidad: consulta de plantas de reciclaje, guía para separar residuos e información de impacto ambiental.',
      category: 'Mobile',
      techs: ['Ionic', 'Angular', 'Capacitor'],
      imgUrl: 'assets/img/projects/reciclapp/group-47.jpg',
      gallery: [
        'assets/img/projects/reciclapp/group-47.jpg',
        'assets/img/projects/reciclapp/onboarding.jpg',
        'assets/img/projects/reciclapp/registro-e-inicio.jpg',
        'assets/img/projects/reciclapp/camion-recolector.jpg',
        'assets/img/projects/reciclapp/group-48.jpg',
        'assets/img/projects/reciclapp/group-49.jpg',
        'assets/img/projects/reciclapp/group-50.jpg',
        'assets/img/projects/reciclapp/group-51.jpg',
        'assets/img/projects/reciclapp/group-52.jpg',
        'assets/img/projects/reciclapp/1.jpg',
        'assets/img/projects/reciclapp/2.jpg',
        'assets/img/projects/reciclapp/4.jpg',
        'assets/img/projects/reciclapp/screenshot-1.jpg',
      ],
      livedemo: '',
      githurl: '',
      appstore: 'https://apps.apple.com/es/app/reciclapp-san-guillermo/id6755625811',
      playstore: 'https://play.google.com/store/apps/details?id=com.keetup.reciclapp_sg&hl=es_VE',
    },
    {
      id: 11,
      title: 'Retro Garage',
      desc: 'App de gestión de pedidos para restaurante: menú por categorías, carrito, autenticación de clientes, cocina y panel de administración. Frontend en Angular con Tailwind y backend en Supabase, empaquetable a móvil con Capacitor.',
      category: 'Full Stack',
      techs: ['Angular', 'TypeScript', 'Tailwind', 'Supabase', 'Capacitor'],
      imgUrl: 'assets/img/projects/retro-garage/menu.jpg',
      gallery: [
        'assets/img/projects/retro-garage/menu.jpg',
        'assets/img/projects/retro-garage/login.jpg',
        'assets/img/projects/retro-garage/mobile.jpg',
      ],
      livedemo: '',
      githurl: '',
      featured: true,
    },
  ];

  //////////////
  // Projects — SECUNDARIOS (preservados, NO se muestran)
  // Para mostrar alguno, muévelo al arreglo `projects` de arriba.
  //////////////
  public otherProjects: Proyect[] = [
    {
      id: 9,
      title: 'CTE',
      desc: 'Portal con panel de administración: frontend en Angular, API en Laravel y gestión de contenidos en Vue.',
      category: 'Full Stack',
      techs: ['Angular', 'Laravel', 'Vue.js', 'MySQL'],
      livedemo: '',
      githurl: '',
    },
    {
      id: 10,
      title: 'Event Picks',
      desc: 'Aplicación web para descubrir y seleccionar eventos, construida con Angular.',
      category: 'Web',
      techs: ['Angular', 'TypeScript', 'Bootstrap'],
      livedemo: '',
      githurl: '',
    },
  ];

  //////////////
  // SVG de marcas de IA (Simple Icons, 24x24) para el grid de habilidades
  //////////////
  private aiIcons: { [key: string]: string } = {
    claude:
      'm4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z',
    gemini:
      'M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81',
    openai:
      'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z',
    copilot:
      'M23.922 16.997C23.061 18.492 18.063 22.02 12 22.02 5.937 22.02.939 18.492.078 16.997A.641.641 0 0 1 0 16.741v-2.869a.883.883 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.098 10.098 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952C7.255 2.937 9.248 1.98 11.978 1.98c2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.841.841 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256Zm-11.75-5.992h-.344a4.359 4.359 0 0 1-.355.508c-.77.947-1.918 1.492-3.508 1.492-1.725 0-2.989-.359-3.782-1.259a2.137 2.137 0 0 1-.085-.104L4 11.746v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.359 4.359 0 0 1-.355-.508Zm2.328 3.25c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm-5 0c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm3.313-6.185c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z',
    cursor:
      'M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23',
  };

  //////////////
  // Skills (agrupadas por área, sin barras de progreso)
  //////////////
  public skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      items: [
        { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'RxJS', icon: 'devicon-rxjs-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
      ],
    },
    {
      category: 'Mobile',
      items: [
        { name: 'Ionic', icon: 'devicon-ionic-original colored' },
        { name: 'Capacitor', icon: 'devicon-capacitor-plain colored' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express', icon: 'devicon-express-original' },
        { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
        { name: 'PHP', icon: 'devicon-php-plain colored' },
        { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
        { name: 'REST APIs', icon: '' },
      ],
    },
    {
      category: 'Datos & Tools',
      items: [
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'Google Maps', icon: '' },
      ],
    },
    {
      category: 'IA & Productividad',
      items: [
        { name: 'Claude', svg: this.aiIcons['claude'] },
        { name: 'Claude Code', svg: this.aiIcons['claude'] },
        { name: 'Gemini', svg: this.aiIcons['gemini'] },
        { name: 'ChatGPT', svg: this.aiIcons['openai'] },
        { name: 'GitHub Copilot', svg: this.aiIcons['copilot'] },
        { name: 'Cursor', svg: this.aiIcons['cursor'] },
        { name: 'Diseño con IA', icon: 'fa fa-magic' },
      ],
    },
  ];

  /** Mapa nombre de tecnología -> clase devicon, para los chips de proyectos. */
  public techIcons: { [key: string]: string } = {
    Angular: 'devicon-angularjs-plain colored',
    Ionic: 'devicon-ionic-original colored',
    Capacitor: 'devicon-capacitor-plain colored',
    TypeScript: 'devicon-typescript-plain colored',
    JavaScript: 'devicon-javascript-plain colored',
    'Node.js': 'devicon-nodejs-plain colored',
    Express: 'devicon-express-original',
    Laravel: 'devicon-laravel-plain colored',
    PHP: 'devicon-php-plain colored',
    'Vue.js': 'devicon-vuejs-plain colored',
    MySQL: 'devicon-mysql-plain colored',
    MongoDB: 'devicon-mongodb-plain colored',
    Bootstrap: 'devicon-bootstrap-plain colored',
    Firebase: 'devicon-firebase-plain colored',
    Git: 'devicon-git-plain colored',
    Tailwind: 'devicon-tailwindcss-plain colored',
    Supabase: 'devicon-supabase-plain colored',
  };

  //////////////
  // Legacy skills (ya no se usan en la vista, se mantienen por compatibilidad)
  //////////////
  public skillsData: Skill[] = [];

  //////////////
  // Education
  //////////////
  public educationData: EducationData[] = [
    {
      id: 1,
      from_to_year: 'Presente',
      education: 'Licenciatura',
      stream: 'Licenciatura en Computación',
      institution: 'Universidad de Carabobo',
      info: [
        `Facultad de Ciencias y Tecnología (Facyt)`,
        `Formación en fundamentos de computación, algoritmos y desarrollo de software`,
      ],
    },
    {
      id: 2,
      from_to_year: '2018 - Presente',
      education: 'Cursos',
      stream: 'Formación continua en desarrollo web y móvil',
      institution: `Frontend Masters, Udemy, Coursera`,
      info: [
        `Production-Grade Angular, Angular Fundamentals y TypeScript Fundamentals en Frontend Masters`,
        `Desarrollo del lado del servidor: NodeJS, Express y MongoDB en Coursera`,
        `Desarrollador Web Completo: HTML5, CSS3, JS, PHP y MySQL en Udemy`,
      ],
    },
    {
      id: 3,
      from_to_year: '2010 - 2015',
      education: 'Bachillerato',
      stream: 'Bachiller en Ciencias',
      institution: 'Lino de Clemente',
      info: [],
    },
  ];

  //////////////
  // Experience
  //////////////
  public experienceData: Experiance[] = [
    {
      id: 1,
      company: 'KeetUp',
      location: 'Remoto',
      timeline: '2022 - Presente',
      role: 'Full Stack Developer',
      work: `Desarrollo de múltiples productos de principio a fin: apps móviles con Ionic/Capacitor, portales web con Angular, APIs REST con Laravel y Node, y paneles administrativos con Vue .
      Integración de servicios como Google Maps, notificaciones push (OneSignal) y lectura de QR/código de barras .
      Trabajo sobre bases de datos MySQL y MongoDB con autenticación mediante Passport/Sanctum .
      Uso de herramientas de IA (Claude, Claude Code, Gemini, Copilot) para acelerar el desarrollo, la depuración y el diseño de interfaces.`,
      stack: ['Angular', 'Ionic', 'Laravel', 'Vue.js', 'Node.js', 'MySQL', 'IA'],
    },
    {
      id: 2,
      company: 'Innovo Company',
      location: 'Venezuela, Carabobo',
      timeline: 'Agosto 2021 - Diciembre 2021',
      role: 'Full Stack Developer',
      work: 'Responsable del manejo de UI en Angular y del backend con Laravel y SQL, participando en el ciclo completo de desarrollo.',
      stack: ['Angular', 'Laravel', 'MySQL'],
    },
    {
      id: 3,
      company: 'OESVICA',
      location: 'Venezuela, Carabobo',
      timeline: 'Enero 2020 - Junio 2020',
      role: 'Software Developer',
      work: `Aplicación web de calificación de empleados por rol usando el stack MEAN (Angular, Node, MongoDB, Express) .
      Diseño e implementación de la UI y de la API REST.`,
      stack: ['Angular', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      id: 4,
      company: 'Workana',
      location: 'Remoto',
      timeline: '2020 - 2022',
      role: 'Frontend Developer',
      work: `Consumo y creación de APIs REST, paneles de administración y UI de aplicaciones .
      Plantillas para email, landing pages, servicios y automatizaciones.`,
      stack: ['Angular', 'Node.js', 'Bootstrap'],
    },
  ];

  //////////////
  // Get Methods
  //////////////
  public get skills(): Skill[] {
    return this.skillsData;
  }

  public get getSkillGroups(): SkillGroup[] {
    return this.skillGroups;
  }

  public get getProjects(): Proyect[] {
    return this.projects;
  }

  public get education(): EducationData[] {
    return this.educationData;
  }

  public get experience(): Experiance[] {
    return this.experienceData;
  }
}
