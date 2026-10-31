console.log(a); //undefined

var a = 10;

console.log(a); //10

var add = function(a){
    console.log(b); //undefined
    var b = 10;
    return a+b;
}

console.log(add(a)); //20