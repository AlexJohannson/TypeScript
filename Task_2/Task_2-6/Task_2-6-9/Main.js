var suits1 = ['spade', 'diamond', 'heart', 'clubs'];
var values1 = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
var cards1 = [];
for (var _i = 0, suits1_1 = suits1; _i < suits1_1.length; _i++) {
    var suit = suits1_1[_i];
    for (var _a = 0, values1_1 = values1; _a < values1_1.length; _a++) {
        var value = values1_1[_a];
        var card = { cardSuit: suit, value: value, color: '' };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        cards1.push(card);
    }
}
console.log(cards1);
console.log(cards1.find(function (card) { return card.value === 'ace' && card.cardSuit === 'spade'; }));
console.log(cards1.filter(function (card) { return card.value === '6'; }));
console.log(cards1.filter(function (card) { return card.color === 'red'; }));
console.log(cards1.filter(function (card) { return card.cardSuit === 'diamond'; }));
console.log(cards1.filter(function (card) { return card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8'); }));
