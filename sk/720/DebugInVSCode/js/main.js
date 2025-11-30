import { preShuffledCards } from './card-data';
import { setupForms } from './setupForms';

const container = document.getElementById('players');

const form = document.getElementById('create-players');
setupForms({form, container});

const dealButton = document.getElementById('deal-me-in');
// TODO: Add Event Listener
dealButton.addEventListener('click', function(evt) {
    console.clear();
    const players = container.querySelectorAll('div');
    //                       \______________________/
    // I can use the .forEach() function that comes with the NodeList
    players.forEach(playerHand => {
        // TODO: Make sure there are enough cards left in the deck...

        // Deal a card to the player's hand
        const card = preShuffledCards.pop();
        const img = `<img src="/img/${card}.svg" alt="${card}" />`;
        console.log(img);
        playerHand.innerHTML += img;
    });
});

