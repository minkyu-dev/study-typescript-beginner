// function logMessage(value: string) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// union 타입
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
    // someone.skill
    // someone.age
}