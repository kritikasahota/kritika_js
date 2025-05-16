class ToyotaCar{     
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
};

let fortuner = new ToyotaCar(); // creating obj from template

/*CONSTRUCOR*/
class SwiftCar{
    constructor(brand, mileage) {          
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;

    }
}

let swift1 = new SwiftCar(); // constructor is invoked
let swift2 = new SwiftCar("swift2", 12);
console.log(swift2);

/*INHERITANCE*/
class Person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person{
    work() {
        console.log("solve problems, build something");
    }
}

let obj = new Engineer();

/* SUPER KEYWORD */
class Girl {
    constructor(){
         console.log("enter parent constructor");
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}
class Engineer1 extends Girl {
     constructor(branch){
        console.log("enter child constructor");
        super();
        this.branch = branch;
        console.log("exit child constructor");
     }
    work() {
        console.log("solve problems, build something");
       }
}

let enggObj = new Engineer1("Chemical Engg");