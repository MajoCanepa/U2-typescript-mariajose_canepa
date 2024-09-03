// Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional batteryLife (vida de la batería) de tipo número. Añade un método charge() que imprima un mensaje diciendo que el coche se está  cargando.

import Car from './09-clase_prop_privadas'

class ElectricCar extends Car {
    batteryLife: number

    constructor(make: string, batteryLife: number) {
        super(make);
        this.batteryLife = batteryLife;
    }

    charge() {
        console.log('El coche se está cargando');
    }
}

const electricCar = new ElectricCar('TESLA', 100);
electricCar.drive(); // Driving a TESLA
electricCar.charge(); // El coche se está cargando