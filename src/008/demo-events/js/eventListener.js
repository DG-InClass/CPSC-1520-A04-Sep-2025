/* Truths about the DOM
    All HTML Elements have:
        .addEventListener()
        .classList
            .add()
            .remove()
            .toggle()
        .tagName
*/

const showElementOnClick = function(clickElement, revealElement) {
    // This function will "register" an event listener
    clickElement.addEventListener('click', function() {
        console.log(`${clickElement.tagName} was clicked`);
        // The next line will remove the CSS class `hidden` from the element
        revealElement.classList.remove('hidden');
    });
}

const hideElementOnDoubleClick = function(clickElement, hideElement) {
    clickElement.addEventListener('dblclick', function() {
        hideElement.classList.add('hidden');
    });
}

// Export my function
export { showElementOnClick, hideElementOnDoubleClick }
