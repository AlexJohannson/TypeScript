const arrayN: number[] = [1, 2, 4, -24, 5673];
foobar(arrayN);

const arrayS: string[] = ['okten', 'school', 'typescript'];
foobar(arrayS);

const arrayB: boolean[] = [false, true];
foobar(arrayB);


function foobar(arr) {
    for (const item of arr) {
        console.log(item);
    }
}