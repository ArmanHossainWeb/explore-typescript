class Person {
    name:string
    constructor(name:string) {
        this.name = name
    }
    getSleep(numOfHours:number){
        console.log(`${this.name} ${numOfHours} ghumay`)
    }
}

class Student extends Person {
    constructor(name:string) {
        super(name)
    }
    doStudy(numOfHours:number){
        console.log(`${this.name} ${numOfHours} study`)
    }
}

class Teacher extends Person {
    constructor(name:string) {
        super(name)
    }
    takeClass(numOfHours:number){
        console.log(`${this.name} ${numOfHours} class koray`)
    }
}



const isStudent = (user:Person) => {
    return user instanceof Student 
}
const isTeacher = (user:Person) => {
    return  user instanceof Teacher
}

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10)
    }
    else if(isTeacher(user)){
        user.takeClass(5)
    }
    else{
        user.getSleep(15)
    }
}

const student1 = new Student("arman")
const teacher1 = new Teacher("shakhawat")

getUserInfo(student1)