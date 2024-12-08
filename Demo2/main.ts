let x = 10;
console.log(x)

function foo(o: number): string{
     return o + '';
}
console.log(foo(12000));
// foo('12000'); error
// foo([]); error
// foo({}); error

function first(o: number, x: string): string {
     return o + '';
}
console.log(first(35, 'okten'));

function bar(object:{id: number, name: string}): void{

}
console.log(bar({id: 1, name: 'okten'}));

let n: number = 2;
console.log(n);

let s: string = 'oktetn';
console.log(s);

let b:boolean = true;
console.log(b);

let obj: {id: number, status: boolean} = {id: 1, status: false};
console.log(obj);

let arrS: string[] = ['okten', 'school', 'typescript'];
console.log(arrS);

let arrN: number[] = [1, 2, 3, 4, 5];
console.log(arrN);

let arr: Array<number> = [1, 2, 3, 4, 5];
console.log(arr);

let arrObj: {name: string, age: number} [] = [{name: 'okten', age:1}, {name: 'okten', age:1}, {name: 'okten', age:1}];
console.log(arrObj);

function asd(): { name: string } {
     return {name: 'okten'};
}
console.log(asd());

function divCreator(content: string, domElementToAdd: HTMLElement) {
     let div:HTMLDivElement = document.createElement('div');

}

divCreator('okten', document.body);

function fetchData(): Promise <{id: number, usrId:number, title: string, body: string}[]>{
     return fetch('https://jsonplaceholder.typicode.com/posts')
         .then(value => value.json())
         .then((value: {id: number, usrId:number, title: string, body: string}[]) => {
              return value;
         })
}

console.log(fetchData());