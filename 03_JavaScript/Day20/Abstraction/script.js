class Account{
    #balance; //-> Make it private

    constructor(balance = 0){
        this.#balance = balance;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`\n${amount} has been deposited sucessfully!`);
            this.#getBalance();
        }
    }

    withdraw(amount){
        if(amount > 0 && amount < this.#balance){
            this.#balance -= amount;
            console.log(`\n${amount} has been withdrawed sucessfully!`);
            this.#getBalance();
        }else{
            console.log(`\nInsuciffent balance!`);
        }
    }

    #getBalance(){
        console.log(`Updated Balance: ${this.#balance}`);
    }
}

let u1 = new Account(500);
u1.deposit(1000);
//u1.withdraw(1500);
u1.withdraw(680);
u1.withdraw(250);