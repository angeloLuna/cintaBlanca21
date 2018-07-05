// let nombre = prompt("ingresa tu nombre");



// for (let i = 0;i < nombre.length; i++){
//   console.log( nombre[i] )
// }



// // for (let i = 0; i < 100 ; i++ ){

// // }


let palabra = prompt("palabra");
let arreglo = [];
let resultado = "";

for (let i = 0; i < palabra.length; i++){

  if (i % 2 === 0) {
    arreglo[i] = palabra[i].toLowerCase();  
  }else{
    arreglo[i] = palabra[i].toUpperCase()  
  }
  resultado += arreglo[i]

}
console.log(resultado)

























