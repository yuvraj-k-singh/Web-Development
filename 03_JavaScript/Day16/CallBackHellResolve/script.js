let user = {
    name: "Yuvraj",
    bank: "SBI",
    balance: 1251.25,
    branch: "Indore"
};

function createAccount(user){
    console.log(`User account creation is in progress...`);
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`User account has been created...`);
            console.log(`User name: ${user.name}`);
            resolve(user);
        }, 2000)
    })
}

function loginAccount(user){
    console.log(`User account login is in progress...`);
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`User account has been logined...`);
            user.id = 12356;
            console.log(`User ID: ${user.id}`);
            console.log(`User Branch: ${user.branch}`);
            resolve(user);
        }, 3000)
    })
}

function DepositeAccount(user){
    console.log(`User amount $${1500} deposite is in progress!`);
    
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log(`User amount $${1500} deposite has been deposited!`);
            user.balance += 1500;
            console.log(`User balance: ${user.balance}`);
            resolve(user);
        }, 3000)
    })
}

function logoutAccount(){
    console.log(`User account has been logout!`);
}

createAccount(user)
    .then((user) => loginAccount(user))
    .then((user) => DepositeAccount(user))
    .then(() => logoutAccount())