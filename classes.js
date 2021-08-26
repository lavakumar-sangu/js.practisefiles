class person { //class are the templates of object
    constructor(name, age) { //constructor is used to instiallize the object properties
        this.name = name;
        this.age = age;
    }
}

const x1 = new person('lava', 23);
const x2 = new person('sangu', 24);

console.log(x1.name, x1.age);
console.log(x2.name, x1.age);