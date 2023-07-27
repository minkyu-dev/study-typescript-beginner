// interface Dropdown<T> {
//     value: T;
//     title: string
// }
// let shoppingItem: Dropdown<string> = {
//     value: '',
//     title: ''
// }

interface Dropdown<T> {
    value: T;
    title: string
}

interface DetailsDropdown<K> extends Dropdown<K> {
    tag: K;
    description: string;
}
let detailedItem: DetailsDropdown<string> = {
    title: '',
    description: '',
    value: '',
    tag: ''
}