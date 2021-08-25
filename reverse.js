// function reverseString(x) {
//     let y = " ";
//     for (let i = x.length - 1; i >= 0; i--) {
//         y += x[i];
//     }
//     return y;
// }
// const z = "lavakumar";
// const result = reverseString(z);
// console.log(result);


// let numbers = [5, 1, 56, 32, 58, 7, 4];  //sorting the array into ascending order
// numbers.sort((function(a, b) { return a - b }));
// console.log(numbers);

// let revstr = ['sangu', 'hkdsbj'];
// const reversed = revstr.reverse();
// console.log(reversed);


function ReverseString(str) { //reverse astring by using reverse keyword
    console.log(str.split('').reverse().join(''));
}
console.log(ReverseString('sangu'));