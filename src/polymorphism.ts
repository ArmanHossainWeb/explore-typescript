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