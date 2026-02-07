// ===================================
// GALERÍA - Sistema de imágenes por categoría
// ===================================

class GaleriaManager {
    constructor() {
        this.categorias = null;
        this.config = null;
        this.observador = null;
        this.imagenesCargadas = new Set();
    }

    /**
     * Inicializa la galería cargando la configuración
     */
    async init() {
        try {
            await this.cargarConfiguracion();
            this.inicializarLazyLoading();
            return true;
        } catch (error) {
            console.error('Error al inicializar galería:', error);
            return false;
        }
    }

    /**
     * Carga la configuración desde galeria.json
     */
    async cargarConfiguracion() {
        try {
            const response = await fetch('data/galeria.json');
            if (!response.ok) {
                throw new Error('No se pudo cargar galeria.json');
            }
            const data = await response.json();
            this.categorias = data.categorias;
            this.config = data.configuracion;
            return data;
        } catch (error) {
            console.error('Error cargando configuración:', error);
            throw error;
        }
    }

    /**
     * Obtiene todas las categorías disponibles
     */
    obtenerCategorias() {
        if (!this.categorias) return [];
        return Object.keys(this.categorias);
    }

    /**
     * Obtiene la información de una categoría específica
     */
    obtenerCategoria(nombreCategoria) {
        return this.categorias?.[nombreCategoria] || null;
    }

    /**
     * Renderiza una categoría en un contenedor específico
     */
    renderizarCategoria(nombreCategoria, contenedorId, opciones = {}) {
        const categoria = this.obtenerCategoria(nombreCategoria);
        if (!categoria) {
            console.error(`Categoría "${nombreCategoria}" no encontrada`);
            return false;
        }

        const contenedor = document.getElementById(contenedorId);
        if (!contenedor) {
            console.error(`Contenedor "${contenedorId}" no encontrado`);
            return false;
        }

        // Configuración por defecto
        const config = {
            mostrarTitulo: true,
            mostrarDescripcion: true,
            animaciones: this.config?.animaciones ?? true,
            ...opciones
        };

        // Limpiar contenedor
        contenedor.innerHTML = '';

        // Crear sección de categoría
        const seccionCategoria = document.createElement('div');
        seccionCategoria.className = 'galeria-categoria';
        seccionCategoria.dataset.categoria = nombreCategoria;

        // Título y descripción
        if (config.mostrarTitulo || config.mostrarDescripcion) {
            const header = document.createElement('div');
            header.className = 'galeria-header';

            if (config.mostrarTitulo) {
                const titulo = document.createElement('h2');
                titulo.className = 'galeria-titulo';
                titulo.textContent = categoria.nombre;
                header.appendChild(titulo);
            }

            if (config.mostrarDescripcion) {
                const descripcion = document.createElement('p');
                descripcion.className = 'galeria-descripcion';
                descripcion.textContent = categoria.descripcion;
                header.appendChild(descripcion);
            }

            seccionCategoria.appendChild(header);
        }

        // Grid de imágenes
        const grid = document.createElement('div');
        grid.className = 'galeria-grid';

        categoria.imagenes.forEach((imagen, index) => {
            const item = this.crearItemGaleria(imagen, index, config.animaciones);
            grid.appendChild(item);
        });

        seccionCategoria.appendChild(grid);
        contenedor.appendChild(seccionCategoria);

        // Re-observar imágenes recién renderizadas
        this.observarImagenes();

        return true;
    }

    /**
     * Renderiza todas las categorías en un contenedor
     */
    renderizarTodasCategorias(contenedorId, opciones = {}) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor) {
            console.error(`Contenedor "${contenedorId}" no encontrado`);
            return false;
        }

        contenedor.innerHTML = '';

        const categorias = this.obtenerCategorias();
        categorias.forEach(nombreCategoria => {
            const divCategoria = document.createElement('div');
            divCategoria.id = `categoria-${nombreCategoria}`;
            divCategoria.className = 'categoria-contenedor';
            contenedor.appendChild(divCategoria);

            this.renderizarCategoria(nombreCategoria, divCategoria.id, opciones);
        });

        // Asegurar lazy loading en todas las categorías
        this.observarImagenes();

        return true;
    }

    /**
     * Crea un elemento de imagen para la galería
     */
    crearItemGaleria(imagen, index, animaciones = true) {
        const item = document.createElement('div');
        item.className = 'galeria-item image-zoom';
        
        if (animaciones) {
            item.style.animationDelay = `${index * 0.01}s`;
        }

        // Contenedor de la imagen
        const imgContainer = document.createElement('div');
        imgContainer.className = 'galeria-img-container hover-premium';

        // Imagen
        const img = document.createElement('img');
        img.className = 'galeria-img';
        img.alt = imagen.alt || imagen.titulo || 'Imagen de galería';
        img.src = imagen.src; // Cargar inmediatamente
        img.loading = 'eager'; // Carga inmediata

        // Placeholder mientras carga
        const placeholder = document.createElement('div');
        placeholder.className = 'galeria-placeholder';
        imgContainer.appendChild(placeholder);
        imgContainer.appendChild(img);

        // Remover placeholder cuando cargue
        img.onload = () => {
            img.classList.add('cargada');
            placeholder.style.opacity = '0';
            setTimeout(() => placeholder.remove(), 300);
        };

        // Overlay con información
        const overlay = document.createElement('div');
        overlay.className = 'galeria-overlay';

        // Botón de ver
        const btnVer = document.createElement('button');
        btnVer.className = 'galeria-btn-ver';
        btnVer.innerHTML = '<i class="fas fa-search-plus"></i>';
        btnVer.setAttribute('aria-label', 'Ver imagen en grande');
        btnVer.onclick = () => this.abrirModal(imagen);
        overlay.appendChild(btnVer);

        imgContainer.appendChild(overlay);
        item.appendChild(imgContainer);

        return item;
    }

    /**
     * Inicializa Intersection Observer para lazy loading
     */
    inicializarLazyLoading() {
        if (!this.config?.lazyLoading) return;

        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.01
        };

        this.observador = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.cargarImagen(img);
                    this.observador.unobserve(img);
                }
            });
        }, options);

        // Observar todas las imágenes
        this.observarImagenes();
    }

    /**
     * Observa todas las imágenes con lazy loading
     */
    observarImagenes() {
        const imagenes = document.querySelectorAll('.galeria-img[data-src]');
        imagenes.forEach(img => {
            if (this.observador) {
                this.observador.observe(img);
            } else {
                // Fallback: cargar inmediatamente
                this.cargarImagen(img);
            }
        });
    }

    /**
     * Carga una imagen lazy
     */
    cargarImagen(img) {
        const src = img.dataset.src;
        if (!src || this.imagenesCargadas.has(src)) return;

        // Crear nueva imagen para precargar
        const imgTemp = new Image();
        
        imgTemp.onload = () => {
            img.src = src;
            img.classList.add('cargada');
            this.imagenesCargadas.add(src);
            
            // Ocultar placeholder
            const placeholder = img.previousElementSibling;
            if (placeholder?.classList.contains('galeria-placeholder')) {
                placeholder.style.opacity = '0';
                setTimeout(() => placeholder.remove(), 300);
            }
        };

        imgTemp.onerror = () => {
            console.error(`Error cargando imagen: ${src}`);
            img.src = 'images/placeholder.jpg'; // Imagen de fallback
            img.classList.add('error');
        };

        imgTemp.src = src;
    }

    /**
     * Abre modal con imagen en grande
     */
    abrirModal(imagen) {
        // Crear modal si no existe
        let modal = document.getElementById('galeriaModal');
        if (!modal) {
            modal = this.crearModal();
            document.body.appendChild(modal);
        }

        // Actualizar contenido del modal
        const modalImg = modal.querySelector('.modal-img');

        modalImg.src = imagen.src;
        modalImg.alt = imagen.alt;

        // Mostrar modal
        modal.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Crea el modal para ver imágenes
     */
    crearModal() {
        const modal = document.createElement('div');
        modal.id = 'galeriaModal';
        modal.className = 'galeria-modal';
        
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-contenido">
                <button class="modal-cerrar" aria-label="Cerrar">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-img-container">
                    <img src="" alt="" class="modal-img">
                </div>
            </div>
        `;

        // Eventos para cerrar modal
        const cerrarModal = () => {
            modal.classList.remove('activo');
            document.body.style.overflow = '';
        };

        modal.querySelector('.modal-cerrar').onclick = cerrarModal;
        modal.querySelector('.modal-overlay').onclick = cerrarModal;
        
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') cerrarModal();
        });

        return modal;
    }

    /**
     * Agrega una nueva categoría dinámicamente
     */
    agregarCategoria(nombreCategoria, datos) {
        if (!this.categorias) {
            this.categorias = {};
        }

        this.categorias[nombreCategoria] = {
            nombre: datos.nombre || nombreCategoria,
            descripcion: datos.descripcion || '',
            imagenes: datos.imagenes || []
        };

        return true;
    }

    /**
     * Agrega imágenes a una categoría existente
     */
    agregarImagenesACategoria(nombreCategoria, imagenes) {
        const categoria = this.obtenerCategoria(nombreCategoria);
        if (!categoria) {
            console.error(`Categoría "${nombreCategoria}" no encontrada`);
            return false;
        }

        if (!Array.isArray(imagenes)) {
            imagenes = [imagenes];
        }

        categoria.imagenes.push(...imagenes);
        return true;
    }

    /**
     * Filtra imágenes por búsqueda
     */
    buscarImagenes(termino) {
        const resultados = [];
        const terminoLower = termino.toLowerCase();

        Object.entries(this.categorias).forEach(([nombreCategoria, categoria]) => {
            categoria.imagenes.forEach(imagen => {
                const coincide = 
                    imagen.titulo?.toLowerCase().includes(terminoLower) ||
                    imagen.alt?.toLowerCase().includes(terminoLower) ||
                    nombreCategoria.toLowerCase().includes(terminoLower);

                if (coincide) {
                    resultados.push({
                        categoria: nombreCategoria,
                        imagen: imagen
                    });
                }
            });
        });

        return resultados;
    }
}

// Instancia global
const galeria = new GaleriaManager();

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => galeria.init());
} else {
    galeria.init();
}
