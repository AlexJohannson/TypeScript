interface ICard {
    cardSuit: string;
    value: string;
    color: string;
}


const suits1: string[] = ['spade', 'diamond', 'heart', 'clubs'];
const values1: string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

const cards1: ICard[] = [];
for (const suit of suits1) {
    for (const value of values1) {
        const card: ICard = {cardSuit: suit, value: value, color: ''};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards1.push(card);
    }
}
console.log(cards1);
console.log(cards1.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
console.log(cards1.filter(card => card.value === '6'));
console.log(cards1.filter(card => card.color === 'red'));
console.log(cards1.filter(card => card.cardSuit === 'diamond'));
console.log(cards1.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8')));



