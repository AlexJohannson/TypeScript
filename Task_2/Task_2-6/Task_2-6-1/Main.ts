let a: string = 'hello world';
let b: string = 'lorem ipsum';
let c: string = 'javascript is cool';

console.log(a.length);
console.log(b.length);
console.log(c.length);
console.log(' ');

const array: string[] = [a, b, c];
for (const item of array) {
    console.log(item.length);
}