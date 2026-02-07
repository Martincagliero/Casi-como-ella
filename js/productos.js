// ===================================
// PRODUCTOS - Gestión de catálogo
// ===================================

// === PRODUCTS DATA (se carga desde productos.json) ===
let allProducts = [];
let featuredProducts = [];

// === LOAD PRODUCTS ===
async function loadProducts() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        
        const response = await fetch('data/productos.json', {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        allProducts = data.products || [];
        featuredProducts = allProducts.filter(p => p.featured);
        console.log('✅ Productos cargados desde JSON:', allProducts.length);
        return allProducts;
    } catch (error) {
        console.warn('⚠️ No se pudo cargar productos.json, usando datos de ejemplo:', error.message);
        allProducts = getSampleProducts();
        featuredProducts = allProducts.filter(p => p.featured);
        console.log('✅ Productos de ejemplo cargados:', allProducts.length);
        return allProducts;
    }
}

// === CREATE PRODUCT CARD ===
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card hover-premium card-premium';
    
    const badge = product.new ? '<span class="product-badge">Nuevo</span>' : 
                  product.sale ? '<span class="product-badge">Oferta</span>' : '';
    
    const priceHTML = product.oldPrice 
        ? `<span class="product-price">$${product.price}</span>
           <span class="product-old-price">$${product.oldPrice}</span>`
        : `<span class="product-price">${formatPrice(product.price)}</span>`;
    
    card.innerHTML = `
        <div class="product-image image-zoom">
            <img src="${product.images[0]}" alt="${product.name}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
            ${badge}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">
                <a href="producto.html?id=${product.id}">${product.name}</a>
            </h3>
            <p class="product-description">${product.shortDescription}</p>
            <div class="product-footer">
                <div class="product-price-container">
                    ${priceHTML}
                </div>
                <button class="btn-add-to-cart btn-ripple" onclick="addToCartFromCard(${product.id})">
                    <i class="fas fa-shopping-bag"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// === ADD TO CART FROM CARD ===
function addToCartFromCard(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        cartManager.addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            selectedOptions: {}
        });
    }
}

// === DISPLAY PRODUCTS ===
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (products.length === 0) {
        container.innerHTML = '<p class="no-products">No se encontraron productos</p>';
        return;
    }
    
    products.forEach(product => {
        container.appendChild(createProductCard(product));
    });
}

// === FILTER AND SORT PRODUCTS ===
const filterAndSortProducts = debounce ? debounce(function() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (!categoryFilter || !sortFilter) return;
    
    let filtered = [...allProducts];
    
    // Filter by category
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
        filtered = filtered.filter(p => p.category.toLowerCase() === selectedCategory);
    }
    
    // Sort
    const sortBy = sortFilter.value;
    switch (sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        case 'featured':
        default:
            filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    displayProducts(filtered, 'productsGrid');
}, 300) : function() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (!categoryFilter || !sortFilter) return;
    
    let filtered = [...allProducts];
    
    // Filter by category
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
        filtered = filtered.filter(p => p.category.toLowerCase() === selectedCategory);
    }
    
    // Sort
    const sortBy = sortFilter.value;
    switch (sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        case 'featured':
        default:
            filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    displayProducts(filtered, 'productsGrid');
};

// === PRODUCT DETAIL PAGE ===
async function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const container = document.getElementById('productDetailContainer');
    if (!container) return;
    
    const products = await loadProducts();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        container.innerHTML = '<p>Producto no encontrado</p>';
        return;
    }
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('productBreadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = product.name;
    }
    
    // Update page title
    document.title = `${product.name} - Casi como ella`;
    
    // Render product detail
    container.innerHTML = `
        <div class="product-gallery">
            <div class="product-main-image" id="mainImage">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="product-thumbnails" id="thumbnails">
                ${product.images.map((img, index) => `
                    <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeImage('${img}', ${index})">
                        <img src="${img}" alt="${product.name}">
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="product-details">
            <div class="product-category">${product.category}</div>
            <h1>${product.name}</h1>
            
            <div class="product-rating">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <span class="rating-count">(${product.reviews || 12} reseñas)</span>
            </div>
            
            <div class="product-price-container">
                <span class="product-current-price">${formatPrice(product.price)}</span>
                ${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
            
            <div class="product-description-full">
                <p>${product.description}</p>
            </div>
            
            ${product.variants ? renderVariants(product.variants) : ''}
            
            <div class="quantity-selector">
                <label>Cantidad:</label>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="quantity-input" id="quantity" value="1" min="1" max="10">
                    <button class="quantity-btn" onclick="changeQuantity(1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            
            <div class="product-actions">
                <button class="btn btn-primary btn-add-to-cart-large" onclick="addToCartDetailed(${product.id})">
                    <i class="fas fa-shopping-bag"></i> Agregar al carrito
                </button>
                <button class="btn-wishlist" title="Agregar a favoritos">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            
            <div class="product-info-extra">
                <div class="info-item">
                    <i class="fas fa-truck"></i>
                    <span>Retiro gratis en Sunchales, Santa Fe</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-shield-alt"></i>
                    <span>Producto 100% artesanal y único</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-heart"></i>
                    <span>Hecho a mano con dedicación</span>
                </div>
                <div class="info-item">
                    <i class="fab fa-whatsapp"></i>
                    <span>¿Dudas? <a href="https://wa.me/${CONFIG.whatsappNumber}">Escribinos por WhatsApp</a></span>
                </div>
            </div>
        </div>
    `;
    
    // Load related products
    loadRelatedProducts(product);
}

// === RENDER VARIANTS ===
function renderVariants(variants) {
    let html = '<div class="product-options">';
    
    if (variants.sizes && variants.sizes.length > 0) {
        html += `
            <div class="option-group">
                <label>Tamaño:</label>
                <div class="size-options">
                    ${variants.sizes.map((size, index) => `
                        <button class="option-btn ${index === 0 ? 'active' : ''}" 
                                onclick="selectOption(this, 'size', '${size}')">
                            ${size}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    if (variants.colors && variants.colors.length > 0) {
        html += `
            <div class="option-group">
                <label>Color:</label>
                <div class="color-options">
                    ${variants.colors.map((color, index) => `
                        <div class="color-option ${index === 0 ? 'active' : ''}" 
                             style="background-color: ${color.hex}"
                             title="${color.name}"
                             onclick="selectOption(this, 'color', '${color.name}')">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// === CHANGE IMAGE ===
function changeImage(imageSrc, index) {
    const mainImage = document.querySelector('#mainImage img');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// === CHANGE QUANTITY ===
function changeQuantity(delta) {
    const input = document.getElementById('quantity');
    if (input) {
        const currentValue = parseInt(input.value) || 1;
        const newValue = Math.max(1, Math.min(10, currentValue + delta));
        input.value = newValue;
    }
}

// === SELECT OPTION ===
function selectOption(element, type, value) {
    const parent = element.parentElement;
    parent.querySelectorAll('.option-btn, .color-option').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
    
    // Store selection (could be used when adding to cart)
    if (!window.selectedOptions) {
        window.selectedOptions = {};
    }
    window.selectedOptions[type] = value;
}

// === ADD TO CART (DETAILED) ===
function addToCartDetailed(productId) {
    const product = allProducts.find(p => p.id === productId);
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    
    if (product) {
        cartManager.addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: quantity,
            selectedOptions: window.selectedOptions || {}
        });
    }
}

// === LOAD RELATED PRODUCTS ===
function loadRelatedProducts(currentProduct) {
    const container = document.getElementById('relatedProducts');
    if (!container) return;
    
    const related = allProducts
        .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
        .slice(0, 4);
    
    displayProducts(related, 'relatedProducts');
}

// === SAMPLE PRODUCTS (fallback) ===
function getSampleProducts() {
    return [
        {
            id: 1,
            name: "Cuadro Flores Silvestres",
            category: "Cuadros",
            price: 15000,
            oldPrice: null,
            shortDescription: "Hermoso cuadro pintado a mano con flores silvestres en tonos pastel",
            description: "Cuadro pintado completamente a mano sobre lienzo de alta calidad. Cada flor está cuidadosamente detallada con pinturas textiles profesionales. Perfecto para decorar cualquier rincón de tu hogar con un toque artesanal y delicado.",
            images: ["images/products/cuadro-flores-1.jpg", "images/products/cuadro-flores-2.jpg"],
            featured: true,
            new: true,
            variants: {
                sizes: ["30x40cm", "40x50cm", "50x70cm"]
            },
            reviews: 15,
            createdAt: "2026-02-01"
        },
        {
            id: 2,
            name: "Almohadón Mariposas",
            category: "Almohadones",
            price: 8500,
            oldPrice: 10000,
            shortDescription: "Almohadón decorativo con diseño de mariposas pintadas a mano",
            description: "Almohadón de 40x40cm con relleno suave y funda pintada a mano. El diseño presenta mariposas delicadas en tonos rosa y lila. Incluye cierre invisible para fácil lavado.",
            images: ["images/products/almohadon-mariposas-1.jpg"],
            featured: true,
            sale: true,
            variants: {},
            reviews: 23,
            createdAt: "2026-01-15"
        },
        {
            id: 3,
            name: "Bolso Tote Art",
            category: "Bolsos",
            price: 12000,
            shortDescription: "Bolso de tela resistente con diseño artístico exclusivo",
            description: "Bolso tipo tote de 35x40cm fabricado en lona resistente y pintado a mano. Perfecto para el día a día, combina funcionalidad con arte. Diseño único e irrepetible.",
            images: ["images/products/bolso-1.jpg"],
            featured: true,
            variants: {
                colors: [
                    { name: "Rosa", hex: "#f8bbd0" },
                    { name: "Lila", hex: "#ce93d8" },
                    { name: "Celeste", hex: "#bbdefb" }
                ]
            },
            reviews: 8,
            createdAt: "2026-01-20"
        },
        {
            id: 4,
            name: "Diseño Personalizado",
            category: "Personalizados",
            price: 18000,
            shortDescription: "Creamos juntos la pieza que sueñas",
            description: "¿Tenés algo especial en mente? Trabajamos juntos para crear tu pieza personalizada. Elegís el tamaño, colores y diseño. El precio es orientativo y puede variar según complejidad.",
            images: ["images/products/personalizado-1.jpg"],
            featured: false,
            variants: {},
            reviews: 31,
            createdAt: "2026-01-01"
        }
    ];
}

// === INIT ===
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await loadProducts();
        
        // Home page - Featured products
        const featuredContainer = document.getElementById('featuredProducts');
        if (featuredContainer) {
            displayProducts(featuredProducts.slice(0, 6), 'featuredProducts');
        }
        
        // Products page - All products with filters
        const productsContainer = document.getElementById('productsGrid');
        if (productsContainer) {
            displayProducts(allProducts, 'productsGrid');
            
            // Setup filters
            const categoryFilter = document.getElementById('categoryFilter');
            const sortFilter = document.getElementById('sortFilter');
            
            if (categoryFilter) {
                categoryFilter.addEventListener('change', filterAndSortProducts);
            }
            if (sortFilter) {
                sortFilter.addEventListener('change', filterAndSortProducts);
            }
        }
        
        // Product detail page
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('id')) {
            await loadProductDetail();
        }
    } catch (error) {
        console.error('Error initializing products:', error);
    }
});

// Export functions for global use
window.addToCartFromCard = addToCartFromCard;
window.addToCartDetailed = addToCartDetailed;
window.changeImage = changeImage;
window.changeQuantity = changeQuantity;
window.selectOption = selectOption;
