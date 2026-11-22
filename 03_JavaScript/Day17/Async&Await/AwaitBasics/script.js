async function greet(){
    return "Hello, World!";
}

const response = await greet();  //await -> used to unbox promise or wait till promise settle down....

console.log(response);
