let arr:(number | string | boolean)[] = [1, 2, 4, 'okten', -24, true, 5673, false];


let foobar = (arr: (number | string | boolean)[]): void => {
    for (const item of arr) {
        console.log(item);
    }

}
foobar(arr);
