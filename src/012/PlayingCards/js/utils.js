/**
 * Takes an array of playing card codes and convert them to an array of
 * objects with the playing card code and the relative position based on
 * the suit and the card value.
 * @param {string[]} cards An array of playing card codes
 * @returns {{code:string, suitPosition: number, valuePosition: number}[]}
 */
export function denotePositionOfCards (cards) {
    return cards.map(toPosition);
}

const toPosition = function(singleCard) {
    return {
        code: singleCard,
        valuePosition: valuePosition(singleCard[0]),
        suitPosition: suitPosition(singleCard[1])
    }
}

const suitPosition = function(suit) {
    // ♠️♥️♦️♣️
    let result = 0;
    const suitOrder = "SHDC";
    return suitOrder.indexOf(suit) + 1;
}

const valuePosition = function(value) {
    // Aces low
    let result = 0;
    switch (value) {
        case 'A':
            result = 1;
            break;
        case '0':
            result = 10;
            break;
        case 'J':
            result = 11;
            break;
        case 'Q':
            result = 12;
            break;
        case 'K':
            result = 13;
            break;
        default:
            result = parseInt(value);
            break;            
    }
    return result;
}
