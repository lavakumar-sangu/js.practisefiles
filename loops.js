const student = {
    name: 'lava',
    age: 24,
    hobbies: ['reading', 'games', 'coding'],
};

for (let keys in student) {
    let pairs;
    pairs = student[keys];
    console.log(keys + " - " + pairs);
}