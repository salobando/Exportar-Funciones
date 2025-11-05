import { numeroPi,porcentajeIva,dias } from "./constantes.js";

console.log("El área del círculo es: ", numeroPi()*Math.pow(5,2));
let total = 100+(100*porcentajeIva());
console.log("El precio del producto con IVA: ",total);
console.log("El tercer día es: ",dias()[2]);
