let map = new Map([
    ["name", "Yuvraj"],
    ["age", 21],
    ["course", "BTECH"],
    ["branch", "CSE"],
    [[10,20], "arr"],
    [{name: "Mohit", age: 21}, "object"],
    [true, "True"]
]);

console.log(`Map elements: `);
console.log(map);

//Iterate over map
console.log(`\nIterate map elements: `);
for(let nums of map){
    console.log(nums);
}

// for(let nums of map){
//     for(let x of nums){
//         console.log(x);
//     }
//     console.log();
// }