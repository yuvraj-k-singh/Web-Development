function outer() {
    let a = 0;
    return function(){
        a++;
        console.log(a);
    }
}


let call = outer();
call(); //1
call(); //2