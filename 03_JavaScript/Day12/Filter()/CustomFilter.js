let arr = [10,5,6,8,9,55,55,6,64,45];

console.log(`Original Array: `);
console.log(arr);

//Custom Filter method for only arr Array->

arr.filtering = function(compare){
    let ans = [];
    for(let x of this){
        if(compare(x)){
            ans.push(x);
        }
    }
    return ans;
}

let output = arr.filtering((x) => x % 5 === 0);
console.log(`Output Array: `);
console.log(output);