let str = "Yuvraj kmar Singh";

str[0] = 'R'; //Here, it does not update bcz String are immutable.

console.log(`Before: ${str}`);
str = str.replace("k", "Ku")
console.log(`After: ${str}`);