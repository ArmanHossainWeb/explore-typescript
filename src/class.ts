class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name
        // this.species = species
        // this.sound = sound

    }

    makesound() {
        return (`${this.name} is making sound: ${this.sound}`)
    }

}


const dog = new Animal("dogesh", "dog", "gow gow")
console.log(dog.name)
console.log(dog.makesound())




// class person {
//     constructor(public name: string, public age: number) {

//     }
//     introduce() {
//         return (`Hi, my name is ${this.name} and i am ${this.age} years old`)
//     }
// }


// const p1 = new Person("Arman", 22);
// console.log(p1.introduce());




