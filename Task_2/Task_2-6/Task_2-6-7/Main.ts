let nums: number[] = [11, 21, 3];


function sortNumbers(arrayOfNumbers: number[], direction: string): number[] {
    if (direction === 'ascending') {
        return arrayOfNumbers.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arrayOfNumbers.sort((a, b) => b - a);
    }


}

console.log(sortNumbers(nums, 'ascending') );
