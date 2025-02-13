
// import {suma }from './modules.js';
// console.log(suma(10, 5)); // 15

// import {restar} from './modules.js';
// console.log(restar(10, 5)); // 5

import {suma, restar} from './modules.js';
console.log(suma(10, 5)); // 15
console.log(restar(10, 5)); // 5

// Importar una función por defecto
import saludar from './modules.js';
console.log(saludar('Juan')); // Hola, Juan


// Importar todo con un alias
import * as operaciones from './modules.js';
console.log(operaciones.suma(10, 5)); // 15
