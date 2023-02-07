//console.log("Hola Mundo");

//Variables y constantes 

const nombre= "Leonardo";
const apellido= "Gonzalez";

let valorDado=5;
valorDado=4;

console.log(nombre, apellido, valorDado)

//////////////////SCOPE/// Trabajar con dos variables con el mismo "nombre"
if (true ){

    const nombre="Peter";
    console.log(nombre);
}

console.log(valorDado);