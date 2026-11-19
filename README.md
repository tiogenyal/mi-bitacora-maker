# Mi Bitácora Maker 🛠️⚡

Sitio web estático para la bitácora maker de **Henry Sánchez ("Tío Geny")**, fundador de **tinkiLab** y egresado de **Fab Academy**.

---

## 🌟 Nuevas Características (v3.0)

1. **Modo Claro / Modo Oscuro (Light & Dark Theme)**:
   - Botón toggle en la barra de navegación con animación de iconos Sol / Luna.
   - Paleta de colores cuidadosamente contrastada en modo claro (retícula blueprint suave, sombras limpias, tipografía nítida y acentos maker vivos).
   - Detección automática de la preferencia del sistema operativo (`prefers-color-scheme`) y persistencia local en `localStorage`.

2. **Multidioma Completo (Español / English)**:
   - Selector `[ ES | EN ]` en el header que traduce toda la interfaz en tiempo real sin recargar la página.
   - Traducción completa de:
     - Navegación, Hero section y tarjeta interactiva del perfil maker.
     - Galería de proyectos, etiquetas, filtros y resúmenes.
     - **Fichas técnicas en modales bilingües** (problema, solución y stack tecnológico adaptado al idioma seleccionado).
     - El Arsenal del Taller y Manifiesto Maker.
     - Sección de contacto por WhatsApp (plantillas de mensajes y etiquetas adaptadas al inglés o español).
   - Persistencia de la preferencia de idioma en `localStorage`.

3. **Hero Section Maker**:
   - Tarjeta interactiva del taller (`● Taller Activo • Lima`), badges de especialidades y accesos rápidos a los 3 proyectos.

4. **Galería con Banners Ilustrados y Filtros**:
   - Banners visuales temáticos (wireframe 3D para Makerdu, moneda circular para FabCoins y reproductor para el canal de YouTube).
   - Filtros: `Todos`, `Educación STEAM`, `Economía Circular` y `Comunidad & YouTube`.

5. **Contacto por WhatsApp (+51 999 999 999)**:
   - Selector de temas con plantillas bilingües.
   - Campo de texto personalizable antes de abrir WhatsApp.
   - Botón de "Copiar Número" con notificación toast y botón flotante en pantalla.

---

## 🚀 Cómo visualizar el proyecto

Puedes abrir la página directamente en cualquier navegador moderno:

1. Haz doble clic en `index.html`, o
2. Si prefieres un servidor local:
   ```bash
   npx serve .
   ```

---

## 📂 Archivos del Proyecto

- `index.html`: Maquetación semántica con atributos `data-i18n` y controles de tema/idioma.
- `styles.css`: Estilos visuales para temas Dark y Light, animaciones y diseño responsivo.
- `script.js`: Motor de traducción bilingüe, alternancia de temas, filtros y lógica interactiva de WhatsApp y modales.
