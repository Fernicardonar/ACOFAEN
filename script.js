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
                h4.textContent = 'Componentes de competencia';
                colElem.appendChild(h4);
                const ulElem = construirArbol(nodo.elementos);
                colElem.appendChild(ulElem);
                contParalelas.appendChild(colElem);
            }

            li.appendChild(contParalelas);
        } else if (nodo.hijos && nodo.hijos.length > 0) {
            li.classList.add('expandible');
            li.setAttribute('aria-expanded', 'false');

            // Guardar referencia para insertar el h4 dinámicamente
            li._insertEjes = false;

            // Marcar los títulos que deben mostrar el h4 al expandirse
            // Normalizar para comparar sin tildes ni mayúsculas
            const tit = (nodo.titulo || '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const titSinEspacios = tit.replace(/\s+/g, ' ');
            const mostrarEjes =
                titSinEspacios === 'fundamentacion o basico' ||
                titSinEspacios === 'disciplinar profesional: enfermeria' ||
                titSinEspacios === 'flexibilidad, libre eleccion o electivas';
            if (mostrarEjes) {
                li._insertEjes = true;
            }

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

        // Mostrar/ocultar h4 "Ejes de conocimiento" dinámicamente
        if (liPadre._insertEjes) {
            if (expandido) {
                // Solo agregar si no existe ya
                if (!liPadre.querySelector('h4.ejes-conocimiento')) {
                    const h4Ejes = document.createElement('h4');
                    h4Ejes.textContent = 'Ejes de conocimiento';
                    h4Ejes.className = 'ejes-conocimiento';
                    h4Ejes.style.fontWeight = 'bold';
                    h4Ejes.style.margin = '18px 0 8px 0';
                    // Insertar después del título y descripción si existe
                    let refNode = liPadre.querySelector('span.titulo');
                    if (liPadre.querySelector('.descripcion')) {
                        refNode = liPadre.querySelector('.descripcion');
                    }
                    refNode.after(h4Ejes);
                }
            } else {
                // Ocultar/eliminar el h4 cuando se colapsa
                const h4Ejes = liPadre.querySelector('h4.ejes-conocimiento');
                if (h4Ejes) h4Ejes.remove();
            }
        }

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
    btn.className = 'btn-global';
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