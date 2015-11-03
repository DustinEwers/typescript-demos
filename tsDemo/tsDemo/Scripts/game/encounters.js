var Game;
(function (Game) {
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
                    return new Game.Monster("Large Rat", function () { return getRandomRange(1, 5); }, new Game.Claws(function () { return getRandomRange(2, 4); }));
                    break;
                case 1:
                    return new Game.Monster("Bat", function () { return getRandomRange(1, 3); }, new Game.Claws(function () { return 1; }));
                    break;
                case 2:
                    return new Game.Monster("Drunken Rival Ninja", function () { return getRandomRange(3, 10); }, new Game.Sword("Rusty Sword", "Not the best, really", Game.SwordQuality.Janky));
                    break;
            }
        };
        return MonsterFactory;
    })();
    Game.MonsterFactory = MonsterFactory;
})(Game || (Game = {}));
//# sourceMappingURL=encounters.js.map