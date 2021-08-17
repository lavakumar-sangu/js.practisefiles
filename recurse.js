function CountDown(number) {
    console.log(number);

    const newNumber = number - 1;

    if (newNumber > 0) {
        CountDown(newNumber);
    }
}
CountDown(5)