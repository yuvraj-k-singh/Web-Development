let score = prompt("Enter student score: ");

if(score >= 90 && score <= 100){
    console.log("A+ grade");
}else if(score >= 80 && score < 90){
    console.log("A grade");
}else if(score >= 70 && score < 80){
    console.log("B+ grade");
}else if(score >= 60 && score < 70){
    console.log("B grade");
}else if(score >= 50 && score < 60){
    console.log("C+ grade");
}else if(score >= 40 && score < 50){
    console.log("C grade");
}else{
    console.log("F grade");
}