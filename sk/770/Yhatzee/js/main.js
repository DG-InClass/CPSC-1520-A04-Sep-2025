import '../css/styles.css';
import '../css/die.css';
import '../css/score-card.css';

// TODO: 🛑 Add a breakpoint for the line below
const dieContainer = document.querySelector('.App');

const values = new Array(5).fill();

const dice = values.map(() => die(roll()));
console.log(dice);
dice.forEach(die => {
    dieContainer.appendChild(die);
});

function die (value) {
    // TODO: 🛑 Add a breakpoint for the line below
    const container = document.createElement('div');
    container.classList.add('face');

    for(let count = 1; count <= value; count++) {
        const pip = document.createElement('span');
        pip.classList.add('pip');
        container.appendChild(pip);
    }
    return container;
}

function roll() {
    return Math.floor(Math.random() * 6) + 1;
}

dieContainer.addEventListener('click', (evt) => {
    // TODO: 🛑 Add a breakpoint for the line below
    console.log(evt.target);
    // TODO: Add in the code that would check if the target has a class of `.face`. If so, then re-roll that die to create a new set of "pip" children
    // NOTE: Refactor the code above if that can help your design for this event listener.
});
