import { freshCards, preShuffledCards } from './card-data';

// TODO: Add Event Listener
export function setupForms({ form, container }) {
    form.addEventListener('submit', async function (evt) {
        evt.preventDefault();
        console.log('Adding Players...');

        // Get the names
        const inputNames = evt.target.elements.playerNames;
        //                 <input name="playerNames" />
        const names = inputNames.value.split(',').map(name => name.trim());
        //            \____string____/
        //                             \string[]/
        //                                       \ transform new string[] /
        // console.log(names);
        if (names.length > 0) {
            // console.log(names.length);
            // Add players to the container
            names.forEach((player, index) => {
                // console.log(player, index);
                const html = `<div id="player-${index}"><h2>${player}</h2></div>`;
                // console.log(container);
                container.innerHTML += html;
            });
            // Show the container
            container.classList.remove('hidden');
            // Disable the button, hide the form
            evt.target.elements.createPlayers.setAttribute('disabled', 'true');
            evt.target.classList.add('hidden');

            // Get a brand new deck of cards
            let newCards = await freshCards();
            // The ... is called the "spread operator"
            preShuffledCards.splice(0, preShuffledCards.length, ...newCards);
            console.clear();
            console.log('New deck:', preShuffledCards);
        }
    });
}
