// Generic Function
const createArrayWithGeneric = <T>(value: T): T[] => {
    return [value];
};

const numberArray = createArrayWithGeneric(123); // number[]
const stringArray = createArrayWithGeneric("hello"); // string[]
const booleanArray = createArrayWithGeneric<boolean>(true); // boolean[]

// Generic Tuple 
const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => {
   return [param1, param2];
};
const tuple1 = createArrayTupleWithGeneric("Laptop", false);