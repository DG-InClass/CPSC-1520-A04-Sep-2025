const handleClick = function(event) {
    // Any function that is intended as an "event handler"
    // or "event listener" will be given an Event object
    // when it is called by the browser.
    // TODO: Use for exploration purposes
    const target = event.target;
    //                  \_____/ <- this is what DOM element the event
    //                             is associated with
    console.log(target.tagName); // Every HTML Element has a property called
                                 // .tagName
    document.getElementById('feedback').innerText = `Clicked from ${target.tagName}`;
}

// All I need to do in order to make this function "public" or usable
// outside of this script file is to export the function.
export { handleClick }
