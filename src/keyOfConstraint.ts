type richPeople = {
    car: string;
    bike: string;
    cng: string;
}


type myVehicles1  = "car" | "bike" | "cng";
type myVehicles2 = keyof richPeople;


const myVehicles: myVehicles2 = "bike"
console.log(myVehicles)







