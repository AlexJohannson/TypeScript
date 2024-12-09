type BookProgram = {
    title: string;
    pageCount: number;
    genre: string;
    author: {
        name: string,
        age: number
    }[];
};





let bookOne: BookProgram = {
    title: 'Title',
    pageCount: 36,
    genre: 'Genre',
    author: [
        {
            name: 'Name',
            age: 12
        }
    ]
}
console.log(bookOne);
console.log(bookOne.genre);
console.log(bookOne.author[0]);



let bookTwo: BookProgram ={
    title: 'Frontend',
    pageCount: 792,
    genre: 'programming',
    author: [
        {
            name: 'Name',
            age: 32
        }
    ]
}
console.log(bookTwo);
console.log(bookTwo.title);
console.log(bookTwo.author[0]);




let bookThree: BookProgram ={
    title: 'Java Script',
    pageCount: 653,
    genre: 'Frontend Developer',
    author: [
        {
            name: 'Name',
            age: 43
        }
    ]
}
console.log(bookThree);
console.log(bookThree.pageCount);
console.log(bookThree.author[0]);
