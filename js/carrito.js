// ===================================
// CARRITO - Gestión del carrito de compras
// ===================================

// === RENDER CART ===
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;
    
    const cart = cartManager.getCart();
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <h3>Tu carrito está vacío</h3>
                <p>Descubrí nuestros productos artesanales</p>
                <a href="productos.html" class="btn btn-primary">Ver productos</a>
            </div>
        `;
        updateCartSummary();
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        const itemElement = createCartItemElement(item, index);
        cartItemsContainer.appendChild(itemElement);
    });
    
    updateCartSummary();
}

// === CREATE CART ITEM ELEMENT ===
function createCartItemElement(item, index) {
    const div = document.createElement('div');
    div.className = 'cart-item';
    
    const variantsText = Object.entries(item.selectedOptions || {})
        .map(([key, value]) => `${key}: ${value}`)
        .join(' • ');
    
    div.innerHTML = `
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
        </div>
        <div class="cart-item-details">
            <div class="cart-item-header">
                <div>
                    <h3 class="cart-item-name">
                        <a href="producto.html?id=${item.id}">${item.name}</a>
                    </h3>
                    ${variantsText ? `<p class="cart-item-variant">${variantsText}</p>` : ''}
                </div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="cart-item-footer">
                <div class="cart-item-quantity">
                    <button class="cart-quantity-btn" onclick="updateCartItemQuantity(${index}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="cart-quantity-value">${item.quantity}</span>
                    <button class="cart-quantity-btn" onclick="updateCartItemQuantity(${index}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    
    return div;
}

// === UPDATE CART ITEM QUANTITY ===
function updateCartItemQuantity(index, delta) {
    const cart = cartManager.getCart();
    const item = cart[index];
    
    if (item) {
        const newQuantity = item.quantity + delta;
        cartManager.updateQuantity(index, newQuantity);
        renderCart();
    }
}

// === REMOVE CART ITEM ===
function removeCartItem(index) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
        cartManager.removeItem(index);
        renderCart();
    }
}

// === UPDATE CART SUMMARY ===
function updateCartSummary() {
    const cart = cartManager.getCart();
    const subtotal = cartManager.getTotal();
    
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const shippingElement = document.getElementById('shipping');
    
    if (subtotalElement) {
        subtotalElement.textContent = formatPrice(subtotal);
    }
    
    if (totalElement) {
        totalElement.textContent = formatPrice(subtotal);
    }
    
    if (shippingElement) {
        shippingElement.textContent = subtotal > 0 ? 'A calcular' : '$0';
    }
    
    // Enable/disable checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
        checkoutBtn.onclick = () => {
            if (cart.length > 0) {
                window.location.href = 'checkout.html';
            }
        };
    }
}

// === APPLY COUPON (opcional - para futuras implementaciones) ===
function applyCoupon() {
    const couponInput = document.getElementById('couponCode');
    if (!couponInput) return;
    
    const code = couponInput.value.trim().toUpperCase();
    
    // Ejemplo de cupones (esto debería venir de un backend)
    const coupons = {
        'BIENVENIDA10': { type: 'percentage', value: 10 },
        'PRIMERACOMPRA': { type: 'fixed', value: 1500 }
    };
    
    if (coupons[code]) {
        cartManager.showNotification(`¡Cupón "${code}" aplicado!`, 'success');
        // Aplicar descuento...
    } else {
        cartManager.showNotification('Cupón inválido', 'error');
    }
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    
    // Refresh cart on storage change (for multi-tab sync)
    window.addEventListener('storage', (e) => {
        if (e.key === 'casi_como_ella_cart') {
            renderCart();
        }
    });
});

// Export functions
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeCartItem = removeCartItem;
window.applyCoupon = applyCoupon;
