// Funciones constructoras y clases en JavaScript
/* 
Sirven para crear objetos con propiedades y métodos reutilizables.
 */

// 1. Función constructora
// Se define una función que actúa como un molde para crear objetos. Era una forma antigua de crear objetos en JavaScript.
// Se nombra con mayuscula inicial y usa this para asignar propiedades.

//  Ejemplo de función constructora 

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.saludar = function() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    };
}
// Crear un objeto a partir de la función constructora

const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Ana", 25);

console.log(persona1.saludar());  // Hola, soy Juan y tengo 30 años.
console.log(persona2.saludar());  // Hola, soy Ana y tengo 25 años.