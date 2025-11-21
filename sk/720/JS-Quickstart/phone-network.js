class Phone {
    #number;
    #messages = [];
    constructor(phoneNumber) {
        this.#number = phoneNumber;
    }
    get number() {
        return this.number;
    }
    get messages() {
        return this.#messages.length;
    }
    receive(message) {
        message.received = new Date();
        this.#messages.push(message);
    }
    read() {
        // Only return a copy of the messages
        return [...this.#messages];
    }
}

class Message {
    #text;
    #sender;
    #timestamp;
    constructor({text, sender, timestamp = new Date()}) {
        this.#text = text;
        this.#sender = sender;
        this.#timestamp = timestamp;
    }
    get text() {
        return this.#text;
    }
    get sender() {
        return this.#sender;
    }

    toString() {
        return `<from ${sender} on ${this.#timestamp}>: ${message}`;
    }
}

