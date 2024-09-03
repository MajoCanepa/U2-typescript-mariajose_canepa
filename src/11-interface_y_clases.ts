// Crea una interfaz Shape que tenga un método area() que devuelve un número. Luego, crea una clase Circle que implemente esta interfaz y calcule el área de un círculo.

interface Shape {
  area(): number;
}

class Circle implements Shape {
  
  constructor(private radio: number) {}

  area(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }
}

// ejemplo
const circle = new Circle(10);
console.log(circle.area()); // resultado en consola: 314.1592653589793