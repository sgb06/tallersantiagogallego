function promedionotas(){
let nota1 = parseFloat(prompt ("ingrese nota #1"))
let nota2 = parseFloat(prompt ("ingrese nota #2"))
let nota3 = parseFloat(prompt ("ingrese nota #3"))

let notafinal = ((nota1+nota2)/2 + nota3) /2 

return notafinal
}
console.log(promedionotas())