// let boton = document.getElementById("boton");
// let n1 = document.getElementById("n1");
// let n2 = document.getElementById("n2");
// let res = document.getElementById("res");

// let total = 0;



// boton.addEventListener("click", ()=>{
//   total = Number(n1.value) + Number(n2.value);
//   res.innerHTML = total;
// });

let titulo = document.getElementById("titulo");
let boton = document.getElementById("boton");
let tituloCard = document.getElementById("tituloCard")

boton.addEventListener("click", ()=>{
  tituloCard.innerHTML = titulo.value;
})

