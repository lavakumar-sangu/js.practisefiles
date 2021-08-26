const bikeColor = 'Lava has a red car and grey bike';
const colorChanged = bikeColor.replace('red', 'blue');
console.log(colorChanged)

const bikeColors = 'Lava has a red car and red bike';
const colorChange = /red/g;
const bikeValue = bikeColors.replace(colorChange, 'blue');
console.log(bikeValue)