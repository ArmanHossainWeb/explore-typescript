class parant {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getsleep(numOfHours: number) {
        console.log(`${this.name} ${numOfHours} eto gonta ghonta ghumay`)
    }
}

class student extends parant {
    roll: number
    constructor(name: string, age: number, address: string, roll: number) {
        super(name, age, address)
        this.roll = roll
    }
}


const student1 = new student("arman", 14, "bangaldeshi ", 14)
student1.getsleep(15)









class Teacher extends parant {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation;
    }


    takeClass(numOfHours: number) {
        console.log(`${this.name} ${numOfHours} gonta class ney`)
    }
}

const teacher1 = new Teacher("teacherX", 15, "bangaldeshi", "sir")
teacher1.takeClass(15)








