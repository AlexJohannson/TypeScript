var suits = ['spade', 'diamond', 'heart', 'club'];
var values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
var cards = [];
for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
    var suit = suits_1[_i];
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        var card = { cardSuit: suit, value: value, color: '' };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);
var reduce = cards.reduce(function (accum, card) {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce);
