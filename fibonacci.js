// const number = 10;
// let n1 = 0,
//     n2 = 1,
//     nextTerm;
// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }


// By using Recursion
function fibonacci(num) {
    if (num < 2) {
        return num; //to print 0,1,1
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
        //nth term is the sum of (n-1)th term and (n-2)th term.
    }
}
const fibonacciNum = 5;
for (let i = 0; i < fibonacciNum; i++) {
    console.log(fibonacci(i));
}