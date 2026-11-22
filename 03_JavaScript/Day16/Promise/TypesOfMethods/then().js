let promise = new Promise((resolve, reject)=>{
    let age = 18;

    if(age >= 18){
        resolve("Eligible");
    }else{
        reject("Not Eligible");
    }
})


promise
    //then() is used to handle success or completion of operations or tasks....
    .then((response)=>{
        console.log(response);
    })
