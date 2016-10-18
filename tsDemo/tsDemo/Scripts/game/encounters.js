define(["require", "exports", "./characters", "./weapons"], function (require, exports, characters_1, weapons_1) {
    function getRandomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var MonsterFactory = (function () {
        function MonsterFactory() {
        }
        MonsterFactory.getMonster = function () {
            var rand = Math.floor(Math.random() * 3);
            switch (rand) {
                case 0:
                    return new characters_1.Monster("Large Rat", function () { return getRandomRange(1, 5); }, new weapons_1.Claws(function () { return getRandomRange(2, 4); }));
                    break;
                case 1:
                    return new characters_1.Monster("Bat", function () { return getRandomRange(1, 3); }, new weapons_1.Claws(function () { return 1; }));
                    break;
                case 2:
                    return new characters_1.Monster("Drunken Rival Ninja", function () { return getRandomRange(3, 10); }, new weapons_1.Sword("Rusty Sword", "Not the best, really", weapons_1.SwordQuality.Janky));
                    break;
            }
        };
        return MonsterFactory;
    })();
    exports.MonsterFactory = MonsterFactory;
});
//# sourceMappingURL=encounters.js.map