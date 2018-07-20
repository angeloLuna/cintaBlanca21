let boton = document.getElementById("boton");
let a = document.getElementById("input1")
let b = document.getElementById("input2")
let res = document.getElementById("res");




boton.addEventListener("click", ()=>{
  validarPar(a, b)
  suma(32, 100)
});
Number(data)

const validarPar = (x, y)=>{
  let r = x.value * y.value;
  if (r % 2 === 0) {
    res.innerHTML = "El resultado es: " + r + " Es un número par"
  } else{
    res.innerHTML = "El resultado es: " + r + " Es un número impar"
  }
}

