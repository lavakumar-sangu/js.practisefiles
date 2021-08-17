const count = true;
let countValue = new Promise(function(resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("there ia no count value");
    }
});

console.log(countValue);