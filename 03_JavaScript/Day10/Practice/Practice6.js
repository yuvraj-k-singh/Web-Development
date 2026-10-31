console.log(typeof greet); //Undefined

var greet = function() {
    console.log("Hi"); //Hi
};

console.log(typeof greet());  //Undefined -> Check function return type so, there is no return type so undefined...