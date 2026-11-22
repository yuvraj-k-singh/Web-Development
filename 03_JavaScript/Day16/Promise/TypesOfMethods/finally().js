let promise = new Promise((resolve, reject)=>{
    let error = true;

    if(!error){
        resolve("There is no error!");
    }else{
        reject("There is some error!");
    }
})

promise
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Operation completed successfully!");
    })