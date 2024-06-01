#! /usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_js_1 = require("./person.js");
const student_js_1 = require("./student.js");
const figlet = require('figlet');
const readline = __importStar(require("readline"));
(function displayBanner() {
    console.clear();
    console.log(figlet.textSync('OOP Introduction'));
})();
class Program {
    static main() {
        try {
            // Create a readline interface to read input from the user
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            // Prompt the user to enter something
            rl.question("Type 1 if you like to talk to others and type 2 if you would rather keep to yourself: ", (input) => {
                let myPerson = new person_js_1.Person();
                myPerson.askQuestion(parseInt(input));
                console.log(myPerson.getPersonality());
                rl.close();
                const rl2 = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout,
                });
                rl2.question("What is your name: ", (input) => {
                    let myStudent = new student_js_1.Student();
                    myStudent.Name = input;
                    console.log(`Your name is: ${myStudent.Name} and your Personality type is: ${myPerson.getPersonality()}`);
                    rl2.close();
                });
            });
        }
        catch {
            console.log("Please enter an integer value.");
        }
    }
}
// Call the main method to start the program
Program.main();
