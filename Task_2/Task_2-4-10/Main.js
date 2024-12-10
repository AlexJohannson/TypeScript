var array = [12, 45, 990, 2, 54, 8377, 23, -12, 45, -76];
minimumNumber(array);
function minimumNumber(numbers) {
    var min = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        var number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(minimumNumber(array));
