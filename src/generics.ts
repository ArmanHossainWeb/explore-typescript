
// generics  

type Generics<T> = Array<T>;

const friends: Generics<string> = ["arman", "hossain", "shakhawat"];
const rollNumber: Generics<number> = [8, 9, 7];
const isEligable: Generics<boolean> = [true, false, false, true];


type userType = { name: string, age: number }
const UserList: Generics<userType> = [
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





type User<X,Y> = [X,Y]
const user1 : User<string, number> =  ["arman", 25]





