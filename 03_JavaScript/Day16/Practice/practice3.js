Promise.resolve("A")
    .then(value => {
        console.log(value);   //A
        return "B";
    })
    .then(value => {
        console.log(value);  //B
        throw new Error("Error");
    })
    .catch(error => {
        console.log(error.message);   //Error
        return "C";
    })
    .then(value => console.log(value));   //C