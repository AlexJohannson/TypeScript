function foo(o: number){
     return o + '';
}

foo(12000);
// foo('12000'); error
// foo([]); error
// foo({}); error