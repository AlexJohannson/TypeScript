const arrayN: number[] = [1, 2, 4, -24, 5673];
foobar1(arrayN);

const arrayS: string[] = ['okten', 'school', 'typescript'];
foobar1(arrayS);

const arrayB: boolean[] = [false, true];
foobar1(arrayB);


function foobar1(arr) {
    for (const item of arr) {
        console.log(item);
    }
}