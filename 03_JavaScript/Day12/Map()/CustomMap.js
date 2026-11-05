let product = [
    {id: 1, name: "Tv", price: 500},
    {id: 2, name: "Phone", price: 300},
    {id: 3, name: "Ac", price: 250}
];

product.mapping = function(callback){
    let ans = [];
    for(let obj of this){
        ans.push(callback(obj));
    }
    return ans;
}

let arr = product.mapping((item) => ({id: item.id, name: item.name}));

console.log(arr);