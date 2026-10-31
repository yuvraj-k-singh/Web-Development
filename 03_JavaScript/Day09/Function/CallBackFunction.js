function payment(amt, callback){
    console.log(`\nPayment ${amt} is under processing!`);
    console.log(`Payment has been received.`);
    callback();
    console.log(`Have a good day, order again.`);
}

function zomatoOrder(){
    console.log(`Zomato is preparing your order, have patience!`);
}

function swiggyOrder(){
    console.log(`Swiggy is preparing your order, have patience!`);
}

payment(500, zomatoOrder);
payment(250, swiggyOrder);