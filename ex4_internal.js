class Person {
    

    constructor(name, age) {
        this.name = name;
        this.age = age;
        }

    greet() {
        console.log(`Happy Birthday, ${this.name}, congrats on reaching ${this.age}!`);
    }

    static info() {
        return 'This is a Person class';
    }

}

const brian = new Person('Brian', 32);
console.log(Person.info())
brian.greet();

const jimbob = new Person('Jim Bob', 67)
jimbob.greet();  


//no way to call the static from instance