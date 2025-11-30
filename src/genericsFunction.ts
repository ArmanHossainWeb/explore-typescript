// Generics function 

// const createArrayWithString = (value: string) => [value];


// const createArrayWithNumber = (value: number) => [value];


// const createArrayWithObj = (value: { id: number, name: string }) => {
//     return [value];
// }


const createArrayWithGeneric = <T>(value: T) => [value]


const arrayString = createArrayWithGeneric("arman")
const arrayNumber = createArrayWithGeneric(123)
const arrayObj = createArrayWithGeneric({
    id: 123,
    name: "arman"
})

// console.log(arrayString)
// console.log(arrayNumber)
// console.log(arrayObj)






// tuple 
const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2]

//  console.log(createArrayTupleWithGeneric("Arman", 2222))
//  console.log(createArrayTupleWithGeneric({name:"arman",age:222}, 55))






const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        courseName: "next level web development",
        ...studentInfo
    }
}


const student1 = {
    name: "shakhawat Hossain",
    age: 20,
    hasCar: true,
    marrid: false
}
const student2 = {
    name: "mahin ahmed",
    age: 15,
    hasBike: true,
    job: true
}

const result1 = addStudentToCourse(student1);
console.log(result1)
const result2 = addStudentToCourse(student2);
console.log(result2);


