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