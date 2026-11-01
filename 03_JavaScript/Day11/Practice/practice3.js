function outer(val){
    function inner(x){
        return x*val;
    }
    return inner;
}

let call = outer(5)(2);
console.log(call);