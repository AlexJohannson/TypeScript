enum Gender{
    Male = 0,
    Female = 1,
}

class Users {
    name: string;
    private _gender: Gender;


    constructor(name: string, gender: Gender) {
        this.name = name;
        this._gender = gender;
    }

    // set gender(value: string) {
    //     if (value === 'male' || value === 'female') {
    //         this._gender = value;
    //     }
    // }
}

let users = new Users("inna", Gender.Female);
console.log(users);