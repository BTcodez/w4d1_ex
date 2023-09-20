class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
        }

    get userAge() {
        return this._age;
    }

    set userAge(age) {
        if (age > 0) {
            return this._age
        } else {
            return '... wait, thats not right'
        }
    }


    greet() {
        console.log(`Happy Birthday, ${this.name}, congrats on reaching ${this._age}!`);
    }



}

const brian = new Person('Brian', -1);
brian.greet();
console.log(brian.age)



