function array4(arrayOfPrimitive: (number | string | boolean)[]): void {
    document.write(`<ul>`);
    for (const item of arrayOfPrimitive) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
array4([1, 0, 'typescript', false, 'okten', -567, 'java']);
