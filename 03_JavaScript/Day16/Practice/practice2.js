Promise.resolve(10)
    .then(value => value + 5)
    .then(value => value * 2)
    .then(value => console.log(value));