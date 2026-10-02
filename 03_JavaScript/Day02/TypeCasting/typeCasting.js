//Implicit TypeCasting
let a = "10";
let b = 1;
console.log(`\nImplicit TypeCasting: `);
console.log(`Value of a + b: ${a+b} and Type: ${typeof (a+b)}`);
console.log(`Value of a - b: ${a-b} and Type: ${typeof (a-b)}`);
console.log(`Value of a * b: ${a*b} and Type: ${typeof (a*b)}`);
console.log();

//Explicit TypeCasting
console.log(`\nExplicit TypeCasting: `);
console.log(`\n1.String to Number: `);
let str = "100";
let str1 = "10ab";
let str2 = "20.2772";
let num = Number(str);
let num1 = Number(str1);
let num2 = Number.parseFloat(str2);
console.log(`String to Number: ${num} and Type: ${typeof num}`);
console.log(`String to Number: ${num1} and Type: ${typeof num1}`);
console.log(`String to Number: ${num2} and Type: ${typeof num2}`);

console.log(`\n2.Number to String: `);
let num3 = 1020;
let num4 = 19.272;
let str3 = String(num3);
let str4 = String(num4);
console.log(`Number to String: ${str3} and Type: ${typeof str3}`);
console.log(`Number to String: ${str4} and Type: ${typeof str4}`);

console.log(`\n3.Boolean to Number: `);
let flag1 = true, flag2 = false;
console.log(`Boolean to Number: ${Number(flag1)} and Type: ${typeof Number(flag1)}`);
console.log(`Boolean to Number: ${Number(flag2)} and Type: ${typeof Number(flag2)}`);

console.log(`\n4.Boolean to String: `);
console.log(`Boolean to String: ${String(flag1)} and Type: ${typeof String(flag1)}`);
console.log(`Boolean to String: ${String(flag2)} and Type: ${typeof String(flag2)}`);

console.log(`\n5.String to Boolean: `);
let str5 = "";
console.log(`String to Boolean: ${Boolean(str5)} and Type: ${typeof Boolean(str5)}`);
console.log(`String to Boolean: ${Boolean(str4)} and Type: ${typeof Boolean(str4)}`);

console.log(`\n6.Number to Boolean: `);
let num5 = 0;
console.log(`Number to Boolean: ${Boolean(num)} and Type: ${typeof Boolean(num)}`);
console.log(`Number to Boolean: ${Boolean(num5)} and Type: ${typeof Boolean(num5)}`);

// Null behaviour
let check = null;
console.log(`\n7.NUll Behaviour: `);
console.log(`Null to Number: ${Number(check)} and Type: ${typeof Number(check)}`);
console.log(`Null to String: ${String(check)} and Type: ${typeof String(check)}`);
console.log(`Null to Boolean: ${Boolean(check)} and Type: ${typeof Boolean(check)}`);

// Undefined behaviour
let test = undefined;
console.log(`\n8.Undefined Behaviour: `);
console.log(`Undefined to Number: ${Number(test)} and Type: ${typeof Number(test)}`);
console.log(`Undefined to String: ${String(test)} and Type: ${typeof String(test)}`);
console.log(`Undefined to Boolean: ${Boolean(test)} and Type: ${typeof Boolean(test)}`);