// const array1 = [5, 10, 6, 12, 8, 44, 130]; //list of elements
// const found = array1.find(element => element > 10); //using find keyword
// console.log(found); // try with array of objects

var book1 = [
    { no: 1, Booktitle: 'phy', author: 'sangu', },
    { no: 2, Booktitle: 'chem', author: 'lava', },
    { no: 3, Booktitle: 'mat', author: 'kumar', },
    { no: 4, Booktitle: 'tel', author: 'lee', }
];

var search = book1.find(function(obj) {
    if (obj.Booktitle == 'mat') {
        return true;
    }
});
console.log(search);