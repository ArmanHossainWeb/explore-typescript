function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}

// console.log(addNormal(2, 4))


const addArraw = (num1: number, num2: number): number => {
    return num1 + num2
}

// console.log(addArraw(5,6))




const poorPeople = {
    name: "arman",
    balance: 1000,
    addBalance(newBalance: number): number {
        return this.balance + newBalance;
    }
}

// console.log(poorPeople.addBalance(1000))



const arr: number[] = [1,23,54];

const sqrArray = arr.map((elem: number) : number => elem * elem ) ;


// console.log(sqrArray)
