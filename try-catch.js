// const numerator = 100,
//     denominator = 2;

// try {
//     console.log(numerator / denominator); //excuted and output displayed
//     console.log(a); //a is not defined error will come
// } catch (error) {
//     console.log('Error message: ' + error); //error message will be displayed
// } finally {
//     console.log('Finally will execute every time'); //this message will come everytime
// }

// try {
//     console.log("Welcome");
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log('Finally will execute every time')
// }


let x = 0;
console.log(typeof(x));
try {
    if (x === "") {
        console.log("empty");
    } else if (isNaN(x)) {
        console.log("not a number");
    } else if (x <= 0) {
        console.log("too low");
    } else if (x >= 1) {
        console.log("ok");
    }
} catch (err) {
    console.log("Input is " + err);
}