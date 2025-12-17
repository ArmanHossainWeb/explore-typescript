
// generics  

type Generics<T> = Array<T>;


const friends: Generics<string> = ["arman", "hossain", "shakhawat"];

const rollNumber: Generics<number> = [8, 9, 7];

const isEligable: Generics<boolean> = [true, false, false, true];

const UserList: Generics<{ name: string, age: number }> = [
    {
        name: "arman",
        age: 20
    },
    {
        name: "hossain",
        age: 50
    }
]



type coordinates<X, Y> = [X, Y];

const coordinates1: coordinates<number, number> = [20, 40];
const coordinates2: coordinates<string, string> = ["20", "40"];





