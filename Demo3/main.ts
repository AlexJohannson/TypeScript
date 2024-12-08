// class User {
//     private _id: number;
//     protected name: string;
//     public status: boolean;
//
//
//     constructor(id: number, name: string, status: boolean) {
//         this._id = id;
//         this.name = name;
//         this.status = status;
//     }
//
//     greeting(): void{
//         console.log('Hello');
//     }
//
//
//     get id(): number {
//         return this._id;
//     }
//
//
//     set id(value: number) {
//         if (value > 0) {
//             this._id = value;
//         }
//     }
// }
//
// // let obj: User ={
// //     id: 1,
// //     name: 'okten',
// //     status: true,
// //     greeting(): void{
// //         console.log('Hi');
// //     }
// // };
// // console.log(obj);
//
// let user = new User(1, 'okten', true);
// console.log(user);
// console.log(user.id);
// console.log(user.id = 12);

class User{
    constructor(private id: number, public name:string, public  status:boolean) {
    }
}

let user = new User(1, 'okten', true);
console.log(user);


class Customer extends User {

    constructor(id: number, name: string, status: boolean, public login:string, private password:number) {
        super(id, name, status);
    }
}

let customer = new Customer(1, 'okten', true, 'okten', 1234567);
console.log(customer);

function foobar(user: User) {
    if (user instanceof User) {
        console.log(user.name, user.status);
    }
    if (user instanceof Customer) {
        let customer = user as Customer;
        console.log(customer.name, customer.status, customer.login);
    }
}

foobar(user);
foobar(customer);