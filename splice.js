const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserting at index 1
console.log(months);
// expected output["Jan", "Feb", "March", "April", "June"]
months.splice(4, 0, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output["Jan", "Feb", "March", "April", "May"]