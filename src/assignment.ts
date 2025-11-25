 
//  problem 1
 
 const formatValue = (input: string|number|boolean) => {
    if(typeof input === "string"){
        const uppercase = input.toUpperCase();
       return uppercase;
    }
    else if (typeof input === "number") {
        const NumberInput = input*10;
        return NumberInput
    }
    else {
        return !input;
    }
 }  


//  console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));



// problem 2
const getLength = (input:string|any[]) => {
    if(typeof input === "string"){
        const result = input.length;
        return result;
    }
    else if (Array.isArray(input)){
        const result = input.length;
        return result;
    }
}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));