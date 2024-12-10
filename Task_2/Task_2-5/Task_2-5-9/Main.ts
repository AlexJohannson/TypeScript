class User {
    constructor(public id: number, public name: string, public age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}


let user1 = new User(1, 'Name1', 1);
let user2 = new User(2, 'Name2', 2);
let user3 = new User(3, 'Name3', 3);
let users: User[] = [user1, user2, user3];

let arr = (users: User[]): void => {
    for (const user of users) {
        document.write(`<div>${user.id}. ${user.name} - ${user.age}</div>`);
    }
}
arr(users);