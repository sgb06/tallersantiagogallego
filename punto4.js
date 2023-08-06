function cobroparqueadero (){
let hora = parseFloat(prompt("ingrese cantidad de horas"))

let valorhora = 2000

let total = Math.ceil(hora) * valorhora

return total 

}

console.log(cobroparqueadero())