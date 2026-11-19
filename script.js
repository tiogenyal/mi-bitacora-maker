/**
 * MI BITÁCORA MAKER - INTERACTIVE LOGIC (V3 THEMES & MULTI-LANGUAGE)
 * Henry Sánchez (tinkiLab)
 */

// ==========================================================================
// 1. DICTIONARY & I18N SYSTEM (ES / EN)
// ==========================================================================
const translations = {
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_projects: "Proyectos",
    nav_tools: "Taller & Tech",
    nav_manifesto: "Manifiesto",
    nav_whatsapp: "WhatsApp",

    // Hero Section
    hero_badge: "Bitácora Maker • tinkiLab & Fab Academy Alum",
    hero_title: 'Transformando ideas en <span class="gradient-text">átomos y bits</span>',
    hero_subtitle: 'Hola, soy <strong>Henry Sánchez</strong> ("Tío Geny"). Bienvenido a mi espacio de creación, prototipado e investigación. Aquí documento iniciativas que unen la <strong>fabricación digital</strong>, la <strong>educación STEAM</strong> y la <strong>economía circular</strong> para crear tecnología libre con impacto real.',
    hero_btn_projects: "Explorar Proyectos",
    hero_btn_wa: "Hablemos por WhatsApp",
    hero_stat_1: "Educación Práctica",
    hero_stat_2: "Red Global & Alum",
    hero_stat_3: "3D, CNC & Arduino",

    // Profile Card (Hero Visual)
    profile_status: "Taller Activo • tinkiLab Lima",
    profile_role: "Educador Maker & Especialista en Fabricación Digital",
    profile_skills_title: "Áreas de especialidad:",
    skill_1: "🖨️ Impresión 3D FDM / SLA",
    skill_2: "⚡ Corte & Grabado Láser",
    skill_3: "🤖 Arduino, ESP32 & IoT",
    skill_4: "📐 Modelado 3D & Paramétrico",
    skill_5: "🎒 Metodologías STEAM",
    skill_6: "🪙 Economía Circular",
    profile_preview_title: "Iniciativas en curso:",
    mini_fabcoins: "Tokens Fab Lab",
    mini_tinkilab: "Canal Maker",
    profile_quote: '"Aprender haciendo, compartir sin barreras"',

    // Projects Section
    projects_tag: "Portafolio de Fabricación",
    projects_title: "3 Proyectos en Desarrollo",
    projects_desc: "Iniciativas que conectan software, electrónica, economía circular y la formación de nuevas generaciones creadoras.",
    filter_all: "Todos (3)",
    filter_steam: "Educación STEAM",
    filter_circular: "Economía Circular",
    filter_community: "Comunidad & YouTube",

    // Cards
    card_makerdu_bannertag: "Suite CAD Escolar",
    card_makerdu_summary: 'Plataforma interactiva de <strong>e-learning y diseño maker</strong> desarrollada para democratizar el modelado 3D y la fabricación en centros educativos y talleres escolares.',
    card_makerdu_feat1: "Transición natural de boceto en papel a archivo STL imprimible",
    card_makerdu_feat2: "Metodología lúdica con retos y juguetes digitales armables",
    card_makerdu_feat3: "Integración directa con corte láser e impresión 3D en aula",
    tag_3d_modeling: "Modelado 3D",
    tag_3d_printing: "Impresión 3D",
    btn_view_details: "Ver detalles del proyecto",

    card_fabcoins_bannertag: "Tokenización Fab Lab",
    badge_fabcoins: "Economía Circular & Labs",
    card_fabcoins_summary: 'Sistema de <strong>créditos colaborativos y moneda social</strong> para la red Fab Lab. Convierte la capacidad ociosa de impresoras 3D, routers CNC y láser en horas de producción accesible mediante misiones maker.',
    card_fabcoins_feat1: "Aprovechamiento y monetización de maquinaria inactiva",
    card_fabcoins_feat2: "Makers obtienen horas de máquina realizando misiones útiles",
    card_fabcoins_feat3: "Ecosistema circular y solidario sin barreras financieras",
    tag_circular_economy: "Economía Circular",
    tag_tokenomics: "Tokenización",
    tag_idle_capacity: "Capacidad Ociosa",

    card_yt_bannertag: "Divulgación Maker",
    badge_yt: "Comunidad & Tutoriales",
    card_yt_title: "Canal de YouTube @tinkiLab",
    card_yt_summary: 'Espacio audiovisual práctico conducido por <strong>"Tío Geny"</strong>. Tutoriales directos de impresión 3D, trucos de calibración, electrónica con Arduino y proyectos de laboratorio sin tecnicismos innecesarios.',
    card_yt_feat1: "Tutoriales paso a paso de diseño 3D y circuitos reales",
    card_yt_feat2: "Resolución de problemas cotidianos de taller y calibración",
    card_yt_feat3: "Comunidad activa con explicaciones claras y entretenidas",
    tag_tutorials: "Tutoriales",
    tag_open_hardware: "Hardware Libre",
    btn_goto_channel: "Ir al Canal",
    btn_tech_specs: "Ficha técnica",

    // Tools Section
    tools_tag: "Laboratorio & Capacidades",
    tools_title: "El Arsenal del Taller",
    tools_desc: "Tecnologías, equipos y metodologías con las que damos vida a prototipos funcionales y programas formativos en tinkiLab.",
    tool_1_title: "Fabricación Digital",
    tool_1_desc: "Impresoras 3D FDM & Resina, Cortadoras Láser CO2, Ruteado CNC y cortadoras de vinil para prototipos rápidos de alta fidelidad.",
    tool_2_title: "Electrónica & Hardware",
    tool_2_desc: "Plataformas Arduino, ESP32 con WiFi/Bluetooth, sensores analógicos y digitales, servomotores y diseño de circuitos PCB.",
    tool_3_title: "Software & CAD/CAM",
    tool_3_desc: "Diseño en Autodesk Fusion 360, FreeCAD, Tinkercad, laminadores PrusaSlicer/Cura y software de corte LightBurn.",
    tool_4_title: "Educación STEAM",
    tool_4_desc: "Metodología ABP (Aprendizaje Basado en Proyectos), diseño centrado en el usuario (Design Thinking) y pedagogía maker lúdica.",

    // Manifesto Section
    manifesto_badge: "Filosofía de Trabajo",
    manifesto_title: "El Manifiesto Maker de la Bitácora",
    pillar_1_title: "Aprender Haciendo",
    pillar_1_desc: "La teoría cobra sentido cuando pasa por las manos. Cada prototipo fallido es una lección tangible de ingeniería, diseño y resiliencia.",
    pillar_2_title: "Código & Cultura Abierta",
    pillar_2_desc: "Compartir esquemáticos, modelos y metodologías multiplica el impacto comunitario y acelera la innovación tecnológica local.",
    pillar_3_title: "Sostenibilidad & Recursos",
    pillar_3_desc: "Diseñar pensando en el ciclo de vida, la circularidad de materiales y la optimización de las máquinas existentes en los Fab Labs.",

    // Contact Section
    contact_tag: "Conexión Directa",
    contact_title: "¿Tienes una idea, taller o proyecto maker en mente?",
    contact_desc: "Conversemos directamente por WhatsApp. Ya sea para implementar Makerdu en tu institución educativa, colaborar con FabCoins, proponer un tema en tinkiLab o asesoría técnica en fabricación digital.",
    wa_badge_reply: "Respuesta rápida garantizada",
    wa_role: "Director de tinkiLab • Fab Academy Alum",
    wa_step1_label: "1. Elige un tema o escribe tu mensaje abajo:",
    preset_makerdu: "🎒 Makerdu en colegios",
    preset_fabcoins: "🪙 FabCoins & Labs",
    preset_tinkilab: "🎥 Colaboración tinkiLab",
    preset_consulting: "⚙️ Consultoría Maker",
    wa_step2_label: "2. Personaliza tu mensaje antes de enviar:",
    wa_textarea_placeholder: "Escribe aquí tu mensaje...",
    btn_open_wa: "Abrir WhatsApp Ahora",
    btn_copy_number: "Copiar Número",
    btn_copied: "¡Copiado!",
    floating_tooltip: "¿Conversamos por WhatsApp?",
    toast_copied: "¡Número copiado: +51 999 999 999!",

    // Footer
    footer_tagline: "Construyendo futuros tangibles con fabricación digital, software libre y educación STEAM.",
    footer_col_projects: "Proyectos",
    footer_col_contact: "Contacto & Redes",
    footer_copyright: "© 2026 Henry Sánchez • tinkiLab. Hecho con pasión por el movimiento Maker.",
    footer_coords: "Perú / Red Fab Lab / Cultura Abierta",

    // Modal Generic Labels
    modal_problem_label: "El reto que aborda:",
    modal_solution_label: "Pilares y Solución:",
    modal_tech_label: "Enfoque Tecnológico & Maker:",
    modal_wa_btn: "Conversar sobre este proyecto",
    modal_yt_btn: "Ver Canal YouTube",

    // Presets text values
    preset_msgs: {
      makerdu: "Hola Henry, vi tu Bitácora Maker y me interesa conocer más sobre la plataforma educativa Makerdu para mi colegio/taller.",
      fabcoins: "Hola Henry, me interesa explorar el modelo de FabCoins para optimizar horas de máquina en nuestro laboratorio.",
      tinkilab: "Hola Tío Geny, sigo tu canal de YouTube de tinkiLab y quisiera proponer una colaboración/proyecto maker.",
      consulting: "Hola Henry, tengo una idea de prototipado e impresión 3D y busco asesoría especializada."
    }
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_projects: "Projects",
    nav_tools: "Workshop & Tech",
    nav_manifesto: "Manifesto",
    nav_whatsapp: "WhatsApp",

    // Hero Section
    hero_badge: "Maker Log • tinkiLab & Fab Academy Alum",
    hero_title: 'Transforming ideas into <span class="gradient-text">atoms and bits</span>',
    hero_subtitle: 'Hello, I am <strong>Henry Sánchez</strong> ("Tío Geny"). Welcome to my space for creation, prototyping, and research. Here I document initiatives bringing together <strong>digital fabrication</strong>, <strong>STEAM education</strong>, and <strong>circular economy</strong> to build open tech with real impact.',
    hero_btn_projects: "Explore Projects",
    hero_btn_wa: "Let's Chat on WhatsApp",
    hero_stat_1: "Hands-on Education",
    hero_stat_2: "Global Network & Alum",
    hero_stat_3: "3D, CNC & Arduino",

    // Profile Card (Hero Visual)
    profile_status: "Active Workshop • tinkiLab Lima",
    profile_role: "Maker Educator & Digital Fabrication Specialist",
    profile_skills_title: "Specialty areas:",
    skill_1: "🖨️ 3D Printing FDM / SLA",
    skill_2: "⚡ Laser Cutting & Engraving",
    skill_3: "🤖 Arduino, ESP32 & IoT",
    skill_4: "📐 3D & Parametric Modeling",
    skill_5: "🎒 STEAM Methodologies",
    skill_6: "🪙 Circular Economy",
    profile_preview_title: "Ongoing initiatives:",
    mini_fabcoins: "Fab Lab Tokens",
    mini_tinkilab: "Maker Channel",
    profile_quote: '"Learn by doing, share without boundaries"',

    // Projects Section
    projects_tag: "Fabrication Portfolio",
    projects_title: "3 Projects in Development",
    projects_desc: "Initiatives connecting software, electronics, circular economy, and empowering new generations of creators.",
    filter_all: "All (3)",
    filter_steam: "STEAM Education",
    filter_circular: "Circular Economy",
    filter_community: "Community & YouTube",

    // Cards
    card_makerdu_bannertag: "School CAD Suite",
    card_makerdu_summary: 'Interactive <strong>e-learning and maker design platform</strong> developed to democratize 3D modeling and fabrication in schools and maker workshops.',
    card_makerdu_feat1: "Smooth transition from paper sketch to printable STL file",
    card_makerdu_feat2: "Gamified methodology featuring challenges and assembleable digital toys",
    card_makerdu_feat3: "Direct classroom integration with laser cutting and 3D printing",
    tag_3d_modeling: "3D Modeling",
    tag_3d_printing: "3D Printing",
    btn_view_details: "View project details",

    card_fabcoins_bannertag: "Fab Lab Tokenomics",
    badge_fabcoins: "Circular Economy & Labs",
    card_fabcoins_summary: 'Collaborative <strong>credit and social currency system</strong> for the Fab Lab network. Converts idle machine capacity (3D printers, CNC routers, lasers) into accessible production time through maker missions.',
    card_fabcoins_feat1: "Optimization and monetization of idle machinery",
    card_fabcoins_feat2: "Makers gain machine hours by completing purposeful lab missions",
    card_fabcoins_feat3: "Circular and cooperative ecosystem without financial barriers",
    tag_circular_economy: "Circular Economy",
    tag_tokenomics: "Tokenomics",
    tag_idle_capacity: "Idle Capacity",

    card_yt_bannertag: "Maker Outreach",
    badge_yt: "Community & Tutorials",
    card_yt_title: "@tinkiLab YouTube Channel",
    card_yt_summary: 'Hands-on audiovisual channel hosted by <strong>"Tío Geny"</strong>. Step-by-step tutorials on 3D printing, calibration tips, Arduino electronics, and lab builds without unnecessary jargon.',
    card_yt_feat1: "Step-by-step tutorials on 3D design and practical circuits",
    card_yt_feat2: "Troubleshooting everyday workshop and calibration issues",
    card_yt_feat3: "Engaged community with clear and entertaining explanations",
    tag_tutorials: "Tutorials",
    tag_open_hardware: "Open Hardware",
    btn_goto_channel: "Go to Channel",
    btn_tech_specs: "Technical Specs",

    // Tools Section
    tools_tag: "Lab & Capabilities",
    tools_title: "The Workshop Arsenal",
    tools_desc: "Technologies, machinery, and methodologies bringing functional prototypes and educational programs to life at tinkiLab.",
    tool_1_title: "Digital Fabrication",
    tool_1_desc: "FDM & Resin 3D Printers, CO2 Laser Cutters, CNC Routers, and Vinyl Cutters for high-fidelity rapid prototyping.",
    tool_2_title: "Electronics & Hardware",
    tool_2_desc: "Arduino platforms, ESP32 with WiFi/Bluetooth, analog/digital sensors, servomotors, and PCB circuit design.",
    tool_3_title: "Software & CAD/CAM",
    tool_3_desc: "CAD design in Autodesk Fusion 360, FreeCAD, Tinkercad, slicers PrusaSlicer/Cura, and LightBurn laser software.",
    tool_4_title: "STEAM Education",
    tool_4_desc: "PBL (Project-Based Learning) methodology, human-centered design (Design Thinking), and playful maker pedagogy.",

    // Manifesto Section
    manifesto_badge: "Work Philosophy",
    manifesto_title: "The Maker Log Manifesto",
    pillar_1_title: "Learning by Doing",
    pillar_1_desc: "Theory comes to life when processed through hands. Every failed prototype is a tangible lesson in engineering, design, and resilience.",
    pillar_2_title: "Open Source & Culture",
    pillar_2_desc: "Sharing schematics, models, and methodologies multiplies community impact and accelerates local tech innovation.",
    pillar_3_title: "Sustainability & Resources",
    pillar_3_desc: "Designing with life cycles, material circularity, and optimization of existing Fab Lab machines in mind.",

    // Contact Section
    contact_tag: "Direct Contact",
    contact_title: "Have an idea, workshop, or maker project in mind?",
    contact_desc: "Let's chat directly on WhatsApp. Whether to implement Makerdu at your educational institution, collaborate on FabCoins, suggest a topic for tinkiLab, or consult on digital fabrication.",
    wa_badge_reply: "Fast reply guaranteed",
    wa_role: "Director of tinkiLab • Fab Academy Alum",
    wa_step1_label: "1. Choose a topic or type your message below:",
    preset_makerdu: "🎒 Makerdu in schools",
    preset_fabcoins: "🪙 FabCoins & Labs",
    preset_tinkilab: "🎥 tinkiLab Collaboration",
    preset_consulting: "⚙️ Maker Consulting",
    wa_step2_label: "2. Customize your message before sending:",
    wa_textarea_placeholder: "Type your message here...",
    btn_open_wa: "Open WhatsApp Now",
    btn_copy_number: "Copy Number",
    btn_copied: "Copied!",
    floating_tooltip: "Chat on WhatsApp?",
    toast_copied: "Number copied: +51 999 999 999!",

    // Footer
    footer_tagline: "Building tangible futures with digital fabrication, open source software, and STEAM education.",
    footer_col_projects: "Projects",
    footer_col_contact: "Contact & Social",
    footer_copyright: "© 2026 Henry Sánchez • tinkiLab. Built with passion for the Maker movement.",
    footer_coords: "Peru / Fab Lab Network / Open Source",

    // Modal Generic Labels
    modal_problem_label: "The challenge it addresses:",
    modal_solution_label: "Pillars & Solution:",
    modal_tech_label: "Technological & Maker Stack:",
    modal_wa_btn: "Discuss this project on WhatsApp",
    modal_yt_btn: "Visit YouTube Channel",

    // Presets text values
    preset_msgs: {
      makerdu: "Hello Henry, I saw your Maker Log and I'm interested in learning more about the Makerdu educational platform for my school/workshop.",
      fabcoins: "Hello Henry, I'd like to explore the FabCoins model to optimize machine hours in our lab.",
      tinkilab: "Hello Tío Geny, I follow your tinkiLab YouTube channel and would like to propose a maker collaboration/project.",
      consulting: "Hello Henry, I have a 3D prototyping idea and I'm looking for specialized maker consulting."
    }
  }
};

// ==========================================================================
// 2. DETAILED PROJECT DATA (BILINGUAL)
// ==========================================================================
const projectDetails = {
  makerdu: {
    badgeClass: "badge-makerdu",
    es: {
      title: "Makerdu: Suite E-learning & Fabricación Digital Educativa",
      badge: "Educación STEAM / EdTech",
      lead: "Makerdu es una plataforma desarrollada bajo la metodología de tinkiLab para derribar las barreras de entrada al modelado 3D y la fabricación digital en colegios, laboratorios y talleres creativos.",
      problem: "Muchos entornos de CAD profesional son abstractos y complejos para niños y jóvenes, lo que genera frustración inicial antes de que puedan materializar su primer objeto físico.",
      solution: [
        "Interfase intuitiva basada en desafíos maker y gamificación de geometrías básicas.",
        "Flujo de trabajo guiado: desde el dibujo en libreta o papel milimetrado hasta la generación del archivo STL o DXF listo para imprimir o cortar en láser.",
        "Módulos curriculares alineados a metodologías STEAM (Ciencia, Tecnología, Ingeniería, Arte y Matemáticas).",
        "Kits de ensamble y juguetes digitales personalizables para el aula escolar."
      ],
      techStack: ["Modelado 3D Paramétrico", "Web-based CAD", "STEAM Curricular", "Slicing 3D", "Open Educational Resources"],
      waPreset: "Hola Henry, vi tu Bitácora Maker y me interesa conocer más sobre la plataforma educativa Makerdu para mi colegio/taller."
    },
    en: {
      title: "Makerdu: E-learning Suite & Educational Digital Fabrication",
      badge: "STEAM Education / EdTech",
      lead: "Makerdu is a platform developed under the tinkiLab methodology to lower the entry barriers to 3D modeling and digital fabrication in schools, labs, and creative workshops.",
      problem: "Many professional CAD software tools are abstract and overwhelming for youth, leading to early frustration before they can materialize their first physical creation.",
      solution: [
        "Intuitive interface based on maker challenges and gamified basic 3D primitives.",
        "Guided workflow: from notebook or grid-paper sketch to printable STL or laser-cut DXF file.",
        "Curricular modules aligned with STEAM (Science, Technology, Engineering, Art & Mathematics).",
        "Customizable assembly kits and digital toys designed for classroom engagement."
      ],
      techStack: ["Parametric 3D Modeling", "Web-based CAD", "STEAM Curriculum", "3D Slicing", "Open Educational Resources"],
      waPreset: "Hello Henry, I saw your Maker Log and I'm interested in learning more about the Makerdu educational platform for my school/workshop."
    }
  },

  fabcoins: {
    badgeClass: "badge-fabcoins",
    es: {
      title: "FabCoins: Economía Circular y Tokenización en Fab Labs",
      badge: "Economía Circular / Red Global Fab Lab",
      lead: "Un modelo descentralizado de créditos colaborativos ideado para solucionar una de las mayores paradojas del ecosistema maker: maquinarias de alta precisión con horas ociosas y creadores con talento pero sin capital suficiente.",
      problem: "En los laboratorios de fabricación (Fab Labs), cortadoras láser y centros de maquinado CNC pasan horas detenidos, elevando los costos de mantenimiento mientras estudiantes y makers independientes no pueden solventar las tarifas de alquiler de máquina.",
      solution: [
        "Tokenización de horas de máquina disponibles como créditos 'FabCoins' (FBC).",
        "Publicación de 'Misiones del Lab': tareas de mantenimiento, diseño de piezas de repuesto, documentación o gestión de proyectos comunitarios.",
        "Intercambio de valor: los creadores completan misiones ganando FabCoins, que luego redimen por tiempo directo en fresadoras CNC, cortadoras láser o impresoras 3D.",
        "Fomento de un ecosistema autosostenible donde el trabajo creativo nutre el mantenimiento del espacio físico."
      ],
      techStack: ["Economía Circular", "Gestión de Recursos Maker", "Tokenomics Colaborativo", "Optimización de Maquinaria", "Comunidad Fab Lab"],
      waPreset: "Hola Henry, me interesa explorar el modelo de FabCoins para optimizar horas de máquina en nuestro laboratorio."
    },
    en: {
      title: "FabCoins: Circular Economy & Tokenomics in Fab Labs",
      badge: "Circular Economy / Fab Lab Global Network",
      lead: "A decentralized collaborative credit model designed to solve one of the maker movement's greatest paradoxes: high-precision machinery sitting idle while talented creators lack the funds to access it.",
      problem: "In fabrication laboratories (Fab Labs), laser cutters and CNC machines frequently remain unused for hours, raising fixed overhead while independent makers cannot afford machine rental rates.",
      solution: [
        "Tokenization of idle machine hours into 'FabCoins' (FBC) credits.",
        "Publication of 'Lab Missions': equipment maintenance, spare part design, documentation, or community projects.",
        "Value exchange: creators complete missions to earn FabCoins, which they redeem for direct machining time on CNCs, laser cutters, or 3D printers.",
        "Fostering a self-sustaining ecosystem where community creative work directly fuels laboratory operations."
      ],
      techStack: ["Circular Economy", "Maker Resource Optimization", "Collaborative Tokenomics", "Machine Efficiency", "Fab Lab Network"],
      waPreset: "Hello Henry, I'd like to explore the FabCoins model to optimize machine hours in our lab."
    }
  },

  tinkilab: {
    badgeClass: "badge-tinkilab",
    es: {
      title: "Canal de YouTube @tinkiLab: Divulgación Maker Práctica",
      badge: "Comunidad / Media Maker / Open Source",
      lead: "El canal oficial de tinkiLab conducido por Henry Sánchez ('Tío Geny'). Un punto de encuentro donde se desmitifica la tecnología y se enseña a construir prototipos funcionales sin tecnicismos innecesarios.",
      problem: "Gran parte del contenido técnico en línea es puramente teórico o requiere equipos inalcanzables, descuidando el paso a paso práctico que un estudiante o maker latinoamericano necesita en su mesa de trabajo.",
      solution: [
        "Tutoriales paso a paso de electrónica con Arduino, sensores, actuadores y controladores.",
        "Guías de calibración de impresoras 3D, solución de atascos, configuración de laminadores (Cura/PrusaSlicer) y pruebas de nuevos filamentos.",
        "Proyectos prácticos de laboratorio: robots didácticos, mecanismos articulados y juguetes electromecánicos.",
        "Fomento activo de la cultura maker y respuesta a preguntas de la comunidad en los comentarios y transmisiones en vivo."
      ],
      techStack: ["Electrónica con Arduino", "Impresión 3D FDM", "Corte y Grabado Láser", "Divulgación Científica", "Prototipado Rápido"],
      waPreset: "Hola Tío Geny, sigo tu canal de YouTube de tinkiLab y quisiera proponer una colaboración/proyecto maker."
    },
    en: {
      title: "@tinkiLab YouTube Channel: Practical Maker Outreach",
      badge: "Community / Maker Media / Open Source",
      lead: "The official tinkiLab channel hosted by Henry Sánchez ('Tío Geny'). A gathering hub where technology is demystified and practical functional prototypes are built without unnecessary jargon.",
      problem: "Much online technical content is purely theoretical or relies on out-of-reach industrial gear, overlooking the real step-by-step challenges makers face on their workbenches.",
      solution: [
        "Step-by-step electronics tutorials using Arduino, sensors, actuators, and microcontrollers.",
        "3D printer calibration walkthroughs, jam fixes, slicer setup (Cura/PrusaSlicer), and hands-on filament tests.",
        "Practical lab builds: educational robotics, articulated linkages, and electromechanical projects.",
        "Active community engagement with straightforward answers in comment sections and live workshops."
      ],
      techStack: ["Arduino Electronics", "FDM 3D Printing", "Laser Cutting & Engraving", "Science Outreach", "Rapid Prototyping"],
      waPreset: "Hello Tío Geny, I follow your tinkiLab YouTube channel and would like to propose a maker collaboration/project."
    }
  }
};

// ==========================================================================
// 3. STATE & DOM ELEMENTS
// ==========================================================================
let currentLang = localStorage.getItem('bitacora_lang') || 'es';
let currentTheme = localStorage.getItem('bitacora_theme') || 'dark';
let activePresetKey = 'makerdu';

const WA_NUMBER = "+51 999 999 999";
const WA_PHONE_CLEAN = "51999999999";

const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const langButtons = document.querySelectorAll('.lang-btn');
const projectModal = document.getElementById('projectModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalDynamicContent = document.getElementById('modalDynamicContent');
const toastMessage = document.getElementById('toastMessage');
const copyWaBtn = document.getElementById('copyWaBtn');
const copyBtnText = document.getElementById('copyBtnText');
const presetButtons = document.querySelectorAll('.preset-chip');
const customWaMsg = document.getElementById('customWaMsg');
const waDirectLink = document.getElementById('waDirectLink');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// ==========================================================================
// 4. THEME SWITCHER LOGIC
// ==========================================================================
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('bitacora_theme', theme);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });
}

// Check initial theme preference
if (localStorage.getItem('bitacora_theme')) {
  setTheme(localStorage.getItem('bitacora_theme'));
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  setTheme('light');
} else {
  setTheme('dark');
}

// ==========================================================================
// 5. MULTI-LANGUAGE SYSTEM LOGIC
// ==========================================================================
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('bitacora_lang', lang);

  const t = translations[lang] || translations.es;

  // Update active lang buttons
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Translate plain text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Translate HTML-containing elements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update active preset WhatsApp message in textarea
  if (customWaMsg && t.preset_msgs[activePresetKey]) {
    customWaMsg.value = t.preset_msgs[activePresetKey];
    updateWhatsAppLink(t.preset_msgs[activePresetKey]);
  }
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    setLanguage(lang);
  });
});

// ==========================================================================
// 6. NAVIGATION & SCROLL EVENTS
// ==========================================================================
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active section indicator on scroll
  const scrollY = window.pageYOffset;
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href*='${sectionId}']`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navLink) navLink.classList.add('active');
    } else {
      if (navLink) navLink.classList.remove('active');
    }
  });
});

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ==========================================================================
// 7. PROJECT FILTER SYSTEM
// ==========================================================================
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all') {
        card.style.display = 'flex';
      } else {
        const category = card.getAttribute('data-category');
        if (category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});

// ==========================================================================
// 8. PROJECT MODAL (BILINGUAL)
// ==========================================================================
window.openProjectModal = function(projectId) {
  const project = projectDetails[projectId];
  if (!project) return;

  const data = project[currentLang] || project.es;
  const t = translations[currentLang] || translations.es;

  const solutionsList = data.solution.map(s => `<li>${s}</li>`).join('');
  const tagsList = data.techStack.map(item => `<span class="tag">${item}</span>`).join('');
  const waEncodedMsg = encodeURIComponent(data.waPreset);
  const waUrl = `https://wa.me/${WA_PHONE_CLEAN}?text=${waEncodedMsg}`;

  modalDynamicContent.innerHTML = `
    <span class="modal-hero-badge ${project.badgeClass}">${data.badge}</span>
    <h3 class="modal-project-title">${data.title}</h3>
    <p class="modal-lead">${data.lead}</p>

    <h4 class="modal-section-title">${t.modal_problem_label}</h4>
    <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.2rem; line-height: 1.6;">${data.problem}</p>

    <h4 class="modal-section-title">${t.modal_solution_label}</h4>
    <ul class="modal-list">
      ${solutionsList}
    </ul>

    <h4 class="modal-section-title">${t.modal_tech_label}</h4>
    <div class="modal-tech-stack">
      ${tagsList}
    </div>

    <div class="modal-actions">
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex: 1;">
        <svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px;">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.15-.676-1.631-.927-2.233-.244-.587-.492-.507-.676-.516l-.577-.01c-.2 0-.527.075-.803.376-.275.301-1.053 1.029-1.053 2.509s1.079 2.91 1.23 3.111c.15.201 2.122 3.24 5.14 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.088 1.78-.727 2.03-1.43.25-.703.25-1.305.175-1.43-.075-.126-.275-.201-.576-.351z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95l4.908-1.332A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.64 0-3.17-.48-4.46-1.31l-.32-.2-2.92.79.79-2.85-.21-.33A8.17 8.17 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2 4.52 0 8.2 3.68 8.2 8.2 0 4.52-3.68 8.2-8.2 8.2z"/>
        </svg>
        <span>${t.modal_wa_btn}</span>
      </a>
      ${projectId === 'tinkilab' ? `
        <a href="https://www.youtube.com/@tinkilab" target="_blank" rel="noopener noreferrer" class="btn btn-card-external">
          <span>${t.modal_yt_btn}</span>
        </a>
      ` : ''}
    </div>
  `;

  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal.classList.contains('active')) {
    closeModal();
  }
});

// ==========================================================================
// 9. WHATSAPP LOGIC & PRESET HANDLERS
// ==========================================================================
function updateWhatsAppLink(msgText) {
  const encoded = encodeURIComponent(msgText.trim());
  waDirectLink.href = `https://wa.me/${WA_PHONE_CLEAN}?text=${encoded}`;
}

presetButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    presetButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    activePresetKey = btn.getAttribute('data-preset') || 'makerdu';
    const t = translations[currentLang] || translations.es;
    const msg = t.preset_msgs[activePresetKey] || "";

    if (customWaMsg) {
      customWaMsg.value = msg;
    }
    updateWhatsAppLink(msg);
  });
});

if (customWaMsg) {
  customWaMsg.addEventListener('input', () => {
    updateWhatsAppLink(customWaMsg.value);
  });
}

// Copy WhatsApp Number
if (copyWaBtn) {
  copyWaBtn.addEventListener('click', async () => {
    const t = translations[currentLang] || translations.es;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(WA_NUMBER);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = WA_NUMBER;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      showToast(t.toast_copied);
      copyBtnText.textContent = t.btn_copied;
      setTimeout(() => {
        copyBtnText.textContent = t.btn_copy_number;
      }, 2500);
    } catch (err) {
      console.error("Error al copiar número:", err);
      showToast(WA_NUMBER);
    }
  });
}

function showToast(text) {
  toastMessage.textContent = text;
  toastMessage.classList.add('show');
  setTimeout(() => {
    toastMessage.classList.remove('show');
  }, 3200);
}

// ==========================================================================
// 10. INITIALIZATION
// ==========================================================================
// Apply language on startup
setLanguage(currentLang);
