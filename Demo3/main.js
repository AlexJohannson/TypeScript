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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    return User;
}());
var user = new User(1, 'okten', true);
console.log(user);
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, name, status, login, password) {
        var _this = _super.call(this, id, name, status) || this;
        _this.login = login;
        _this.password = password;
        return _this;
    }
    return Customer;
}(User));
var customer = new Customer(1, 'okten', true, 'okten', 1234567);
console.log(customer);
function foobar(user) {
    if (user instanceof User) {
        console.log(user.name, user.status);
    }
    if (user instanceof Customer) {
        var customer_1 = user;
        console.log(customer_1.name, customer_1.status, customer_1.login);
    }
}
foobar(user);
foobar(customer);
