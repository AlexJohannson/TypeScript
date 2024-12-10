var arr = [12, 75, 3, 90, 736, 43, 78, 1, 32];
sum(arr);
function sum(array) {
    var cashRegister = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        cashRegister = cashRegister + item;
    }
    return cashRegister;
}
console.log(sum(arr));
