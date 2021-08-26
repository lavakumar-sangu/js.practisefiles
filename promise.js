// const count = true;
// let countValue = new Promise(function(resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("there ia no count value");
//     }
// });

// console.log(countValue);

let promise = new Promise(function(resolve, reject) {
    const x = "apple";
    const y = "apples"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});
promise
    .then(function() {
        console.log('Successful');
    })
    .catch(function() {
        console.log('Some error has occured');
    });