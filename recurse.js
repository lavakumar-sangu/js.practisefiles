function CountDown(number) {
    if (number == 0) {
        console.log("input is 0")
    } else if (number > 1) {
        number = number - 1;
        console.log(number)
        CountDown(number);
    } else if (number < 0) {
        console.log("NEGITIVE NUMBER")
    }
}
CountDown(0)