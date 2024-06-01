"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const person_js_1 = require("./person.js");
// Here we can either write or read data to this class
class Student extends person_js_1.Person {
    // private field(backing field) holding any data assigned name property
    _name;
    constructor() {
        super();
        this._name = "";
    }
    // use the getter accessor to read data from class
    get Name() {
        return this._name;
    }
    set Name(value) {
        // The value property of the set asccessor is automatically created by the compiler
        this._name = value;
    }
}
exports.Student = Student;
