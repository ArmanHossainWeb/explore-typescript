type User = {
    name:string
    age:number
}

type Role = {
    role: "admin" | "user"
}


type UserWithRole = User & Role ;



const user1 : UserWithRole ={
    name:"arman",
    age:100,
    role: "admin}

const user2 : User ={
    name:"tanvir",
    age:102
}