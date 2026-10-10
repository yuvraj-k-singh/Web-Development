let str1 = "Yuvraj";
let str2 = " Kumar";
let str3 = "     yuvraj   ";

//1. To UpperCase
console.log(`1. To Upper Case: ${str1.toUpperCase()}`);

//2. To LowerCase
console.log(`2. To Lower Case: ${str1.toLowerCase()}`);

//3. Char at
console.log(`3. Character at 2: ${str1.charAt(2)}`);

//4. Length (Property)
console.log(`4. Length: ${str3.length}`);

//5. Trim
str3 = str3.trim();
console.log(`5. Trim: ${str3} and Length: ${str3.length}`);

//6. Index of
console.log(`6. Index of: ${str3.indexOf('j')}`);

//7. Includes
console.log(`7. Includes: ${str1.includes("uv")}`);

//8. Concate
str1 = str1 + str2;
console.log(`8. Concate: ${str1.concat(str2)}`);

//9. Replace
console.log(`9. Replace: ${str3.replace("yuv", "YUV")}`);

//10. Substring
console.log(`10. Substring: ${str1.substring(0,3)}`);
console.log(`10. Substring: ${str1.substring(0)}`);

//11. Slice
console.log(`11. Slice: ${str1.slice(0, 9)}`);

//12. Split
let str4 = "Yuvraj, Mohit, Anish, Pari, Neha, Raj";
console.log(`12. Split: ${str4.split(",")}`);