const addDots = function() {
    let myOutput = document.getElementById('dots');
    myOutput.innerText += '.';
    myOutput.setAttribute('title', `There are ${myOutput.innerText.length} dots`);
}

// Start an interval
let cancellationRef = setInterval(addDots, 1250); // 1.25 seconds

// Add an event listener to the button that will stop the interval.
document.querySelector('button')
        .addEventListener('click', function(evt) {
            console.log('Button clicked');
            if(cancellationRef) {
                clearInterval(cancellationRef);
                cancellationRef = 0; // so that I don't try to stop the interval
                evt.target.innerText = "Continue Interval";
            } else {
                // Re-starting means creating a new interval/timer
                cancellationRef = setInterval(addDots, 1250);
                evt.target.innerText = "Stop Interval";
            }
        });
