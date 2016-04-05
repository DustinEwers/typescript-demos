var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var Character = (function () {
        function Character() {
        }
        Character.prototype.attack = function (damage) {
            this.health -= damage;
        };
        Character.prototype.isDead = function () {
            return this.health <= 0;
        };
        return Character;
    })();
    exports.Character = Character;
    var Hero = (function (_super) {
        __extends(Hero, _super);
        function Hero() {
            _super.apply(this, arguments);
        }
        return Hero;
    })(Character);
    exports.Hero = Hero;
    var Monster = (function (_super) {
        __extends(Monster, _super);
        function Monster(_name, _health, _weapon) {
            _super.call(this);
            this.name = _name;
            this.weapon = _weapon;
            this.health = _health();
        }
        Monster.prototype.reward = function () {
            return {
                money: Math.floor((Math.random() * 10) * 2),
                message: this.name + " dies a horrible death"
            };
        };
        return Monster;
    })(Character);
    exports.Monster = Monster;
});
//# sourceMappingURL=characters.js.map