// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

var arr = [2, 5, 6, 3, 8, 9];
sum = 0
var newArr = arr.map(function(val, index) {
    return { key: index, value: sum += val };
})

console.log(newArr)