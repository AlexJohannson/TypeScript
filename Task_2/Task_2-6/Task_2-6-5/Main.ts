let str: string = 'Ревуть воли як ясла повні';
stringToArray(str);

function stringToArray(str: string): string[] {
    if (str) {
        const strSplit: string[] = str.split(' ');
        return strSplit;
    }
    return [''];
}
console.log(stringToArray(str));