function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;  //It return reference of inner(), which means variable that hold can make function call...
}

let call1 = outer();  //call -> inner reference
let call2 = outer();  //here each varibale contain seperate reference of inner fucntion
call1();    //1
call1();    //2
call2();    //1 -> seperate copy