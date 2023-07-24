interface User {
   name: string,
   age: number
}

// 변수에 인터페이스 활용
let minkyu: User = {
    name: '민규'
    , age: 33
}

// 함수에 인터페이스 활용
function getUser(user: User): void {
    console.log(user);
}

const capt = {
    name: '캡틴'
    , age: 100
}

getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
    (a: number, b:number): number;
}

let sum: SumFunction;
sum = function(a: number, b:number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
    // sth: /abc/
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

interface Person {
    name: string,
    age: number
}

interface Developer extends Person {
    language: string
}

let captain: Developer = {
    language: 'kor'
    , age: 100
    , name: '캡틴'
}