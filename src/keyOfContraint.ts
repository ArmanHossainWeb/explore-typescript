function addNormal(num1:number, num2: number) : number {
    return num1 + num2
}



const addArrow = (num1: number, num2 : number) :number => num1 + num2 ;





addNormal(2, 3)
addArrow(3,5)




const poorUser = {
    name:"arman",
    balance: 0,
    addBalance(value:number) {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}



console.log(poorUser.addBalance(10000000))