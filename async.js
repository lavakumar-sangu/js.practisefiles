// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve('Promise resolved'), 2000);
// });
// async function asyncFunc() {
//     let result = await promise;

//     console.log(result);
//     console.log('hello');
// }

// asyncFunc();


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// promise.then(
//     result => console.log(result),
//     error => console.log(error)
// );