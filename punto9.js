function valorcheque(){
  let dias = parseInt(prompt("ingrese dias de viaje"))
  let hotel = parseFloat(prompt("ingrese valor dia hotel"))
  let comida = parseFloat(prompt ("valor comida diaria"))
  
  let valortotal = (hotel + comida + 200) * dias

  return valortotal 
}
console.log(valorcheque())