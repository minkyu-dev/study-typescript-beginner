// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText('');
// logText(10);
// logText(true);

// function logText <T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText<string>('hi');

// function logText(text: string) {
//     console.log(text);
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// string or number type 
// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

function logText<T>(text: T): T {
    console.log(text);
    return text;
}
const str = logText<string>('');
const flag = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown <T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<string> = {value: '', selected: false};

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     // console.log(text.length);
//     return text;
// }
// logTextLength<string>(['', '']);

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: Number;
}
function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength(10);
logTextLength({length:10});

// 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// ShoppingItem의 key 중에 한가지가 T가 된다.
function getShoppingItemOption<T extends keyof ShoppingItem> (itemOption: T): T {
    return itemOption;
}
getShoppingItemOption('name');
getShoppingItemOption('price');
getShoppingItemOption('stock');