var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fName = "Jane";
var likesBacon = true;
var height = 5.5;
var whoKnows = "wombat";
whoKnows = 42;
whoKnows = true;
var notRequired = "blah";
var list = [1, 2, 3];
var Season;
(function (Season) {
    Season[Season["Summer"] = 0] = "Summer";
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Fall"] = 2] = "Fall";
    Season[Season["Spring"] = 3] = "Spring";
})(Season || (Season = {}));
;
var c = Season.Winter;
function genericFunction(arg) {
    console.log(arg);
    return arg;
}
var bar = genericFunction("test");
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
}());
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
    Squirrel.speciesName = "Sciuridae";
    return Squirrel;
}(Animal));
var bobTheSquirrel = new Squirrel("Bob");
bobTheSquirrel.tailLength = 3;
bobTheSquirrel.move(5);
console.log(Squirrel.speciesName);
var BlueJay = (function (_super) {
    __extends(BlueJay, _super);
    function BlueJay() {
        _super.apply(this, arguments);
        this.numberOfLegs = 2;
        this.hasWings = true;
    }
    return BlueJay;
}(Animal));
var StringValidation;
(function (StringValidation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var anRegexp = /^[A-Za-z0-9]+$/;
    var LettersOnlyValidation = (function () {
        function LettersOnlyValidation() {
        }
        LettersOnlyValidation.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidation;
    }());
    StringValidation.LettersOnlyValidation = LettersOnlyValidation;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    function IsAlphaNumeric(s) {
        return anRegexp.test(s);
    }
    StringValidation.IsAlphaNumeric = IsAlphaNumeric;
})(StringValidation || (StringValidation = {}));
var strings = ['Hello', '98052', '101', "!@#!@#"];
var validators = {};
validators['Letters only'] = new StringValidation.LettersOnlyValidation();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
strings.forEach(function (s) { return console.log(StringValidation.IsAlphaNumeric(s)); });
//# sourceMappingURL=OnePageGuide.js.map