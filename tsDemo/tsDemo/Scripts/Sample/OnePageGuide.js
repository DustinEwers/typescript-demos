// This is the single page guide to TypeScript
// It doesn't include everything, but it does include the important stuff
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// 1.Types
// Types are optional, but useful. 
var name = "Jane";
var likesBacon = true;
var height = 5.5;
var whoKnows = "wombat"; // The any type is a catch all type
whoKnows = 42;
whoKnows = true;
var notRequired = "blah"; // Types are implicit, just like C#
// notRequired = 3; // Won't compile
// notRequired = true; // Won't compile
var list = [1, 2, 3];
// list = ["apple", "bananna"]; // Won't compile
// Enums
var Season;
(function (Season) {
    Season[Season["Summer"] = 0] = "Summer";
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Fall"] = 2] = "Fall";
    Season[Season["Spring"] = 3] = "Spring";
})(Season || (Season = {}));
;
var c = Season.Winter;
// Generics work a lot like they do in C#
function genericFunction(arg) {
    console.log(arg);
    return arg;
}
// Can call the generic function implicit or explicit
var bar = genericFunction("test");
// var foo = genericFunction<Number>("test"); // Note how it gets mad when you send in the wrong type
// 2. Classes 
// Classes in TypeScript have a more standard OOP feel to them
var Animal = (function () {
    // constructor
    function Animal(theName) {
        this.name = theName;
    }
    // method definition
    Animal.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
})();
var Squirrel = (function (_super) {
    __extends(Squirrel, _super);
    function Squirrel() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Squirrel.prototype, "tailLength", {
        get: function () {
            return this._tailLength;
        },
        set: function (bodyLength) {
            this._tailLength = bodyLength / 2;
        },
        enumerable: true,
        configurable: true
    });
    // Can do static variables
    Squirrel.speciesName = "Sciuridae";
    return Squirrel;
})(Animal);
var bobTheSquirrel = new Squirrel("Bob");
bobTheSquirrel.tailLength = 3;
bobTheSquirrel.move(5);
console.log(Squirrel.speciesName);
// Note how even though IAnimal inherits Animals, it only adds the fields to the interface
//class Robin implements IAnimal {
//    numberOfLegs: number = 2;
//    hasWings: boolean = true;
//}
// This is will get you the members from animal and the IAnimal implementation
var BlueJay = (function (_super) {
    __extends(BlueJay, _super);
    function BlueJay() {
        _super.apply(this, arguments);
        this.numberOfLegs = 2;
        this.hasWings = true;
    }
    return BlueJay;
})(Animal);
// 3. Modules
// This feature makes it way easier to build big applications
var StringValidation;
(function (StringValidation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var anRegexp = /^[A-Za-z0-9]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    StringValidation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    })();
    function IsAlphaNumeric(s) {
        return anRegexp.test(s);
    }
    StringValidation.IsAlphaNumeric = IsAlphaNumeric;
})(StringValidation || (StringValidation = {}));
var strings = ['Hello', '98052', '101', "!@#!@#"];
// Validators to use
var validators = {};
validators['Letters only'] = new StringValidation.LettersOnlyValidator();
//validators['ZIP code'] = new StringValidation.ZipCodeValidator(); // Can't use this because it's not exported
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
strings.forEach(function (s) { return console.log(StringValidation.IsAlphaNumeric(s)); });
