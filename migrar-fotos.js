/**
 * SCRIPT DE MIGRACIÓN DE FOTOS
 * 
 * Este script te ayuda a organizar tus fotos actuales
 * desde "fotos casi como ella" a las carpetas de galería.
 * 
 * USO:
 * 1. Clasifica manualmente tus fotos (mirándolas una por una)
 * 2. Actualiza los arrays de abajo con los nombres de archivo
 * 3. Ejecuta este script en Node.js: node migrar-fotos.js
 * 
 * NOTA: Este es un script de ayuda visual, no ejecuta movimientos automáticos.
 * Te genera los comandos que debes ejecutar para organizar tus fotos.
 */

// ========================================
// PASO 1: CLASIFICA TUS FOTOS AQUÍ
// ========================================

const clasificacion = {
    cartucheras: [
        // Ejemplo: 'WhatsApp Image 2026-02-06 at 20.15.28.jpeg',
        // Agrega aquí los nombres de las fotos que son CARTUCHERAS
    ],
    
    fundas: [
        // Agrega aquí los nombres de las fotos que son FUNDAS
    ],
    
    estuches: [
        // Agrega aquí los nombres de las fotos que son ESTUCHES
    ],
    
    bolsos: [
        // Agrega aquí los nombres de las fotos que son BOLSOS
    ]
};

// ========================================
// PASO 2: EJECUTA ESTE SCRIPT
// ========================================

function generarComandosMigracion() {
    console.log('='.repeat(60));
    console.log('COMANDOS DE MIGRACIÓN - Copia y ejecuta en PowerShell');
    console.log('='.repeat(60));
    console.log('');
    
    let totalFotos = 0;
    const galeriaJson = {
        categorias: {
            cartucheras: { nombre: "Cartucheras", descripcion: "Cartucheras artesanales únicas", imagenes: [] },
            fundas: { nombre: "Fundas", descripcion: "Fundas protectoras con estilo", imagenes: [] },
            estuches: { nombre: "Estuches", descripcion: "Estuches versátiles para organizar", imagenes: [] },
            bolsos: { nombre: "Bolsos", descripcion: "Bolsos artesanales que cuentan una historia", imagenes: [] }
        },
        configuracion: {
            lazyLoading: true,
            gridColumns: { mobile: 1, tablet: 2, desktop: 3 },
            animaciones: true
        }
    };

    Object.entries(clasificacion).forEach(([categoria, fotos]) => {
        if (fotos.length === 0) return;

        console.log(`# ${categoria.toUpperCase()} (${fotos.length} fotos)`);
        console.log('');

        fotos.forEach((foto, index) => {
            totalFotos++;
            
            // Generar nuevo nombre (sanitizado)
            const nuevoNombre = generarNombreDescriptivo(categoria, index + 1);
            
            // Comando PowerShell para mover
            console.log(`Move-Item "fotos casi como ella\\${foto}" "images\\gallery\\${categoria}\\${nuevoNombre}"`);
            
            // Agregar al JSON
            galeriaJson.categorias[categoria].imagenes.push({
                src: `images/gallery/${categoria}/${nuevoNombre}`,
                alt: `${capitalize(categoria)} artesanal ${index + 1}`,
                titulo: `${capitalize(categoria)} ${index + 1}`
            });
        });

        console.log('');
    });

    console.log('='.repeat(60));
    console.log(`Total de fotos a migrar: ${totalFotos}`);
    console.log('='.repeat(60));
    console.log('');
    console.log('ACTUALIZACIÓN DE GALERIA.JSON:');
    console.log('Copia este contenido a data/galeria.json:');
    console.log('');
    console.log(JSON.stringify(galeriaJson, null, 2));
}

function generarNombreDescriptivo(categoria, numero) {
    // Generar nombre descriptivo basado en categoría
    const prefijo = categoria.substring(0, 4); // "cart", "fund", "estu", "bols"
    return `${prefijo}-${numero.toString().padStart(2, '0')}.jpg`;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ========================================
// PASO 3: REVISIÓN DE FOTOS ACTUALES
// ========================================

console.log('');
console.log('TUTORIAL DE CLASIFICACIÓN:');
console.log('');
console.log('1. Abre la carpeta "fotos casi como ella"');
console.log('2. Mira cada foto y determina su categoría');
console.log('3. Edita este archivo y agrega los nombres en los arrays de arriba');
console.log('4. Ejecuta: node migrar-fotos.js');
console.log('5. Copia los comandos generados y ejecútalos en PowerShell');
console.log('');
console.log('FOTOS DISPONIBLES (35 total):');
console.log('');

const fotosActuales = [
    'WhatsApp Image 2026-02-06 at 20.15.28.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.34 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.34 (2).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.34 (3).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.34.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.37 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.37.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.38 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.38 (2).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.38.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.39 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.39 (2).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.39.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.43 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.43 (2).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.43.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.44.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.50 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.50 (2).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.50.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.51 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.51.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.52 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.52.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.53 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.53.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.54 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.54 (2).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.54.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.55 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.55 (2).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.55.jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.56 (1).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.56 (2).jpeg',
    'WhatsApp Image 2026-02-06 at 20.15.56.jpeg'
];

fotosActuales.forEach((foto, i) => {
    console.log(`${(i + 1).toString().padStart(2, '0')}. ${foto}`);
});

console.log('');
console.log('='.repeat(60));
console.log('');

// Ejecutar generación de comandos
if (Object.values(clasificacion).some(arr => arr.length > 0)) {
    generarComandosMigracion();
} else {
    console.log('⚠️  Aún no has clasificado ninguna foto.');
    console.log('Edita este archivo y agrega nombres en los arrays.');
}
