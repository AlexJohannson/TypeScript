interface IUser {
    id: string | number;
    name: string;
    age: number;
}

class User<ID extends string | number> implements IUser {
    constructor(public id: ID, public name: string, public age: number) {}
}

let user1 = new User<number>(1, 'Name1', 1);
let user2 = new User<string>('ID', 'Name2', 2);
let user3 = new User<number>(3, 'Name3', 3);

function arr(users: IUser[]): void {
    for (const user of users) {
        document.write(`<div>${user.id}. ${user.name} - ${user.age}</div>`);
    }
}

arr([user1, user2, user3]);

