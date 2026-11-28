class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewDetail(){
        console.log(`\nName: ${this.name}\nEmail: ${this.email}`);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }

    editData(){
        console.log(`Admin edited Data`);
    }
}

let u1 = new User("Yuvraj", "yuvraj@gmail.com");
let u2 = new User("Pari", "pari@gmail.com");
u1.viewDetail();
u2.viewDetail();

let admin = new Admin("Admin", "Admin@gmail.com");
admin.viewDetail();
admin.editData();