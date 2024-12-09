var arrayOfUsers = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
/*--------------------    user.status true  -----------------------------*/
for (var _i = 0, arrayOfUsers_1 = arrayOfUsers; _i < arrayOfUsers_1.length; _i++) {
    var user = arrayOfUsers_1[_i];
    if (user.status) {
        console.log(user);
    }
}
console.log('');
/*--------------------   user.status false --------------------------*/
for (var _a = 0, arrayOfUsers_2 = arrayOfUsers; _a < arrayOfUsers_2.length; _a++) {
    var user = arrayOfUsers_2[_a];
    if (!user.status) {
        console.log(user);
    }
}
console.log('');
