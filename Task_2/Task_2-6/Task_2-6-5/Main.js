var str = 'Ревуть воли як ясла повні';
stringToArray(str);
function stringToArray(str) {
    if (str) {
        var strSplit = str.split(' ');
        return strSplit;
    }
    return [''];
}
console.log(stringToArray(str));
