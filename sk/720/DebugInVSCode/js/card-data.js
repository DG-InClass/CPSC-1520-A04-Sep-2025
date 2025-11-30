// js/card-data.js

export const freshCards = async function() {
    const BASE_URL = 'https://deckofcardsapi.com/api/deck/';

    // Get a new shuffled deck
    // await prevents fetch from running asynchronously
    let resp = await fetch(`${BASE_URL}new/shuffle/`);
    let data = await resp.json();
    // console.log(data);
    let deckId = data.deck_id;

    // Draw all 52 cards
    resp = await fetch(`${BASE_URL}${deckId}/draw/?count=52`);
    data = await resp.json();
    console.log('Here are my cards:', data);

    // Return a clean array of all the card codes
    const codes = data.cards.map(oneCard => oneCard.code);
    return codes;
}

export const preShuffledCards = [
    "4D",
    "3D",
    "4H",
    "6S",
    "3H",
    "4S",
    "JC",
    "3C",
    "7C",
    "6C",
    "8H",
    "KD",
    "KH",
    "JH",
    "QH",
    "7H",
    "AS",
    "8S",
    "3S",
    "8C",
    "0S",
    "7S",
    "6H",
    "4C",
    "JD",
    "9S",
    "0D",
    "5S",
    "AC",
    "9H",
    "2C",
    "0H",
    "9C",
    "8D",
    "6D",
    "KS",
    "QC",
    "KC",
    "5H",
    "2S",
    "JS",
    "QD",
    "2H",
    "7D",
    "AD",
    "2D",
    "0C",
    "AH",
    "9D",
    "5C",
    "QS",
    "5D"
]
