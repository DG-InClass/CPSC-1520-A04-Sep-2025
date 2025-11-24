// A class is a blueprint for what an object looks like (information)
// and how the object behaves (instructions)

const Rectangle = class {
    // Information (properties/fields)
    #created;   // Private property - #
    height;     // Public property
    width;      // Public property

    constructor(height, width) {
        // The job of a constructor is to make sure
        // the object's properties/fields have
        // meaningful value
        this.height = height;
        this.width = width;
        this.#created = new Date(); // when this object was created
        Rectangle.#count++; // increment each time a rectangle is created
    }

    report() {
        console.log(`This box was made on ${this.#created.toLocaleTimeString()}`);
    }

    // We use "getters" to calculate information from whatever other data is in our object
    get area() {
        return this.width * this.height;
    }

    get perimeter() {
        return (this.width + this.height) * 2;
    }

    // Static members of the Rectangle class
    static #count = 0; // Private, static variable/field

    // A "getter" function
    static get count() {
        return Rectangle.#count;
    }
}

const shapes = [];

document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    const w = 10;
    const h = 5;
    
    // Create the Rectangle object.
    const box = new Rectangle(h, w); // Instantiate the class
    
    shapes.push(box);
    console.log('box created:', box);
    console.log(`I have ${Rectangle.count} boxes.`);

    box.report(); // call my method/function of my Rectangle instance
    console.log(`There are ${Rectangle.count} boxes so far.`);
});
