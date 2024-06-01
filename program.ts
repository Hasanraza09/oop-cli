#! /usr/bin/env node
import { log } from "console";
import { Person } from "./person.js";
import { Student } from "./student.js";
const figlet = require('figlet');
import * as readline from "readline";

(function displayBanner() {
    console.clear();
    console.log(figlet.textSync('OOP Introduction'));
})();

class Program {
  static main(): void {
    try {
      // Create a readline interface to read input from the user
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      // Prompt the user to enter something
      rl.question(
        "Type 1 if you like to talk to others and type 2 if you would rather keep to yourself: ",
        (input) => {
          let myPerson: Person = new Person();
          myPerson.askQuestion(parseInt(input));
          console.log(myPerson.getPersonality());
          rl.close();

          const rl2 = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });

          rl2.question("What is your name: ", (input) => {
            let myStudent: Student = new Student();
            myStudent.Name = input;
            console.log(
              `Your name is: ${
                myStudent.Name
              } and your Personality type is: ${myPerson.getPersonality()}`
            );
            rl2.close();
          });
        }
      );
    } catch {
      console.log("Please enter an integer value.");
    }
  }
}

// Call the main method to start the program
Program.main();
