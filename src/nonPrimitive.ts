// array , object 


let bazarList = ["eggs", "milk", "suger"];
 
bazarList.push("vagitable")


let mixedArr : (string|number)[] = ["eggs",12, "milk",14, "suger",15];

mixedArr.push(18)




let couple : [string, string] = ["husbend", "wife"]






// reference type 

const user : {
    readonly organization : "programming hero";
    firstName: string;
    middleName ? : string;
    lastName: string;
    isMarried: boolean;
} = {
    organization:"programming hero",
    firstName : "shakhawat",
    lastName: "arman",
    isMarried: true,
}

console.log(user)