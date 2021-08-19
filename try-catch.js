const numerator = 100,
    denominator = 2;

try {
    console.log(numerator / denominator); //excuted and output displayed
    console.log(a); //a is not defined error will come
} catch (error) {
    console.log('Error message: ' + error); //error message will be displayed
} finally {
    console.log('Finally will execute every time'); //this message will come everytime
}