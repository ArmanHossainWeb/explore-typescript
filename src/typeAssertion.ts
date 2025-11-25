let anything : any ;
anything = "hello";




const kgToGMConverter = (input:string | number) : string | number | undefined => {
    if( typeof input === "number"){
        return input * 1000;
    }
    else if (typeof input === "string"){
        const [value] = input.split(" ")
        return `converted outpur is ${Number(value)*1000}`
    }
}



const result1 = kgToGMConverter(2) as number;
console.log(result1)
const result2 = kgToGMConverter("2 kg") as string
console.log(result2)





const data:any = "arman"
const username = data as string
console.log(typeof username);