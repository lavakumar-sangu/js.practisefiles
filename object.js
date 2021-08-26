// let input = "name"
// const person = {
//     name: 'lava',
//     age: 24,
// };
// console.log(typeof person);
// console.log(person.name + " is " + person.age);
// console.log(person[input]);

let alien = {
    name: 'lava',
    tech: 'js',
    workexp: 2,
    laptop: {
        brand: 'H.P',
        color: 'grey',
        model: 12,
    }
}
for (let key in alien.laptop) {
    console.log(key, alien.laptop[key]); //it will print laptop keys and values
}