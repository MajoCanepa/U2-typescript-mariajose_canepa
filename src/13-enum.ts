// Declara un enum Color con los valores "Red", "Green", y "Blue". Crea una función que tome un argumento de tipo Color y devuelva un mensaje con el color.

import { CLIENT_RENEG_LIMIT } from "tls";

enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue'
}

function mostrarColor(color: Color): string {
  return `El color es ${color}`;
}

console.log(mostrarColor(Color.Red)); // resultado en consola: El color es Red


