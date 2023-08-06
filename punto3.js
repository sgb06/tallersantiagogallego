function edadempleados(){
  let anionaci = parseInt(prompt("ingrese su año de nacimiento"))
  let fecha = new Date()

  let edad = fecha.getFullYear() - anionaci 

  return edad 
}
console.log(edadempleados())