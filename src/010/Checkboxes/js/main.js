// Enter JavaScript for the exercise here...
// 1) Listen for changes to the <input type="checkbox" name="toggle" />
const toggleAll = document.querySelector('[name=toggle]');
toggleAll.addEventListener('change', function (evt) {
    const target = evt.target; // our <input type="checkbox" name="toggle" />
    console.log(`main toggle is ${target.checked ? 'on' : 'off'}`);
    //                            \___ ternary expression ____/

    const allCheckboxes = document.querySelectorAll('[name=message]');
    console.log(allCheckboxes); // a NodeList

    let index = 0;
    while (index < allCheckboxes.length) {
        allCheckboxes[index].checked = target.checked;
        index += 1;
    }
});
