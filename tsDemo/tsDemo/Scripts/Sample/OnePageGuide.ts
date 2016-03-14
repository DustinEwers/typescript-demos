// This is the single page guide to TypeScript
// It doesn't include everything, but it does include the important stuff

// 1.Types
// Types are optional, but useful. 

var name: string = "Jane";
var likesBacon: boolean = true;
var height: number = 5.5;
var whoKnows: any = "wombat"; // The any type is a catch all type
whoKnows = 42;
whoKnows = true;

var notRequired = "blah"; // Types are implicit, just like C#
// notRequired = 3; // Won't compile
// notRequired = true; // Won't compile

var list: number[] = [1, 2, 3];
//list = ["apple", "bananna"]; // Won't compile

// Enums
enum Season { Summer, Winter, Fall, Spring };
var c: Season = Season.Winter;

// Generics work a lot like they do in C#
function genericFunction<T>(arg: T): T {
    console.log(arg);
    return arg;
}

// Can call the generic function implicit or explicit
var bar = genericFunction("test");
// var foo = genericFunction<Number>("test"); // Note how it gets mad when you send in the wrong type

// 2. Classes 
// Classes in TypeScript have a more standard OOP feel to them

class Animal {
    name: string; // members are public by default
    private somethingPrivate: string; // can make things private though
    
    // method definition
    move(meters: number) {
        console.log(`${this.name} moved ${meters}m.`); // You can do string interpolation to simplify string creation. 
    }

    // constructor
    constructor(theName: string) { this.name = theName; }
}

class Squirrel extends Animal {
    // Can do static variables
    static speciesName: string = "Sciuridae";

    // and also getters and setters
    private _tailLength: number;

    get tailLength(): number {
        return this._tailLength;
    }

    set tailLength(bodyLength: number) {
        this._tailLength = bodyLength / 2;
    }
}

var bobTheSquirrel = new Squirrel("Bob");
bobTheSquirrel.tailLength = 3;
bobTheSquirrel.move(5);

console.log(Squirrel.speciesName);

// 2. Interfaces 

// Interfaces can inherit fields from classes
interface IAnimal extends Animal {
    numberOfLegs: number;
    hasWings: boolean;
}

// Note how even though IAnimal inherits Animals, it only adds the fields to the interface
//class Robin implements IAnimal {
//    numberOfLegs: number = 2;
//    hasWings: boolean = true;
//}

// This is will get you the members from animal and the IAnimal implementation
class BlueJay extends Animal implements IAnimal {
    numberOfLegs: number = 2;
    hasWings: boolean = true;
}

// 3. Modules
// This feature makes it way easier to build big applications

module StringValidation {
    export interface IStringValidator {
        isAcceptable(s: string): boolean;
    }

    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var anRegexp = /^[A-Za-z0-9]+$/;

    export class LettersOnlyValidation implements IStringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    class ZipCodeValidator implements IStringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }

    export function IsAlphaNumeric(s: string) {
        return anRegexp.test(s);
    }
}

var strings = ['Hello', '98052', '101', "!@#!@#"];
// Validators to use
var validators: { [s: string]: StringValidation.IStringValidator; } = {};
validators['Letters only'] = new StringValidation.LettersOnlyValidation();

//validators['ZIP code'] = new StringValidation.ZipCodeValidator(); // Can't use this because it's not exported

// Show whether each string passed each validator
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});

strings.forEach(s => console.log(StringValidation.IsAlphaNumeric(s)));