var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var sn;
(function (sn) {
    var InventoryItem = (function () {
        function InventoryItem() {
        }
        return InventoryItem;
    })();
    sn.InventoryItem = InventoryItem;
    var Character = (function () {
        function Character() {
        }
        return Character;
    })();
    sn.Character = Character;
    var Hero = (function (_super) {
        __extends(Hero, _super);
        function Hero() {
            _super.apply(this, arguments);
        }
        return Hero;
    })(Character);
    sn.Hero = Hero;
})(sn || (sn = {}));
