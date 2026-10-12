let date = new Date();

console.log(`Current Date: ${date.getDate()}`);
console.log(`Current Year: ${date.getFullYear()}`);
console.log(`Current Month: ${date.getMonth()+1}`);
console.log(`Current Time: ${date.getTime()}`);

date.setDate(5);
date.setFullYear(2019);
date.setMonth(3);
//date.setTime(36272882);

console.log();

console.log(`New Date: ${date.getDate()}`);
console.log(`New Year: ${date.getFullYear()}`);
console.log(`New Month: ${date.getMonth()+1}`);
console.log(`New Time: ${date.getTime()}`);