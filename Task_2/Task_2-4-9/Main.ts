interface IUser {
    id: string | number;
    name: string;
    age: number;
}

class User1<ID extends string | number> implements IUser {
    constructor(public id: ID, public name: string, public age: number) {}
}

let user10 = new User1<number>(1, 'Name1', 1);
let user20 = new User1<string>('ID', 'Name2', 2);
let user30 = new User1<number>(3, 'Name3', 3);

function arr1(users: IUser[]): void {
    for (const user of users) {
        document.write(`<div>${user.id}. ${user.name} - ${user.age}</div>`);
    }
}

arr1([user10, user20, user30]);

