// 1. Abstracción
// Consiste en ocultar los detalles internos de un objeto y mostrar solo lo que es necesario para interactuar con él.

// 2. Encapsulación
// Consiste en agrupar los atributos y métodos de un objeto en una sola entidad, evitando que se puedan modificar desde fuera.

/* Ejemplo de encapsulación en JavaScript */

// Clase CuentaBancaria
/*
class CuentaBancaria {
    #saldo; // Propiedad privada

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    // Método público para consultar saldo
    obtenerSaldo() {
        return `Saldo: $${this.#saldo}`;
    }

    // Método para depositar dinero (validando que sea positivo)
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            return `Depósito exitoso. Nuevo saldo: $${this.#saldo}`;
        }
        return "Monto inválido.";
    }
}


// Crear una cuenta bancaria
const miCuenta = new CuentaBancaria(500);
console.log(miCuenta.obtenerSaldo());  // Saldo: $500
console.log(miCuenta.depositar(200));  // Depósito exitoso. Nuevo saldo: $700
// console.log(miCuenta.#saldo);          // ❌ Error: No se puede acceder directamente

*/
// 3. Herencia
// Permite que una clase herede atributos y métodos de otra clase.
// class animal {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
        
//     }

//     hacerSonido() {
//         return "Habla";
//     }
// }

// 4. Polimorfismo
// Permite que un objeto pueda comportarse de diferentes formas, dependiendo del contexto.

class Ave {
    volar() {
        return "Estoy volando";
    }

}
class Pinguino extends Ave {
    volar() {
        return "No puedo volar, pero puedo nadar";
    }
}
const pajaro = new Ave();
const pinguino = new Pinguino();

console.log(pajaro.volar());    // Estoy volando
console.log(pinguino.volar());  // No puedo volar, pero puedo nadar