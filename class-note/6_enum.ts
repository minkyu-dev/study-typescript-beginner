enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

let myShoes = Shoes.Nike;

enum Answer {
    Yes = 'yes',
    No = 'no'
}

function askQeustion(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('정답');
    }
    if(answer === Answer.No) {
        console.log('오답');
    }
}
askQeustion(Answer.Yes);
// askQeustion('y');
// askQeustion('예스');
// askQeustion('Yes');