let num = 16;

const ans = n =>{
    if(n%2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}

console.log(`Given number ${num} is ${ans(num)}`);