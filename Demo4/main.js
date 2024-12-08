var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var Users = /** @class */ (function () {
    function Users(name, gender) {
        this.name = name;
        this._gender = gender;
    }
    return Users;
}());
var users = new Users("inna", Gender.Female);
console.log(users);
