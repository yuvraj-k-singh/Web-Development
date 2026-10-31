var x = 10; 

function demo() {
    console.log(x);   //Undefined

    var x = 20;

    function show() {
        console.log(x);    //20
    }

    show();
    console.log(x);   //20
}

demo();
console.log(x);   //10