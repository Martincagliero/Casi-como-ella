// ===================================
// PERFORMANCE MONITOR (opcional)
// Ayuda a detectar problemas
// ===================================

// Solo en desarrollo - comentar en producción
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🚀 Casi como ella - Modo desarrollo');
    
    // Monitor de errores
    window.addEventListener('error', (e) => {
        console.error('❌ Error detectado:', e.message, e.filename, e.lineno);
    });
    
    // Monitor de performance
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('⚡ Performance:');
            console.log('  - DOM cargado:', Math.round(perfData.domContentLoadedEventEnd), 'ms');
            console.log('  - Página completa:', Math.round(perfData.loadEventEnd), 'ms');
        }, 0);
    });
}

// Prevenir múltiples ejecuciones del mismo código
let isProcessing = false;

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Exportar para uso global
window.debounce = debounce;
