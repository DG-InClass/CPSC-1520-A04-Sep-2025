/**
 * Configure user interactions related to Todo items (reminders).
 * 
 * @param {Object} document An object referencing parts of the page related to Todo items
 * @param {HTMLFormElement} document.todoForm Form for adding Todo items
 * @param {HTMLUListElement} document.unsortedList Unordered list of Todo items
 * @param {HTMLOListElement} document.sortedList Ordered list of Todo items
 */
export function configureTodoActions({todoForm, unsortedList, sortedList}) {
    // TODO: 
    setupFormProcessing({todoForm, unsortedList});
    setupButtonClicks({unsortedList, sortedList});
}

/**
 * Sets up the form processing to add new Todo items to the unsorted list.
 * 
 * @param {Object} document An object referencing parts of the page related to Todo items
 * @param {HTMLFormElement} document.todoForm Form for adding Todo items
 * @param {HTMLUListElement} document.unsortedList Unordered list of Todo items
 */
const setupFormProcessing = function({todoForm, unsortedList}) {
    todoForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        // I'll ignore validation for the moment
        const reminder = ev.target.elements.todo.value; // <input name="todo" />
        const li = createUnsortedListItem(reminder);
        unsortedList.appendChild(li);
    });
}

const createUnsortedListItem = function(text) {
    // <li>{text} <button>trash</button> <button>right-arrow</button></li>
    const li = document.createElement('li');
    const textNode = document.createTextNode(text);
    const trashButton = createButton(buttonType.secondary);
    const trashIcon = createFontIcon(icon.trash);
    const rightButton = createButton(buttonType.primary);
    const rightIcon = createFontIcon(icon.moveRight);

    // Assemble the parts
    li.appendChild(textNode);
    li.appendChild(spaceNode());
    li.appendChild(trashButton);
    trashButton.appendChild(trashIcon);
    li.appendChild(spaceNode());
    li.appendChild(rightButton);
    rightButton.append(rightIcon);
    
    return li;
}

/**
 * Sets up the event handlers and interactions for working with individual Todo items.
 * 
 * @param {Object} document An object referencing parts of the page related to Todo items
 * @param {HTMLUListElement} document.unsortedList Unordered list of Todo items
 * @param {HTMLOListElement} document.sortedList Ordered list of Todo items
 */
const setupButtonClicks = function({unsortedList, sortedList}) {
    unsortedList.addEventListener('click', (evt) => {
        /** @type {HTMLButtonElement | null} */
        const btn = getButton(evt.target);
        if(btn) {
            const child = btn.firstElementChild;
            let action = "";
            child.classList.forEach(className => {
                if(className.endsWith(icon.trash)) {
                    action = icon.trash;
                } else if(className.endsWith(icon.moveRight)){
                    action = icon.moveRight
                }
            });
            const liTag = btn.parentElement;
            switch(action) {
                case icon.trash:
                    liTag.remove();
                    break;
                case icon.moveRight:
                    sortedList.appendChild(liTag);
                    const moveUp = createButton(buttonType.primary);
                    const upIcon = createFontIcon(icon.moveUp);
                    moveUp.appendChild(upIcon);
                    liTag.replaceChild(moveUp, btn);
                    const moveDown = createButton(buttonType.primary);
                    const downIcon = createFontIcon(icon.moveDown);
                    moveDown.appendChild(downIcon);
                    liTag.appendChild(spaceNode());
                    liTag.appendChild(moveDown);

                    break;
            }
        }
    })
    // Challenge: Can you do this with ONE event handler?!

    // Only respond to clicks on buttons
    // Use the `Node.contains()` as part of determining the context
    // Distinguish the buttons based on the child's CSS Classes (see below for NOTES)
    // Move an item from unsorted to sorted using the `.appendChild()`
    // Move an item up or down in the list with `.insertBefore()`.
}

const createFontIcon = (iconName) => {
    const element = document.createElement('i');
    element.classList.add('las', iconName);
    return element;
}

const createButton = (className) => {
    const element = document.createElement('button');
    element.type = 'button';
    element.classList.add('outline', className);
    return element;
}

const spaceNode = () => document.createTextNode(' ');

const getButton = (el) => {
    let result = null;
    if(el.tagName === 'BUTTON') result = el;
    else if(el.parentElement.tagName === 'BUTTON') result = el.parentElement;
    return result;
}

// These "utility objects" offer property names for
// specific hard-coded strings. This makes my code
// more maintainable.
const icon = {
    trash: 'la-trash',
    moveRight: 'la-arrow-right',
    moveUp: 'la-arrow-circle-up',
    moveDown: 'la-arrow-circle-down'
}

const buttonType = {
    primary: 'primary',
    secondary: 'secondary'
}
// NOTES:
//
// <i class="las la-arrow-circle-up"></i>
// <i class="las la-arrow-circle-down"></i>
// <i class="las la-arrow-right"></i>
// <i class="las la-trash"></i>
//
// <button type="button"></button>
//      class="outline primary"
//      class="outline secondary"
