class BankAccount {
    public readonly userId: number;
    public userName: string;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    private addBalance(balance:number){
        this.userBalance = this.userBalance + balance
    }
}


class StudenBankAccount extends BankAccount {
    test() {
        this.userBalance
    }
}

const armanVaiAccount = new BankAccount(222, "arman", 200)
console.log(armanVaiAccount)