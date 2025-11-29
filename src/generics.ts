type GenericArray<T> = Array<T>;


// 1. String Array
const distinctWords: GenericArray<string> = ["Hello", "World", "TypeScript"];

// 2. Number Array
const fibonacci: GenericArray<number> = [1, 1, 2, 3, 5, 8, 13];

// 3. Boolean Array
const activeSwitches: GenericArray<boolean> = [true, false, true, true];






type result<X,Y> = [X,Y];

const result1 : result<number,number> = [20,30];
const result2 : result<string,string> = ["200","30"];










const userList : GenericArray<{name:string, age: number}> =[
    {
        name:"arman",
        age:20
    },
    {
        name:"hossain",
        age:25
    }
]





