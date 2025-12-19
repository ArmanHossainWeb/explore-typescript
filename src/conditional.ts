type A = null;
type B = undefined;
type C = A extends null ? true : false;

type vehicle = {
    bike: string;
    car: string;
    ship: string;
};
type checkVehicle<T> = T extends keyof vehicle ? true : false;
type hasBike = checkVehicle<"cycle">;