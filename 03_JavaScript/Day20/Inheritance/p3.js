class A {
    constructor(x) {
        this.x = 10;
    }
}

class B extends A {
    constructor(x, y) {
        super(x);
        this.y = 20;
    }
}

const obj = new B(10,20);
console.log(`Value of X: ${obj.x}`);
console.log(`Value of Y: ${obj.y}`);