import { numeroPi,porcentajeIva,dias } from "./constantes.js";
import { roles } from "./usuariosConstantes.js";
import { crearUsuarios } from "./usuarios.js";

//!Ejercicio 1. Archivo constantes  
console.log("Ejercicio 1");
console.log("El área del círculo es: ", numeroPi()*Math.pow(5,2));
let total = 100+(100*porcentajeIva());
console.log("El precio del producto con IVA: ",total);
console.log("El tercer día es: ",dias()[2]);

//!Ejercicio 4. Gestión de usuarios
console.log("Ejercicio 4");
console.log("Información usuario 1:", crearUsuarios("Pedro",roles.admin));
console.log("Información usuario 2:", crearUsuarios("Carlos",roles.cliente));


