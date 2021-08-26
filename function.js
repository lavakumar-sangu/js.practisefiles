function wish(personName) {
    console.log("Hello " + personName);
}

let nameofPerson = "lava";

wish(nameofPerson); //output : Hello lava

// with function doing adding numbers

// function add(a, b) {
//     console.log(a + b);
// }
// add(2, 4)

function greet(user) {
    return `Hello ${user}`
}

let user = 'sangu';
let str = greet(user);
console.log(str);