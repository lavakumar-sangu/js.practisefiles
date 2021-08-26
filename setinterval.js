let count = 0;
let interval = setInterval(function() {
    count += 1;
    if (count === 5) { //after 10 intervals time will stop
        clearInterval(interval);
    }
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString(); //this will print time
    console.log(time);

}, 2000);