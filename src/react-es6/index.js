class Car
{
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have ' + this.brand;
    }
}

class RunningObj extends Car
{
    constructor(name) {
        super(name);
        this.speedRange = 1200;
    }

    speed() {
        return this.brand + ' has speed ' + this.speedRange;
    }
}
// use of class
const myCar = new Car('Ford');
console.log(myCar.present());

// use of inheritance
const runningObj = new RunningObj('Ford');
console.log(runningObj.speed());

// use of arrow function

var hello = function () {
    return 'hello';
}

console.log(hello());

var newHello = () => {
    return 'new hello'
}

console.log(newHello());

let myArray = ['apple', 'banana', 'orange'];
let myList = myArray.map((item) => '<p>' + item + '</p>');

console.log(myList);

console.log(myList);