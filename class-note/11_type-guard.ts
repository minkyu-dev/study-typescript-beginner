interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
     return {name: '', age: 34, skill: ''}
}
let tony = introduce();
console.log(tony.name);

if((tony as Developer).skill) {
    let skill = (tony as Developer).skill;
    console.log(skill);
} else if((tony as Person).age) {
    let age = (tony as Person).age;
    console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}