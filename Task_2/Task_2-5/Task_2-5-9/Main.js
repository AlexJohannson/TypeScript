var User = /** @class */ (function () {
    function User(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user1 = new User(1, 'Name1', 1);
var user2 = new User(2, 'Name2', 2);
var user3 = new User(3, 'Name3', 3);
var users = [user1, user2, user3];
var arr = function (users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        document.write("<div>".concat(user.id, ". ").concat(user.name, " - ").concat(user.age, "</div>"));
    }
};
arr(users);
