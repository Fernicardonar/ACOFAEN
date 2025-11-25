/* === script.js === */

// Esperamos a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('visor-arbol');

  // Construir árbol y aplicar roles ARIA
  const rootArbol = construirArbol(datosDelMapa);
  rootArbol.setAttribute('role', 'tree');
  contenedor.appendChild(rootArbol);
  inicializarAccesibilidad(rootArbol);

  // Delegación de eventos: click y teclado
  contenedor.addEventListener('click', manejarToggleInteractivo);
  contenedor.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('titulo')) {
      e.preventDefault();
      manejarToggle(e.target);
    }
  });

  agregarControlesGlobales();
});

/**
 * Función Recursiva - Construye el árbol HTML
 * @param {Array} nodos - La lista de nodos del mapa conceptual
 * @returns {HTMLUListElement} - Elemento <ul> con todo el árbol
 */
function construirArbol(nodos) {
    const ul = document.createElement('ul');
    const frag = document.createDocumentFragment();

    nodos.forEach((nodo) => {
        const li = document.createElement('li');

        const spanTitulo = document.createElement('span');
        spanTitulo.className = 'titulo';
        spanTitulo.textContent = nodo.titulo;
        spanTitulo.setAttribute('tabindex', '0');
        li.appendChild(spanTitulo);

        if (nodo.descripcion) {
            const divDescripcion = document.createElement('div');
            divDescripcion.className = 'descripcion';
            divDescripcion.textContent = nodo.descripcion;
            li.appendChild(divDescripcion);
        }

        const tieneElementos = Array.isArray(nodo.elementos) && nodo.elementos.length > 0;
        const tieneResultados = Array.isArray(nodo.resultados) && nodo.resultados.length > 0;

        if (tieneElementos || tieneResultados) {
            li.classList.add('expandible');
            li.setAttribute('aria-expanded', 'false');

            const contParalelas = document.createElement('div');
            contParalelas.className = 'hijos paralelas';
            contParalelas.setAttribute('role', 'group');

            if (tieneElementos) {
                const colElem = document.createElement('div');
                colElem.className = 'columna elementos';
                const h4 = document.createElement('h4');
                h4.textContent = 'Elementos de competencia';
                colElem.appendChild(h4);
                const ulElem = construirArbol(nodo.elementos);
                colElem.appendChild(ulElem);
                contParalelas.appendChild(colElem);
            }

            if (tieneResultados) {
                const colRes = document.createElement('div');
                colRes.className = 'columna resultados';
                const h4 = document.createElement('h4');
                h4.textContent = 'Resultados de aprendizaje';
                colRes.appendChild(h4);
                const ulRes = construirArbol(nodo.resultados);
                colRes.appendChild(ulRes);
                contParalelas.appendChild(colRes);
            }

            li.appendChild(contParalelas);
        } else if (nodo.hijos && nodo.hijos.length > 0) {
            li.classList.add('expandible');
            li.setAttribute('aria-expanded', 'false');
            const ulHijos = construirArbol(nodo.hijos);
            ulHijos.classList.add('hijos');
            ulHijos.setAttribute('role', 'group');
            li.appendChild(ulHijos);
        } else {
            li.setAttribute('role', 'treeitem');
        }

        frag.appendChild(li);
    });

    ul.appendChild(frag);
    return ul;
}

function manejarToggleInteractivo(evento) {
    const objetivo = evento.target;
    if (objetivo.tagName === 'SPAN' && objetivo.classList.contains('titulo')) {
        manejarToggle(objetivo);
    }
}

function manejarToggle(spanTitulo) {
    const liPadre = spanTitulo.parentElement;
    if (liPadre.classList.contains('expandible')) {
        liPadre.classList.toggle('expandido');
        const expandido = liPadre.classList.contains('expandido');
        liPadre.setAttribute('aria-expanded', String(expandido));
        setTimeout(() => {
            if (expandido) {
                spanTitulo.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 80);
    }
}

function inicializarAccesibilidad(rootUl) {
    // Asignar role a cada li expandible si no es hoja
    rootUl.querySelectorAll('li.expandible > span.titulo').forEach((span) => {
        span.parentElement.setAttribute('role', 'treeitem');
        span.parentElement.setAttribute('aria-expanded', 'false');
    });
    rootUl.querySelectorAll('li:not(.expandible)').forEach((li) => {
        li.setAttribute('role', 'treeitem');
    });
}

/**
 * Agregar controles para expandir/contraer todo
 */
function agregarControlesGlobales() {
  const contenedorControles = document.getElementById('controles-globales');
  if (!contenedorControles) return;
  
  const btnExpandir = crearBoton('Expandir Todo', () => toggleTodo(true));
  const btnContraer = crearBoton('Contraer Todo', () => toggleTodo(false));
  
  contenedorControles.appendChild(btnExpandir);
  contenedorControles.appendChild(btnContraer);
}/**
 * Crear botón estilizado
 */
function crearBoton(texto, callback) {
  const btn = document.createElement('button');
  btn.textContent = texto;
  btn.style.cssText = `
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
    padding: 8px 16px;
    margin: 0 5px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95em;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  `;    btn.addEventListener('mouseenter', () => {
        btn.style.background = '#667eea';
        btn.style.color = 'white';
        btn.style.transform = 'translateY(-2px)';
        btn.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.background = 'white';
        btn.style.color = '#667eea';
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
    
    btn.addEventListener('click', callback);
    return btn;
}

/**
 * Expandir o contraer todos los elementos
 */
function toggleTodo(expandir) {
    const elementos = document.querySelectorAll('#visor-arbol li.expandible');
    elementos.forEach((li) => {
        if (expandir) {
            li.classList.add('expandido');
            li.setAttribute('aria-expanded', 'true');
        } else {
            li.classList.remove('expandido');
            li.setAttribute('aria-expanded', 'false');
        }
    });
}