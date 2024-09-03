// Modifica la clase Car para que la propiedad make sea privada. Añade un método getMake() que devuelva el valor de make.

export default class Car {
    private make: string

    constructor(make: string) {
        this.make = make;
    }
    
    drive() {
        console.log(`Driving a ${this.make}`);
    }

    getMake(): string {
        return this.make;
    }
}

const car = new Car('FORD-KA');
console.log(`La marca del auto es ${car.getMake()}`);  // La marca del auto es FORD-KA
car.drive() // Driving a FORD-KA