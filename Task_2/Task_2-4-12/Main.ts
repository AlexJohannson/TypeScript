let array: number[] = [1232, 56, 83, 78, 34, 90];


function swap(arr: number[], i1: number, i2: number): number[] | string {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return 'error';
}

console.log(swap((array), 0, 2));