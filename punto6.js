function hipotenusatrian(){
  let lado1 = prompt("ingrese valor lado 1")
  let lado2 = prompt("ingrese valor lado 2")

  let hipotenusa = Math.sqrt((lado1*lado1)+(lado2*lado2))

  return hipotenusa
}

console.log(hipotenusatrian())