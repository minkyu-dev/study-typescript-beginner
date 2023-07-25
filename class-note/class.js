function Person(name, age) {
    this.name = name;
    this.age = age;
}
let minkyu = new Person('민규', 34);

class Person {
    constructor(name, age) {
        console.log('생성 완료');
        this.name = name;
        this.age = age;
    }
}

let minkyu = new Person('민규', 34);