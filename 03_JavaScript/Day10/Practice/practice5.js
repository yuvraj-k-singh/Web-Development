let a = 10;

function test() {
    console.log(a);  //Reference Error -> block scope variable overshadow GSV
    let a = 20;
}

test();