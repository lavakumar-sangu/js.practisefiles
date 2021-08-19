function Person(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}
Person.prototype.calculateAge = function() {
    console.log('The current age is: ' + (2021 - this.yearOfBirth));
}
console.log(Person.prototype);
let Person1 = new Person('lava', 'developer', 1997);
console.log(Person1)

Person1.calculateAge();