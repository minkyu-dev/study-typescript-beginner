interface Developer {
    name:string;
    skill:string;
}

interface Person {
    name: string;
}

class Operater {
    name: string;
    skill: string;
}

let developer: Developer;
let person: Person;

developer = person;
person = developer;
developer = new Operater();

let add = function(a: number) {
    // ...
}

let sum = function(a: number, b: number) {
    // ...
}
sum = add;
add = sum;

// 인터페이스의 구조가 동일할 경우
interface Empty<T> {
    //...
}

let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

// 인터페이스의 구조가 다를 경우
interface NotEmpty<T> {
    data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;