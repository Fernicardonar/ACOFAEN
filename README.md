# 🎓 ACOFAEN - Mapa Conceptual Interactivo

## 📋 Descripción
Visualizador interactivo de contenidos educativos tipo mapa conceptual. Permite organizar y explorar información de forma jerárquica con expansión hacia la derecha.

## ✨ Características

- ✅ **Estructura jerárquica**: Organización de contenidos en múltiples niveles
- ✅ **Expansión interactiva**: Clic para expandir/contraer secciones
- ✅ **Diseño visual atractivo**: Gradientes de colores y animaciones suaves
- ✅ **Controles globales**: Botones para expandir/contraer todo
- ✅ **Responsive**: Se adapta a diferentes tamaños de pantalla
- ✅ **Recarga automática**: Con Live Server instalado

## 🚀 Cómo usar

### 1. Instalar Live Server (para recarga automática)

En VS Code:
1. Ve a la pestaña de Extensiones (Ctrl+Shift+X)
2. Busca "Live Server" (por Ritwick Dey)
3. Haz clic en "Instalar"

### 2. Ejecutar el proyecto

**Opción A - Con Live Server (recomendado):**
1. Abre `index.html` en VS Code
2. Clic derecho → "Open with Live Server"
3. ¡Listo! Los cambios se recargan automáticamente

**Opción B - Sin Live Server:**
1. Simplemente abre `index.html` en tu navegador
2. Recarga manualmente (F5) después de cada cambio

### 3. Agregar contenido

Edita el archivo `datos.js` siguiendo esta estructura:

\`\`\`javascript
{
  "titulo": "Título del elemento",
  "descripcion": "Descripción opcional",  // Opcional
  "hijos": [                               // Opcional
    {
      "titulo": "Sub-elemento 1"
    },
    {
      "titulo": "Sub-elemento 2",
      "hijos": [
        { "titulo": "Nivel 3" }
      ]
    }
  ]
}
\`\`\`

## 📁 Estructura del proyecto

\`\`\`
ACOFAEN/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos visuales y animaciones
├── script.js           # Lógica de interactividad
├── datos.js            # Contenido del mapa conceptual (EDITA AQUÍ)
├── .vscode/
│   └── settings.json   # Configuración de Live Server
└── README.md           # Este archivo
\`\`\`

## 🎨 Personalización

### Cambiar colores
En `style.css`, busca las secciones:
- **Fondo general**: `body { background: linear-gradient(...) }`
- **Elementos expandibles**: `.expandible > span.titulo`
- **Niveles profundos**: `ul ul li.expandible > span.titulo`

### Agregar más niveles
Simplemente anida más objetos con `"hijos"` en `datos.js`. No hay límite de profundidad.

## 💡 Consejos

1. **Títulos cortos**: Para mejor visualización
2. **Usa descripciones**: Para información adicional sin saturar el título
3. **Organiza por niveles**: Mantén una jerarquía lógica
4. **Guarda frecuentemente**: Live Server recargará automáticamente

## 🐛 Solución de problemas

**No se ve nada:**
- Verifica que `datos.js` tenga la sintaxis correcta
- Abre la consola del navegador (F12) para ver errores

**No recarga automáticamente:**
- Asegúrate de tener Live Server instalado
- Verifica que abriste con "Open with Live Server"

**Elementos no se expanden:**
- Verifica que el objeto tenga la propiedad `"hijos"`
- Revisa la consola por errores de JavaScript

## 📝 Licencia

Proyecto educativo de código abierto.

---

## 🛠 Optimización aplicada

- Refactor recursivo con `DocumentFragment` para inserciones más rápidas.
- Accesibilidad mejorada (roles ARIA, `aria-expanded`, navegación teclado, foco visible).
- Ramas paralelas soportadas (`elementos` / `resultados`).
- Variables CSS centralizan colores, gradientes y sombras.
- HTML semántico (`main`, `header`, skip-link) + meta descripción.
- `.editorconfig` añadido para estilo consistente.

## 🔮 Próximos pasos opcionales

- Búsqueda de nodos (filtro en tiempo real + resaltado).
- Modo oscuro (toggle que cambia variables del `:root`).
- Lazy loading de ramas profundas para mejorar rendimiento inicial.
- Exportar vista a imagen/PDF.
- Validación automática de estructura (`node validate-datos.js`).

**Desarrollado para ACOFAEN** 🎓

---

# 📄 Especificaciones técnicas y condiciones de integración institucional

## 1. Descripción General
Visualizador interactivo de contenidos educativos tipo mapa conceptual, orientado a competencias y resultados de aprendizaje en enfermería. Permite explorar información jerárquica y en ramas paralelas, con expansión dinámica y controles globales.

## 2. Estructura del Proyecto

```
ACOFAEN/
├── index.html        # HTML principal, semántico y accesible
├── style.css         # Estilos con variables CSS y gradientes
├── script.js         # Lógica recursiva, controles, accesibilidad
├── datos.js          # Dataset jerárquico (editable)
├── .editorconfig     # Reglas de indentación (2 espacios)
└── README.md         # Documentación y pautas de uso
```

## 3. Requisitos para Integración
- **Servidor web:** Cualquier servidor capaz de servir archivos estáticos (Apache, Nginx, IIS, Vercel, Netlify, GitHub Pages, etc.).
- **Permisos:** Acceso de lectura a los archivos del proyecto.
- **Navegador:** Compatible con HTML5, CSS3 y JavaScript ES6+ (todos los navegadores modernos).
- **Ruta de acceso:** Los archivos deben estar en una carpeta accesible desde la web institucional, por ejemplo:  `https://institucion.edu.co/recursos/ACOFAEN/`

## 4. Condiciones para Anidamiento en Página Institucional

## 4. Procedimiento y Mejores Prácticas para Anidar el Visualizador en una Página Web Existente

### Opción Recomendada: Integración mediante Iframe o Enlace (Desacoplada y mantenible)

**¿Dónde se anida?**
El visualizador se aloja en una carpeta accesible del servidor institucional (por ejemplo, `/recursos/ACOFAEN/`). No es necesario modificar el código fuente de la página principal, solo agregar un enlace o un iframe.

**Procedimiento:**
1. **Sube la carpeta completa del proyecto** (`index.html`, `style.css`, `script.js`, `datos.js`) al servidor institucional en una ruta pública.
2. **Desde cualquier página web existente**, puedes:
  - **Agregar un enlace** que abra el visualizador en una nueva pestaña:
    ```html
    <a href="/recursos/ACOFAEN/index.html" target="_blank" rel="noopener">Ver Mapa Conceptual ACOFAEN</a>
    ```
  - **O incrustar el visualizador directamente** usando un iframe:
    ```html
    <iframe src="/recursos/ACOFAEN/index.html" width="100%" height="800" style="border:none;" title="Mapa Conceptual ACOFAEN"></iframe>
    ```
3. **No es necesario copiar ni modificar archivos** del visualizador en la web principal. El mantenimiento y las actualizaciones se realizan solo en la carpeta del visualizador.

**Ventajas de esta opción:**
- Separación total entre el visualizador y la web principal (fácil mantenimiento y actualización).
- No hay conflictos de estilos ni scripts.
- Accesibilidad y navegación por teclado garantizadas.
- Permite compartir el visualizador mediante enlace directo.

### Opción Avanzada: Inclusión Directa en el Código de la Página Principal

**¿Dónde se anida?**
Si se requiere que el visualizador forme parte del DOM de la página principal (sin iframe), debes copiar el contenido de los archivos del visualizador (`index.html`, `style.css`, `script.js`, `datos.js`) e integrarlos manualmente en la estructura de la web institucional.

**Procedimiento:**
1. Copia el HTML principal dentro del `<body>` de la página institucional.
2. Incluye los estilos en el `<head>` o como archivo CSS vinculado.
3. Incluye los scripts en el orden correcto antes de cerrar el `<body>`:
  ```html
  <script src="datos.js"></script>
  <script src="script.js"></script>
  ```
4. Mantén el contenedor principal:
  ```html
  <div id="visor-arbol"></div>
  ```
5. Ajusta rutas y verifica que no haya conflictos de estilos o scripts globales.

**Nota:** Esta opción solo se recomienda si necesitas una integración total y tienes control sobre el código fuente de la web principal. Para la mayoría de los casos institucionales, el uso de iframe y enlace es la forma más sencilla, robusta y mantenible.

## 5. Accesibilidad
- Navegación por teclado (Tab, Enter, Espacio).
- Roles ARIA (`tree`, `treeitem`, `aria-expanded`).
- Foco visible y skip-link para saltar al contenido.
- Compatible con lectores de pantalla.

## 6. Personalización
- Colores y gradientes editables en `style.css` (`:root` variables).
- Dataset ampliable en `datos.js` (estructura flexible, admite hijos y ramas paralelas).
- Botones globales para expandir/contraer todo.

## 7. Condiciones de Mantenimiento
- Mantener la estructura de archivos y rutas.
- Validar sintaxis de `datos.js` antes de publicar (`node datos.js`).
- Actualizar documentación en `README.md` ante cambios relevantes.

## 8. Recomendaciones de Seguridad
- No incluir datos sensibles en `datos.js`.
- Limitar permisos de escritura en el servidor a usuarios autorizados.

## 9. Licencia y Uso
- Proyecto educativo de código abierto. Uso libre con atribución a ACOFAEN.

---
