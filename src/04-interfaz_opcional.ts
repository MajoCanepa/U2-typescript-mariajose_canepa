export interface Person {
    firstName: string;
    lastName?: string;
}

let person: Person = {
    firstName: "Maria Jose"
};

console.log(person); // { firstName: 'Maria Jose' }
