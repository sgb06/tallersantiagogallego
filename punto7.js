function preciofinal (){
  let precioart = parseFloat(prompt ("ingrese precio"))
  let valordescuento = precioart * 0.2
  let preciodesc = precioart - valordescuento
  let valoriva = preciodesc * 0.15 
  let preciofinal = valoriva + preciodesc

  return preciofinal
}
console.log(preciofinal())