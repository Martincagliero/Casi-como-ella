// ===================================
// CASI COMO ELLA - Main JavaScript
// Funcionalidad general del sitio
// ===================================

// === CONFIGURACIÓN GLOBAL ===
const CONFIG = {
    whatsappNumber: '5491XXXXXXXXX', // Reemplazar con número real
    instagram: '@casi.como.ella',
    mercadoPagoPublicKey: 'TU_PUBLIC_KEY_DE_MERCADOPAGO' // Completar con la key real
};

// === DOM ELEMENTS ===
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const cartCount = document.getElementById('cartCount');

// === MOBILE NAV TOGGLE ===
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menu al hacer click en un link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// === CART MANAGEMENT ===
class CartManager {
    constructor() {
        this.storageKey = 'casi_como_ella_cart';
        this.cart = this.loadCart();
        this.updateCartCount();
    }

    loadCart() {
        const cartData = localStorage.getItem(this.storageKey);
        return cartData ? JSON.parse(cartData) : [];
    }

    saveCart() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
        this.updateCartCount();
    }

    addItem(product) {
        const existingItem = this.cart.find(item => 
            item.id === product.id && 
            JSON.stringify(item.selectedOptions) === JSON.stringify(product.selectedOptions)
        );

        if (existingItem) {
            existingItem.quantity += product.quantity || 1;
        } else {
            this.cart.push({
                ...product,
                quantity: product.quantity || 1,
                addedAt: new Date().toISOString()
            });
        }

        this.saveCart();
        this.showNotification('Producto agregado al carrito', 'success');
    }

    removeItem(index) {
        this.cart.splice(index, 1);
        this.saveCart();
        this.showNotification('Producto eliminado del carrito', 'info');
    }

    updateQuantity(index, quantity) {
        if (quantity <= 0) {
            this.removeItem(index);
        } else {
            this.cart[index].quantity = quantity;
            this.saveCart();
        }
    }

    getCart() {
        return this.cart;
    }

    getTotal() {
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    getItemCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    updateCartCount() {
        if (cartCount) {
            const count = this.getItemCount();
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Agregar estilos inline para la notificación
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            background: type === 'success' ? '#66bb6a' : '#2196f3',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: '9999',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            animation: 'slideIn 0.3s ease',
            minWidth: '250px'
        });

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Inicializar Cart Manager globalmente
const cartManager = new CartManager();

// === UTILITY FUNCTIONS ===
function formatPrice(price) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    }).format(price);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-AR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// === LAZY LOADING IMAGES ===
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px' // Cargar imágenes un poco antes
    });

    // Observer con delay para no bloquear el thread principal
    setTimeout(() => {
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }, 100);
}

// === FORM VALIDATION ===
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\+\-\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// === SCROLL TO TOP ===
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const header = document.querySelector('.header');
    
    if (header) {
        if (scrollTop > 100) {
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }
    }
});

// === ADD CSS ANIMATION FOR NOTIFICATIONS ===
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// === EXPORT FOR USE IN OTHER SCRIPTS ===
window.cartManager = cartManager;
window.formatPrice = formatPrice;
window.formatDate = formatDate;
window.CONFIG = CONFIG;
window.validateEmail = validateEmail;
window.validatePhone = validatePhone;

console.log('✨ Casi como ella - Sistema cargado correctamente');
