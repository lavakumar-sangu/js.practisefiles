const x = 'Lava has a red car and grey bike';
const y = x.replace('red', 'blue');
console.log(y)

const i = 'Lava has a red car and red bike';
const a = /red/g;
const z = i.replace(a, 'blue');
console.log(z)