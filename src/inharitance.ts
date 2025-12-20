class Teacher {
    name:string;
    age: number;
    address: string;
    designation : string;

    constructor(name: string, age: number, address:string, designation:string) {
        this.name = name;
        this.age  = age;
        this.address = address;
        this.designation = designation;
    }
    getsleep(numberOfHours: number) {
        console.log(`${this.name} ${numberOfHours} gonta ghumai`)
    }
    takeClass () {
        
    }

}

const Student1 = new Student("arman", 18, "bangladeshi ")
Student1.getsleep(15)