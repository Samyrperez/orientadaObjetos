// ¿Que es JSON y para que sirve?
// JSON (JavaScript Object Notation) es un formato de intercambio de datos que se utiliza para transmitir información entre servidores y clientes. Es una forma de almacenar y transmitir datos en formato de texto, que es fácil de leer y escribir para los humanos, y fácil de interpretar y generar para las máquinas.

// caracacteristicas de JSON:
// - Es independiente del lenguaje de programación.
// - Es fácil de leer y escribir.
// - Es ligero y rápido.
// - Es un formato de texto que se puede comprimir.
// - Puede ser utilizado con AJAX para enviar y recibir datos.
// - Estrucutra de datos basada en pares clave-valor.

// Estructura de un objeto JSON:
/*
{
    "nombre": "Juan",
    "edad": 30,
    "casado": false,
    "hijos": null,
    "mascotas": [
        "perro",
        "gato"
    ],
    "automovil": {
        "marca": "Toyota",
        "modelo": "Corolla"
    }
}
*/
// para convertir un objeto JSON a un objeto JavaScript se utiliza el método JSON.parse() y para convertir un objeto JavaScript a un objeto JSON se utiliza el método JSON.stringify().

// Ejemplo de JSON.stringify():

const persona = {
    nombre: "Juan",
    edad: 30,
    casado: false,
    hijos: null,
    mascotas: ["perro", "gato"],
    automovil: {
        marca: "Toyota",
        modelo: "Corolla"
    }
};

// convertir a JSON
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);

// convertir de json a objeto javascript
const personaObjeto = JSON.parse(personaJSON);
console.log(personaObjeto.nombre);

// JSON es muy utilizado en aplicaciones web para enviar y recibir datos entre el cliente y el servidor, ya que es un formato ligero y fácil de interpretar.

// Aclaraciones de uso:
// - Para respuestas fecth: Usamos response.json() para convertir un objeto json a js
// Explicacion:
/* 
🔹 fetch() devuelve un objeto Response.
🔹 response.json() convierte el cuerpo de la respuesta en un objeto JavaScript.
🔹 Solo se usa con fetch() y otras funciones que devuelven un objeto Response.
*/

//  Para strings en formato JSON
// Si ya tienes un JSON en formato de texto, usas JSON.parse() para convertirlo en un objeto JavaScript.
/*
🔹 Se usa cuando tienes un string JSON.
🔹 No funciona directamente con fetch(), porque fetch() devuelve un objeto Response, no un string JSON.
*/

/* Ejemplo INCORRECTO con JSON.parse() y fetch()

async function obtenerDatos() {
    let response = await fetch("https://rickandmortyapi.com/api/character/1");
    let data = JSON.parse(response); // ❌ Error: response no es un string
    console.log(data);
}

obtenerDatos();

🔴 Falla porque response no es un string JSON, sino un objeto Response.

Ejemplo CORRECTO con JSON.parse() 
Imagina que recibes datos de localStorage (que almacena en formato string):

const datosJSON = '{"nombre": "Morty", "especie": "Humano"}';
const datosObjeto = JSON.parse(datosJSON);
console.log(datosObjeto.nombre); // "Morty"

*/


