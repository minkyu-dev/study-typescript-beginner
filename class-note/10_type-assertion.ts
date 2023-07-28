// 타입 단언(type assertion)
let a;
a = 20;
a = '';
let b = a as string;

// DOM API 조작 시 자주 사용
let div = document.querySelector('div') as HTMLDivElement;