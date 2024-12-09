var numberFirst = prompt('Enter the first number');
var numberA = numberFirst ? parseInt(numberFirst) : NaN;
var numberSecond = prompt('Enter the second number');
var numberB = numberSecond ? parseInt(numberSecond) : NaN;
if (numberA > numberB) {
    confirm('The number ' + numberA + ' is greater than the number ' + numberB);
}
else if (numberA < numberB) {
    confirm('The number ' + numberA + ' is less than the number ' + numberB);
}
else {
    confirm(numberA + ' and ' + numberB + ' equal numbers');
}
