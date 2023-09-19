class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        }

    greet() {
        console.log(`Happy Birthday, ${this.name}, congrats on reaching ${this.age}!`);
    }

}

const brian = new Person('Brian', 32);
brian.greet();

const jimbob = new Person('Jim Bob, 67')
jimbob.greet();  