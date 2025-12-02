type A = null;
type B = undefined;



type C = A extends number ? true : B extends undefined ? true : false;



type richPeople = {
    car: string;
    truck: string;
    ship: string;
}


type checkVehicles <T> = T extends keyof richPeople ? true : false;

type hasBike = checkVehicles<"bus">  