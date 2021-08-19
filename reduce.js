function sum(arr) {
    const reducer = (sum, val) => sum + val; //using arrow function
    console.log(arr.reduce(reducer)); //using reduce keyword here
}
sum([1, 3, 5, 7]);


// Normal function without using reduce will give same output
// function sum(arr) {
//     let sum = 0;
//     for (const val of arr) {
//       sum += val;
//     }
//     return sum;
//   }
//   sum([1, 3, 5, 7]);