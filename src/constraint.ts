// // constrain 

// type student = { id: number; name: string }

// const addStudentToCourse = <T extends student>(studentInfo: T) => {
//     return {
//         courseName: "next level web development",
//         ...studentInfo
//     }
// }


// const student1 = {
//     id: 456,
//     name: "shakhawat Hossain",
//     age: 20,
//     hasCar: true,
//     marrid: false
// }
// const student2 = {
//     id: 1235,
//     name: "mahin ahmed",
//     age: 15,
//     hasBike: true,
//     job: true
// }
// const student3 = {
//     id: 548,
//     name: "hasan ahmed", 
//     age: 15,
//     hadwatch: true,
//     hasBike: true,
//     job: true
// }


// const result1 = addStudentToCourse(student1);
// console.log(result1);
// const result2 = addStudentToCourse(student2);
// console.log(result2);
// const result3 = addStudentToCourse(student3);
// console.log(result3);




const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        ...studentInfo
    }
}

const student1 = {
    name: "arman",
    age: 25
}


const result = addStudentToCourse(student1)
console.log(result)








