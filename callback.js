function wish(name, callback) {
    console.log("Hi" + ' ' + name);
    callback();
}

function callMe() {
    console.log('This is callback fuction');
}
wish('lava', callMe)