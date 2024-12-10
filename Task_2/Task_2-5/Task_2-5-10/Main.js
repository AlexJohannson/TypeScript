var arr = [12, 45, 990, 2, 54, 8377, 23, -12, 45, -76];
var minimumNumber = function (numbers) {
    var min = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
};
minimumNumber(arr);
console.log(minimumNumber(arr));
