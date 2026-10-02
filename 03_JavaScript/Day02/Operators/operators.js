let a = 10;
let b = 2;

//1. Arithmetic operators
console.log("1. Arithmetic operators: ");
console.log("a:" ,a, " & b:" ,b);
console.log("a + b :", a + b);
console.log("a - b :", a - b);
console.log("a * b :", a * b);
console.log("a % b :", a % b);
console.log("a ** b :", a ** b);
console.log();

//2. Unary Operators
let c = 5;
let flag = false;
console.log("2. Unary Operators: ");
console.log("c:" ,c);
console.log("--c:",--c);
console.log("++c:",++c);
console.log("-c:",-c);
console.log("+c:",+c);
console.log("!flag:",!flag);
console.log();

//3. Comparison operator
let str = "10";
let d = 10;
console.log("3. Comparison operator: ");
console.log("a:" ,a, " & b:" ,b);
console.log(`a > b : ${a>b}`);
console.log(`a >= b : ${a>=b}`);
console.log(`a < b : ${a<b}`);
console.log(`a <= b : ${a<=b}`);
console.log(`a == d : ${a==d}`);
console.log(`a != b : ${a!=b}`);
console.log(`a == str : ${a==str}`);
console.log(`a === d  : ${a===d}`);
console.log(`a !== b : ${a!=b}`);
console.log(`a === str : ${a===str}`);
console.log();

//4. Logical operator
console.log("4. Logical operator: ");
console.log("a:" ,a, " & b:" ,b);
console.log(`if a>5 and a<10: ${a>5 && a<10}`);
console.log(`if a>100 or a<=10: ${a>100 || a<=10}`);
console.log(`!(a<5): ${!(a<5)}`);
console.log();

//5. Bitwise Operator
console.log("5. Bitwise Operator: ");
console.log("a:" ,a, " & b:" ,b);
console.log(`a & b: ${a&b}`);
console.log(`a | b: ${a|b}`);
console.log(`a ^ d: ${a^d}`);
console.log(`a<<b: ${a<<b}`);
console.log(`a>>b: ${a>>b}`);
console.log();

//6. Assignment Operator
console.log("6. Assignment Operator: ");
console.log("a:" ,a, " & b:" ,b);
console.log(`a+=10: ${a += 10}`);
console.log(`a-=10: ${a -= 10}`);
console.log(`a*=2: ${a *= 2}`);
console.log(`a/=2: ${a /= 2}`);
console.log(`a**=2: ${a **= 2}`);
console.log(`a%=3: ${a %= 3}`);
console.log();

//7. Terniary Operator
console.log("7. Terniary Operator: ");
let age = 22;
let res = (age >= 18) ? "Yes" : "No";
console.log(`result: ${res}`);