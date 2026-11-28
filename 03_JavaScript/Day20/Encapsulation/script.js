class Account{
    #balance; //-> Make it private

    constructor(balance = 0){
        this.#balance = balance;
    }

    deposite(amount){
        if(amount > 0){
            this.#balance += amount;
        }
    }

    getBalance(){
        console.log(`Balance: ${this.#balance}`);
    }
}

let u1 = new Account(500);
u1.deposite(1000);
u1.getBalance();