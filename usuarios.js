//!Ejercicio 4. Gestión de usuarios

export function crearUsuarios(nombre,rol){
    const fechaHoy = new Date().toLocaleDateString();
    const objeto = {
    nombre: nombre,
    rol: rol,
    fecha: fechaHoy
    };
    return objeto;
}
 