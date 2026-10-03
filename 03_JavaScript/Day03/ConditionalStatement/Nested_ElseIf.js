let CGPA = 8.98;
let hasABC_ID = true;

if(CGPA >= 7.5){
    if(hasABC_ID){
        console.log("First Division With Honours");
    }else{
        console.log("Please submit your ABC ID!");
    }
}else if(CGPA >= 6.5 && CGPA < 7.5){
    if(hasABC_ID){
        console.log("First Division");
    }else{
        console.log("Please submit your ABC ID!");
    }
}else if(CGPA >= 5 && CGPA < 6.5){
    if(hasABC_ID){
        console.log("Second Division");
    }else{
        console.log("Please submit your ABC ID!");
    }
}else{
    if(hasABC_ID){
        console.log("Third Division");
    }else{
        console.log("Please submit your ABC ID!");
    }
}

