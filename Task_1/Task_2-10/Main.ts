let numberFirst: string | null = prompt('Enter the first number');
let numberA: number = numberFirst ? parseInt(numberFirst) : NaN;

let numberSecond: string | null = prompt('Enter the second number');
let numberB: number = numberSecond ? parseInt(numberSecond) : NaN;

if (numberA > numberB) {
    confirm('The number ' + numberA + ' is greater than the number ' + numberB);
} else if (numberA < numberB) {
    confirm('The number ' + numberA + ' is less than the number ' + numberB);
} else {
    confirm(numberA + ' and ' + numberB + ' equal numbers');
}