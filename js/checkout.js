// ===================================
// CHECKOUT - Finalización de compra
// ===================================

// === RENDER ORDER SUMMARY ===
function renderOrderSummary() {
    const cart = cartManager.getCart();
    const orderItemsContainer = document.getElementById('orderItems');
    const subtotalElement = document.getElementById('summarySubtotal');
    const totalElement = document.getElementById('summaryTotal');
    const shippingElement = document.getElementById('summaryShipping');
    
    if (!orderItemsContainer) return;
    
    // Render items
    orderItemsContainer.innerHTML = cart.map(item => {
        const variantsText = Object.entries(item.selectedOptions || {})
            .map(([key, value]) => `${key}: ${value}`)
            .join(' • ');
        
        return `
            <div class="order-item">
                <div class="order-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
                </div>
                <div class="order-item-info">
                    <div class="order-item-name">${item.name}</div>
                    ${variantsText ? `<div class="order-item-variant">${variantsText}</div>` : ''}
                    <div class="order-item-quantity">Cantidad: ${item.quantity}</div>
                </div>
                <div class="order-item-price">${formatPrice(item.price * item.quantity)}</div>
            </div>
        `;
    }).join('');
    
    // Update totals
    const subtotal = cartManager.getTotal();
    
    if (subtotalElement) {
        subtotalElement.textContent = formatPrice(subtotal);
    }
    
    if (totalElement) {
        totalElement.textContent = formatPrice(subtotal);
    }
    
    if (shippingElement) {
        shippingElement.textContent = 'A calcular';
    }
}

// === SHIPPING METHOD CHANGE ===
function handleShippingChange() {
    const selectedShipping = document.querySelector('input[name="envio"]:checked');
    const direccionEnvio = document.getElementById('direccionEnvio');
    
    if (!selectedShipping || !direccionEnvio) return;
    
    if (selectedShipping.value === 'domicilio') {
        direccionEnvio.style.display = 'block';
        // Make address fields required
        direccionEnvio.querySelectorAll('input').forEach(input => {
            input.required = true;
        });
    } else {
        direccionEnvio.style.display = 'none';
        // Make address fields optional
        direccionEnvio.querySelectorAll('input').forEach(input => {
            input.required = false;
        });
    }
}

// === VALIDATE CHECKOUT FORM ===
function validateCheckoutForm(formData) {
    const errors = [];
    
    // Validate name
    if (!formData.get('nombre') || formData.get('nombre').trim().length < 3) {
        errors.push('Por favor, ingresa tu nombre completo');
    }
    
    // Validate email
    const email = formData.get('email');
    if (!email || !validateEmail(email)) {
        errors.push('Por favor, ingresa un email válido');
    }
    
    // Validate phone
    const telefono = formData.get('telefono');
    if (!telefono || !validatePhone(telefono)) {
        errors.push('Por favor, ingresa un teléfono válido');
    }
    
    // Validate shipping address if needed
    const envioMethod = formData.get('envio');
    if (envioMethod === 'domicilio') {
        if (!formData.get('direccion') || formData.get('direccion').trim().length < 5) {
            errors.push('Por favor, ingresa una dirección válida');
        }
        if (!formData.get('ciudad')) {
            errors.push('Por favor, ingresa la ciudad');
        }
        if (!formData.get('provincia')) {
            errors.push('Por favor, ingresa la provincia');
        }
        if (!formData.get('codigoPostal')) {
            errors.push('Por favor, ingresa el código postal');
        }
    }
    
    return errors;
}

// === PROCESS CHECKOUT ===
async function processCheckout(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate form
    const errors = validateCheckoutForm(formData);
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }
    
    // Get cart data
    const cart = cartManager.getCart();
    const total = cartManager.getTotal();
    
    // Prepare order data
    const orderData = {
        customer: {
            nombre: formData.get('nombre'),
            email: formData.get('email'),
            telefono: formData.get('telefono')
        },
        shipping: {
            method: formData.get('envio'),
            address: formData.get('envio') === 'domicilio' ? {
                direccion: formData.get('direccion'),
                ciudad: formData.get('ciudad'),
                provincia: formData.get('provincia'),
                codigoPostal: formData.get('codigoPostal')
            } : null
        },
        payment: {
            method: formData.get('pago')
        },
        items: cart,
        total: total,
        notes: formData.get('notas'),
        createdAt: new Date().toISOString()
    };
    
    // Process payment based on method
    const paymentMethod = formData.get('pago');
    
    if (paymentMethod === 'mercadopago') {
        processMercadoPago(orderData);
    } else if (paymentMethod === 'transferencia') {
        processTransferencia(orderData);
    }
}

// === PROCESS MERCADO PAGO ===
function processMercadoPago(orderData) {
    // En producción, aquí se integraría con la API de Mercado Pago
    console.log('Processing Mercado Pago payment:', orderData);
    
    // Simulación de creación de preferencia de pago
    cartManager.showNotification('Procesando pago con Mercado Pago...', 'info');
    
    // Save order to localStorage temporarily
    localStorage.setItem('pending_order', JSON.stringify(orderData));
    
    // Redirect to thank you page or Mercado Pago checkout
    setTimeout(() => {
        // En producción, esto redirigiría a Mercado Pago
        // window.location.href = mercadoPagoCheckoutUrl;
        
        // Por ahora, enviamos por WhatsApp
        sendOrderByWhatsApp(orderData);
    }, 1000);
}

// === PROCESS TRANSFERENCIA ===
function processTransferencia(orderData) {
    console.log('Processing bank transfer:', orderData);
    
    // Save order
    localStorage.setItem('pending_order', JSON.stringify(orderData));
    
    // Send order by WhatsApp
    sendOrderByWhatsApp(orderData);
}

// === SEND ORDER BY WHATSAPP ===
function sendOrderByWhatsApp(orderData) {
    const { customer, shipping, payment, items, total, notes } = orderData;
    
    // Build WhatsApp message
    let message = `🛍️ *NUEVO PEDIDO - Casi como ella*\n\n`;
    message += `👤 *Cliente:*\n`;
    message += `Nombre: ${customer.nombre}\n`;
    message += `Email: ${customer.email}\n`;
    message += `Teléfono: ${customer.telefono}\n\n`;
    
    message += `📦 *Productos:*\n`;
    items.forEach((item, index) => {
        const variants = Object.entries(item.selectedOptions || {})
            .map(([k, v]) => `${k}: ${v}`)
            .join(', ');
        message += `${index + 1}. ${item.name}\n`;
        if (variants) message += `   ${variants}\n`;
        message += `   Cantidad: ${item.quantity} | Precio: ${formatPrice(item.price)}\n`;
    });
    
    message += `\n💰 *Total: ${formatPrice(total)}*\n\n`;
    
    message += `🚚 *Método de entrega:*\n`;
    if (shipping.method === 'domicilio') {
        message += `Envío a domicilio\n`;
        message += `${shipping.address.direccion}\n`;
        message += `${shipping.address.ciudad}, ${shipping.address.provincia}\n`;
        message += `CP: ${shipping.address.codigoPostal}\n`;
    } else {
        message += `Retiro en persona - Sunchales\n`;
    }
    
    message += `\n💳 *Método de pago:* ${payment.method === 'mercadopago' ? 'Mercado Pago' : 'Transferencia bancaria'}\n`;
    
    if (notes) {
        message += `\n📝 *Notas:* ${notes}\n`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
    
    // Clear cart
    cartManager.clearCart();
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showOrderSuccess();
}

// === SHOW ORDER SUCCESS ===
function showOrderSuccess() {
    const checkoutSection = document.querySelector('.checkout-section');
    if (checkoutSection) {
        checkoutSection.innerHTML = `
            <div class="container">
                <div class="order-success">
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h2>¡Pedido enviado con éxito!</h2>
                    <p>Tu pedido ha sido enviado por WhatsApp. En breve te contactaremos para coordinar el pago y la entrega.</p>
                    <p>También recibirás un email de confirmación a <strong>${document.getElementById('email')?.value}</strong></p>
                    
                    <div class="success-actions">
                        <a href="index.html" class="btn btn-primary">Volver al inicio</a>
                        <a href="productos.html" class="btn btn-outline">Seguir comprando</a>
                    </div>
                </div>
            </div>
        `;
        
        // Add success styling
        const style = document.createElement('style');
        style.textContent = `
            .order-success {
                text-align: center;
                padding: 4rem 2rem;
                max-width: 600px;
                margin: 0 auto;
            }
            .success-icon {
                font-size: 5rem;
                color: #66bb6a;
                margin-bottom: 2rem;
            }
            .success-actions {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-top: 2rem;
                flex-wrap: wrap;
            }
        `;
        document.head.appendChild(style);
    }
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    // Check if cart is empty
    const cart = cartManager.getCart();
    if (cart.length === 0 && window.location.pathname.includes('checkout')) {
        window.location.href = 'carrito.html';
        return;
    }
    
    // Render order summary
    renderOrderSummary();
    
    // Setup shipping method listener
    const shippingOptions = document.querySelectorAll('input[name="envio"]');
    shippingOptions.forEach(option => {
        option.addEventListener('change', handleShippingChange);
    });
    
    // Setup form submission
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', processCheckout);
    }
    
    // Initial shipping setup
    handleShippingChange();
});
