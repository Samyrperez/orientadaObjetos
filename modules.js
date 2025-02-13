// Modules en javascript
// ¿Que es un modulo?
// Un modulo es un archivo que contiene código JavaScript que se puede reutilizar en otras partes de la aplicación.
// ¿Porque usar modulos?
// - Facilita la organización del código.
// - Permite reutilizar código.
// - Evita la contaminación del espacio global.
// - Permite importar y exportar código.
// - Mejora la legibilidad del código.

// Como trabajar con modulos en JavaScript

// para llamar un modulo en JavaScript se utiliza la palabra reservada import seguida del nombre del modulo y la ruta del archivo.

// Como trabajar modulos en JavaScript

// USamos sport para exportar funciones, variables, clases, etc. de un modulo a otro.
// exportación individual
export function suma(a, b) {
    return a + b;
}

// Creamos otro archivo js para importarlo llamado app.js

export function restar(a, b) {
    return a - b;
}


// Exportación por defecto
// En un modulo solo se puede exportar un valor por defecto, clase o función principal.
// Solo se puede hacer una exportación por defecto por modulo(archivo).

export default function saludar(nombre) {
    return `Hola, ${nombre}`;
};
