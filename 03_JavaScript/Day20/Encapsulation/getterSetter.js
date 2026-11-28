class Account{
    #balance;
    
    set balance(amount){
        if(amount > 0){
            this.#balance = amount;
        }
    }

    get balance(){
        return this.#balance;
    }
}

let u1 = new Account();
u1.balance = 1000;
console.log(u1.balance);