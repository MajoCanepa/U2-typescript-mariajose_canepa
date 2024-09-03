// Define una clase Car que tenga una propiedad make (marca del coche) de tipo string y un método drive() que imprima un mensaje en la consola diciendo "Driving a [make]".


class Car {
    public make: string = ''
    drive() {
        console.log(`Driving a ${this.make}`);
    }
}

// se crea una instancia de la clase Car
const car = new Car();

// se inicializa la propiedad make
car.make = 'FORD-KA';

// se llama al método drive
car.drive(); // Driving a FORD-KA