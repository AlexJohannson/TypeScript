var nums = [11, 21, 3];
function sortNumbers(arrayOfNumbers, direction) {
    if (direction === 'ascending') {
        return arrayOfNumbers.sort(function (a, b) { return a - b; });
    }
    else if (direction === 'descending') {
        return arrayOfNumbers.sort(function (a, b) { return b - a; });
    }
}
console.log(sortNumbers(nums, 'ascending'));
