
document.querySelector('form')
    .addEventListener('submit', function(evt) {
        evt.preventDefault(); // 👍 Always do this (for THIS course)
        const form = evt.target; // for 'submit' events, this is always the <form> element
        const formControls = form.elements; // these are all the controls on the form

        console.log(formControls); // good idea if you want to "explore" what controls are on the page/form

        // Output is being displayed as "plain text" in the browser
        const outputControl = formControls.breakdown; // <output name="breakdown" />
        let message = 'Contract Parameters Received...\n';
        outputControl.value = message;

        let isValidInput = true; // Optimistic approach
        let errorSummary = ""; // No problems to report (yet)
        /* Validation Expectations:
         *  - ✅ job duration must be greater than zero
         *  - ✅ interval selection must be made (hours vs. weeks)
         *  - ✅ base rate must be $1000 or greater
         *  - digital assets must be greater than or equal to zero
         *  - if there are digital assets, then the per-asset price must be greater than $10
         *  - if content authoring is to be included, then the per-word-rate must be between 25¢ and $1.25 inclusive
         *  - Start date must be in the future (cannot be on the same day as the quote)
         *  - Start date must not be too far in the future (max is 3 months from today)
         * 
         * Stylistically, add/remove the attribute `aria-invalid="true"` appropriately
         */

        // Core website development work
        const inputJobDuration = formControls.duration; // <input name="duration" id="job-duration" />
        // const inputJobDuration = formControls['job-duration']; // <input name="duration" id="job-duration" />
        const inputRadioHours = formControls['interval-hours']; // <input type="radio" name="interval" id="interval-hours" />
        const inputRadioWeeks = formControls['interval-weeks']; // <input type="radio" name="interval" id="interval-weeks" />
        // const inputContractPeriod = formControls.interval; // RadioNodeList: <input name="interval" />
        const inputBaseRate = formControls['base-rate']; // <input name="base-rate" />

        // Step 0) Validate user input
        //      - job duration must be greater than zero
        let jobDuration = parseFloat(inputJobDuration.value);
        if(isNaN(jobDuration)) {
            isValidInput = false;
            errorSummary += "Job duration is required.\n";
        } else {
            // Yes, it's a number, BUT
            if(jobDuration <= 0) {
                isValidInput = false;
                errorSummary += "Job duration must be greater than zero.\n";
            }
        }
        //      - interval selection must be made (hours vs. weeks)
        let missingHoursInput = !inputRadioHours.checked;
        let missingWeeksInput = !inputRadioWeeks.checked;
        if(missingHoursInput && missingWeeksInput) {
            isValidInput = false;
            errorSummary += "You must choose either Hours or Weeks for the duration.\n";
        }
        //      - base rate must be $1000 or greater
        let baseRate = parseFloat(inputBaseRate.value);
        if(isNaN(baseRate) || baseRate < 1000) {
            isValidInput = false;
            errorSummary += "A base rate is required and must be $1000 or higher.\n";
        }



        // The following are just samples of processing the input
        // let jobDuration = parseFloat(inputJobDuration.value);
        // message = `Job duration: ${jobDuration}`;
        // let inHours = inputRadioHours.checked;
        // let inWeeks = inputRadioWeeks.checked;
        // message = `\tinHours:${inHours} | inWeeks:${inWeeks}\n` + message;
        // outputControl.value += message;


        // Digital Assets (extra charges)
        const inputImageCount = formControls.digitalAssetCount; // <input name="" />
        const inputPricePerImage = formControls.digitalAssetRate; // <input name="digitalAssetRate" />

        // Content Authoring (extra charges)
        const inputIncludeContent = formControls.includeContent; // <input type="checkbox" name="includeContent" />
        const inputPerWordRate = formControls['per-word-rate']; // <input name="per-word-rate" />
        const inputStartDate = formControls['start-date']; // <input type="date" name="start-date" />

        // Step 1) Decide if I process or report errors
        if(isValidInput) {
            // Step 2) Do all the processing of the user inputs
            // TODO: Create the estimate...
        } else {
            // Step 3) Report that the user needs to try again
            outputControl.value = errorSummary;
        }
    });
