// const array1 = [5, 12, 8, 44, 130];
// const bigNumber = (element) => element > 13;
// let value = array1.findIndex(bigNumber) // using findIndex keyword
// console.log(value); // element index will be printed
// console.log(array1[value]); // element will be printed
// try with array of objects

var book1 = [
    { no: 1, Booktitle: 'phy', author: 'sangu', },
    { no: 2, Booktitle: 'chem', author: 'lava', },
    { no: 3, Booktitle: 'mat', author: 'kumar', },
    { no: 4, Booktitle: 'tel', author: 'lee', }
];

var search = book1.findIndex(function(obj, index) {
    if (obj.Booktitle == 'chem') {
        return true;
    }
});
console.log(search);