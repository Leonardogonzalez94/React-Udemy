

//console.log("???");

const nombre= "Leonardo";
const apellido= "Gonzalez";


//const nombreCompleto= nombre + ''+ apellido;  //CONCATENACIÓN
const nombreCompleto= `${nombre} ${apellido}`;  //codigo JS, otra manera de concatenar

console.log(nombreCompleto);
function getSaludo(nombre){
    return "hola " + nombre

}
console.log(`Este es un texto: ${getSaludo(nombre)}`);