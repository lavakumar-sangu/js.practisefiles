const student = {
    name: 'lava',
    age: 24,
    hobbies: ['reading', 'games', 'coding'],
};

for (let i in student) {
    let k;
    k = student[i];
    console.log(i + " - " + k);
}