type User = {
    name:string
    age:number
}

interface Iuser {
    name: string,
    age: number
}

type Role = {
    role: "admin" | "user"
}

type UserWithRole = User & Role ;



interface IUserWithRole extends Iuser {
    role: "admin" | "user";
}



const user1 :IUserWithRole = {
    name: "arman",
    age: 12,
    role: 'admin'
}
const user2 :Iuser = {
    name: "Hossain",
    age: 15,
}


type Friends = string[];


interface IFriends {
    [index: number] : string;
}

const friends : IFriends = ["A", "B", "C"];
 


