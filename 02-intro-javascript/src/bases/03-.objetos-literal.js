const persona = {
  nombre: "Tony",
  apellido: "Stark",
   edad: 45,
   direccion:{
    Ciudad: "New York",
    zip: 55321321,
    lat: 14.3232,
    lng: 34.9233321
   }

};

//console.table({
 //   persona
//});

                                //variable dentro de corchetes es{es un objeto}
const persona2={ ...persona};  //clon del objeto (...persona)
persona2.nombre="Peter";

console.log(persona);
console.log(persona2);