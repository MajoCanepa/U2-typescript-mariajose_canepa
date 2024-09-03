// Declara una variable de tipo any con un valor numérico y usa una aserción de tipo para tratarla como un string. Usa la propiedad “.length” en esta variable.

let valor: any = 220
let valorString: string = valor as string

console.log(valorString.length) // da como resultado 3