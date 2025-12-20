type alpaNumaric = string | number

const add = (num1: alpaNumaric, num2: alpaNumaric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    }
    else {
       return num1.toString() + num2.toString();
    }
}

console.log(add("2","2"))






type normalUser = {
    name:string
}

type AdminUser = {
    name:string;
    role:"Admin"
}

const getUserInfo = (user: normalUser | AdminUser) => {
    if ("role" in user) {
        console.log(`this is ${user.name} and ${user.role}`)
    }
    else{
        console.log(`user: ${user.name}`)
    }
}


getUserInfo({name:"arman", role:"Admin"})