var array = [12, 75, 3, 90, 736, 43, 78, 1, 32];
var sum = function (arr) {
    var totalMoney = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        totalMoney = totalMoney + item;
    }
    return totalMoney;
};
console.log(sum(array));
