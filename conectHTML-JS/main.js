let nombre = prompt("nombre")
let apellido = prompt("apellido")
let descripcion = prompt("descripción")

let cardNombre = document.getElementById("nombre");
let cardApellido = document.getElementById("apellido");
let cardDescripcion = document.getElementById("descripcion");

cardNombre.innerHTML = nombre;
cardApellido.innerHTML = apellido;
cardDescripcion.innerHTML = descripcion;

let nombre = document.getElementById("nombre").value;

