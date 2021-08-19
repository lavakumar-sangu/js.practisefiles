const array1 = [5, 12, 8, 44, 130];
const bigNumber = (element) => element > 13;
let value = array1.findIndex(bigNumber) // using findIndex keyword
console.log(value); // element index will be printed
console.log(array1[value]); // element will be printed