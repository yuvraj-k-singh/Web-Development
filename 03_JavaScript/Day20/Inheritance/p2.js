class A {
    show() {
        console.log("Class A");
    }
}

class B extends A {
    //Method overriding
    show() {
        console.log("Class B");
    }
}

const obj = new B();
obj.show();