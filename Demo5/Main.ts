class User <ID>{


    constructor(private id: ID, private name: string) {
        this.id = id;
        this.name = name;
    }
}

let user1 = new User<number>(1, 'okten');
let user2 = new User<string>('school', 'okten');
console.log(user1);
console.log(user2);