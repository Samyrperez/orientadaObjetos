// Funciones constructoras y clases en JavaScript
/* 
Sirven para crear objetos con propiedades y métodos reutilizables.
 */

// 1. Función constructora
// Se define una función que actúa como un molde para crear objetos. Era una forma antigua de crear objetos en JavaScript.
// Se nombra con mayuscula inicial y usa this para asignar propiedades.

//  Ejemplo de función constructora 

// function Persona(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;

//     this.saludar = function() {
//         return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
//     };
// }
// // Crear un objeto a partir de la función constructora

// const persona1 = new Persona("Juan", 30);
// const persona2 = new Persona("Ana", 25);

// console.log(persona1.saludar());  // Hola, soy Juan y tengo 30 años.
// console.log(persona2.saludar());  // Hola, soy Ana y tengo 25 años.



// 2. Clases
// Metodo de construccion mas actual y recomendado para crear objetos en JavaScript.
/*
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    };
}
// Crear un objeto a partir de la función constructora

const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Ana", 25);

console.log(persona1.saludar());  // Hola, soy Juan y tengo 30 años.
console.log(persona2.saludar());  // Hola, soy Ana y tengo 25 años.

*/

class Operaciones {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    resultado(){
        return `
        El resultado de la suma es: ${this.num1 + this.num2}
        El resultado de la resta es: ${this.num1 - this.num2}\n
        El resultado de la multipliación es: ${this.num1 * this.num2}\n
        El resultado de la división es: ${this.num1 / this.num2}`;
    }
}

const operaciones = new Operaciones(10, 5);

console.log(operaciones.resultado());
