let array: number[] = [12, 45, 990, 2, 54, 8377, 23, -12, 45, -76];
minimumNumber(array);



function minimumNumber(numbers: number[]): number {
    let min: number = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number: number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(minimumNumber(array));