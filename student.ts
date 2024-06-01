import { Person } from './person.js';

// Here we can either write or read data to this class
export class Student extends Person{
    // private field(backing field) holding any data assigned name property
    private _name: string;

    public constructor(){
        super();    
        this._name = ""
    }

    // use the getter accessor to read data from class
    get Name(): string{
        return this._name;
    }
    set Name(value: string){
        // The value property of the set asccessor is automatically created by the compiler
        this._name = value;
    }
}