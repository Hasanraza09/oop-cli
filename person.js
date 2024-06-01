"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    // Declare a field to represent the personality
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extravert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You're still a Mystery!";
        }
    }
    // This method returns the value of personality
    getPersonality() {
        return this.personality;
    }
}
exports.Person = Person;
