var x = 100;

function test() {
    console.log(x);  //undefined -> block scope variable overshadow GSV
    var x = 200;     
    console.log(x);  //200
}

test();
console.log(x);  //100