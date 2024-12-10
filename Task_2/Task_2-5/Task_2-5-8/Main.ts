let array:(number | string | boolean)[] = [1, 45, 'Javascript', true, false, -567, 'Node.js'];


let list = (arrayOfItem:(number | string | boolean)[]): void => {
    document.write(`<ul>`);
    for (const item of arrayOfItem) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

list(array);