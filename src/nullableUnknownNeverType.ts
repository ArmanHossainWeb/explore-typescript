// nullable 
const getUser = (input:string | null) => {
    if(input) {
        console.log(`From DB: ${input}`)
    }
    else{
        console.log(`from Db : All User`)
    }
}


// getUser(null)



// unknown 

const discountPrice = (input:unknown)=> {
    if (typeof input === "number") {
        const dicountedPrice = input*0.1
        console.log(dicountedPrice)
    }
    else if (typeof input === "string"){
        const [dicountedPrice] = input.split(" ")
        console.log(Number(dicountedPrice)*0.1)
    }
    else{
        console.log("wrong input")
    }
}   


discountPrice(100)
discountPrice("900")
discountPrice(null)



// void 

function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}