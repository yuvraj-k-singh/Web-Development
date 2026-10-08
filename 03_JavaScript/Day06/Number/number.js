let n = 12.46728;

//.toString()
console.log(`To String: ${n.toString()} and Type: ${typeof (n.toString())}`);

//.toFixed()
console.log(`\nTo Fixed: ${n.toFixed(2)} and Type: ${typeof (n.toFixed(2))}`)

//.toPrecision()
console.log(`\nTo Precision: ${n.toPrecision(3)} and Type: ${typeof (n.toPrecision(3))}`)

//Number.MAX_VALUE
console.log(`\nNumber max value: ${Number.MAX_VALUE} and Type: ${typeof (Number.MAX_VALUE)}`);

//Number.MIN_VALUE
console.log(`\nNumber min value: ${Number.MIN_VALUE} and Type: ${typeof (Number.MIN_VALUE)}`);

//Integer.MAX_SAFE_Integer
console.log(`\nNumber max safe integer: ${Number.MAX_SAFE_INTEGER} and Type: ${typeof (Number.MAX_SAFE_INTEGER)}`);

//Integer.MIN_SAFE_Integer
console.log(`\nNumber min safe integer: ${Number.MIN_SAFE_INTEGER} and Type: ${typeof (Number.MIN_SAFE_INTEGER)}`);

let num = 10000000;
//To Locale String
console.log(`\nTo Locale String: ${num.toLocaleString('en-IN')} and Type: ${typeof (num.toLocaleString('en-IN'))}`);
