let array: number[] = [12, 75, 3, 90, 736, 43, 78, 1, 32];


let sum = (arr: number[]): number => {
    let totalMoney = 0;
    for (const item of arr) {
        totalMoney = totalMoney + item;
    }
    return totalMoney;
}

console.log(sum(array));