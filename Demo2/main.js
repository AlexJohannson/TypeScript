var x = 10;
console.log(x);
function foo(o) {
    return o + '';
}
console.log(foo(12000));
// foo('12000'); error
// foo([]); error
// foo({}); error
function first(o, x) {
    return o + '';
}
console.log(first(35, 'okten'));
function bar(object) {
}
console.log(bar({ id: 1, name: 'okten' }));
var n = 2;
console.log(n);
var s = 'oktetn';
console.log(s);
var b = true;
console.log(b);
var obj = { id: 1, status: false };
console.log(obj);
var arrS = ['okten', 'school', 'typescript'];
console.log(arrS);
var arrN = [1, 2, 3, 4, 5];
console.log(arrN);
var arr = [1, 2, 3, 4, 5];
console.log(arr);
var arrObj = [{ name: 'okten', age: 1 }, { name: 'okten', age: 1 }, { name: 'okten', age: 1 }];
console.log(arrObj);
function asd() {
    return { name: 'okten' };
}
console.log(asd());
function divCreator(content, domElementToAdd) {
    var div = document.createElement('div');
}
divCreator('okten', document.body);
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (value) { return value.json(); })
        .then(function (value) {
        return value;
    });
}
console.log(fetchData());
