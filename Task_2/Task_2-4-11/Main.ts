let arr: number[] = [12, 75, 3, 90, 736, 43, 78, 1, 32];
sum(arr);

function sum(array) {
    let cashRegister: number = 0;
    for (const item of array) {
        cashRegister = cashRegister + item;
    }
    return cashRegister;
}
console.log(sum(arr));