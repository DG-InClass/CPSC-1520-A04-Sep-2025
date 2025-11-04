// Listen for and process form submissions

/**
 * 
 * @param {{form: HTMLFormElement, ouputContainer: HTMLElement}} param0 
 */
export function setupFormProcessing({form, ouputContainer}) {
    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        const form = evt.target;
    })
}