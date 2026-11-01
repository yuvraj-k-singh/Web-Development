function outer(){
    let a = 10;
    return function(){
        let a = 5;
        a++;
        console.log(a);
    };
}

let call = outer()();