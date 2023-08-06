function coutas(){
  let precioprodu = parseFloat(prompt("ingrese el valor del producto"))
  let cantcuotas = parseInt(prompt("ingrese cantidad de cuotas"))
  let recargo =0
  let preciototal
  switch (cantcuotas) {
    case 1: alert ("1 cuota de $ " + precioprodu + " 0% de recargo")
      break;
      case 2: recargo= precioprodu * 0.05 
      preciototal = precioprodu + recargo
      alert ("2 cuotas de $ " + preciototal /2 + " total $ " + preciototal + " 5% de recargo") 
      break;
      case 6: recargo= precioprodu * 0.4
      preciototal = precioprodu + recargo
      alert ("6 cuotas de $ " + preciototal /2 + " total $ " + preciototal + " 40% de recargo")

      break

    default:alert ("ERROR: cantidad de cuotas invalida ")
      break;
  }
  
}
coutas()
