let js = {
    name: "Yuvraj",
    age: 21,
    status: function(){
        return "Student"
    },
    skills: ["JAVA", "JS"],
    address: {
        city: "INDORE",
        state: "MP"
    },
};

let json = JSON.stringify(js);

console.log(json);
console.log(typeof json);