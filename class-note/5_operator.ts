// function logMessage(value: string) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// union 타입 (or 연산)
let minkyu: string | number | boolean;
function logMessage(value: string | number) {
    console.log(value);
    // type guard
    if(typeof value === 'number') {
        value.toLocaleString();
    } 
    if(typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);


interface Developer {
    name: string,
    skill: string
}

interface Person {
    name: string,
    age: number
}

function askSomeone(someone: Developer | Person) {
    // 공통된 속성에만 접근 가능
    someone.name
    // someone.skill,
    // someone.age
}
askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '캡틴', age: 100});

function askEveryone(someone: Developer & Person) {
    // 모든 속성에 접근 가능
    someone.name,
    someone.skill,
    someone.age
}
askEveryone({name: '디벨로퍼', skill: '웹 개발', age: 100})

// intersection type
let capt: string & number & boolean;