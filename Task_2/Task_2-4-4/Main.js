var arrayN = [1, 2, 4, -24, 5673];
foobar(arrayN);
var arrayS = ['okten', 'school', 'typescript'];
foobar(arrayS);
var arrayB = [false, true];
foobar(arrayB);
function foobar(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        console.log(item);
    }
}
