class Person {
    getSleep(){
        console.log(`normal people sleep 8hours`)
    }
}

class Student extends Person {
    getSleep() {
        console.log(`student sleep 7 hours`)
    }
}

class Developer extends Person {
    getSleep(){
        console.log(`Developer sleep 6 hours`)
    }
}


const getSleepingHours = (param:Person) => {
    param.getSleep()
}


const person1 = new Person()
const person2 = new Student()
const person3 = new Developer()

getSleepingHours(person1)