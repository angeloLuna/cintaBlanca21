// let array = []

// let alumno = {
//   nombre : "angelo",
//   edad : 27,
//   sensei: true,
//   batch : [4, 8,9, 21],
//   musica:{
//     favoritos :["muse", "Pate de fua"],
//     meh : ["mon laferte", "heroes del silencio", "31 minutos", "my chemical romance"]
//   },
//   direccion : {
//     calle: "agustin melgar",
//     numInt : 44,
//     colonia: "condesa"
//   }
// }
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let email = document.getElementById("email");
let boton = document.getElementById("boton");
let check = document.getElementById("check");
let formCinta = document.getElementById("formCinta")
let cinta = document.getElementById("cinta");

let alumno = {
  nombre: "",
  edad: 0,
  email: "",
}

console.log(alumno);

boton.addEventListener("click", ()=>{
  event.preventDefault()

  alumno.nombre = nombre.value;
  alumno.edad = edad.value;
  alumno.email = email.value;
  if (check.checked) {
    alumno.cinta = cinta.value
  }
  console.log(alumno);
})

check.addEventListener("click", ()=>{

  if (check.checked) {
    formCinta.style.display = "block"
  }else{
    formCinta.style.display = "none"
  }
  
})


















