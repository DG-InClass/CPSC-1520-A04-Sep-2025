// node --watch about-fetch-demo.js
// use the deck of cards API as an exploratory demo.
console.clear();
console.log('Exploring the DeckOfCards API');

const BASE_URL = 'https:deckofcardsapi.com/api/deck/';
// a couple of utility functions
const deckUrl = (deckId) => `${BASE_URL}${deckId ? deckId : 'new'}`;
const drawUrl = (deckId, count) => `${deckUrl(deckId)}/draw/?count=${count}`;

// Try a fetch call to see what comes back
fetch(deckUrl('r244rilphvc6')) // Last used on Oct 27, 2025....
    .then(response => {
        // do something with the response.
        console.log('Fetch complete:', response.ok);
        // We know that this API will return JSON data,
        // so let's convert the JSON response to JavaScript objects
        return response.json();
    })
    .then(data => {
        console.log('Here is the data:', data);
        // Now that I have a deck, I'm going to try to draw a couple of cards from that deck.
        fetch(drawUrl(data.deck_id, 2))
            .then(resp => resp.json()) // convert the JSON to JS
            .then(result => {
                console.log('Drew 2 cards:');
                console.log(result);
            });
    })
    .finally( () => {
        console.log('\nThe REAL end!\n');
    })

console.log('\n\n-- the end --\n');
