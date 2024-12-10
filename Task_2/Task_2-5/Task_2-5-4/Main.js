var arr = [1, 2, 4, 'okten', -24, true, 5673, false];
var foobar = function (arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        console.log(item);
    }
};
foobar(arr);
