type RichPeoplesVehicle = {
    car: string; //kye: value
    bike: string;
    cng: string;
}

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle1 = "bike";



type User = {
    id: number;
    name: string;
    address: {
        city: string
    };
}

const user : User = {
    id: 222,
    name:"arman",
    address: {
        city: "dhaka"
    }

}

const userId = user["id"];
const userName = user["name"];
const userAddess = user["address"];

// console.log({userId, userName, userAddess});


const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key]
} 

const result = getPropertyFromObj(user, "name");
console.log(result)






const product = {
    brand: "HP"
}

const result2 = getPropertyFromObj(product, "brand")
console.log(result2)







const student = {
    id: 123,
    class:"four"
}

const result3 = getPropertyFromObj(student , "id")
console.log(result3)
 









