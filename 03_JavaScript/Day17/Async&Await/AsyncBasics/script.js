async function greet(){
    return "Hello, World!";
}

const response = greet();
console.log(response);  //return promise wrap with return value.

//Handle Promise
response.then((data)=>{
    console.log(data);
})