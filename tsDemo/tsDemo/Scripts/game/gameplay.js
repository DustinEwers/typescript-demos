define(["require", "exports", "./game"], function (require, exports, Game) {
    var hero;
    var currentMonster;
    function beginGame() {
        hero = new Game.Hero();
        hero.health = Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1) + 10;
        hero.maxHealth = hero.health;
        hideAllPanels();
        $("#heroStats").hide();
        $("#characterCreation").show();
    }
    function makeCharacter() {
        hero.name = $("#characterName").val();
        hero.money = 0;
        hero.badGuysKilled = 0;
        switch ($("#characterWeapon").val()) {
            case "sword":
                hero.weapon = new Game.Sword("Generic Samaurai Sword", "A Generic Samaurai Sword", Game.SwordQuality.Decent);
                break;
            case "ninja-star":
                hero.weapon = new Game.NinjaStar("Ninja Stars", "They're quite pointy...", 1);
                break;
            default:
                hero.weapon = new Game.Sword("Vorpal Samaurai Sword", "A vorpal Samaurai Sword. It silently goes snicker-snack!", Game.SwordQuality.Awesome);
                break;
        }
        updateHeroStats();
        $("#heroStats").show();
        $("#homeBaseDescription").html("You have reached your home base. What do you want to do now?");
        hideAllPanels();
        $("#homeBase").show();
    }
    function takeNap() {
        $("#homeBaseDescription").html("You took a nap. Very quietly.");
        hero.health = hero.maxHealth;
        updateHeroStats();
    }
    function startMonsterFight() {
        currentMonster = Game.MonsterFactory.getMonster();
        updateMonsterStats();
        $("#monsterAction").html("You encounter a " + currentMonster.name + ". What would you like to do?");
        hideAllPanels();
        $("#monsterFight").show();
    }
    function continueMonsterFight() {
        var heroDamage = hero.weapon.getDamage();
        var monsterDamage = currentMonster.weapon.getDamage();
        hero.attack(monsterDamage);
        currentMonster.attack(heroDamage);
        if (hero.isDead()) {
            heroDeath();
            return;
        }
        if (currentMonster.isDead()) {
            var reward = currentMonster.reward();
            hero.money = hero.money + reward.money;
            hero.badGuysKilled++;
            $("#homeBaseDescription").html("You have been dealt " + monsterDamage + " damage.<br />" + reward.message + "<br />You return to base victorious.<br />You also gained $" + reward.money);
            updateHeroStats();
            hideAllPanels();
            $("#homeBase").show();
            currentMonster = null;
            return;
        }
        $("#monsterAction").html("You have been dealt " + monsterDamage + " damage. You dealt " + heroDamage + " to the " + currentMonster.name + ". <br/>What would you like to do?");
        updateHeroStats();
        updateMonsterStats();
    }
    function leaveMonsterFight() {
        hideAllPanels();
        $("#homeBase").show();
        $("#homeBaseDescription").html("You flee in a cowardly, but stealthy fashion. Welcome back to base.");
    }
    function heroDeath() {
        hero.money = 0;
        updateHeroStats();
        hideAllPanels();
        $("#homeBase").show();
        $("#homeBaseDescription").html("You got knocked out and lost your money... bummer.");
    }
    function updateMonsterStats() {
        $("#monsterName").html(currentMonster.name);
        $("#monsterHealth").html(currentMonster.health.toString());
    }
    function updateHeroStats() {
        $("#heroStats").show();
        $("#name").html(hero.name);
        $("#health").html(hero.health.toString());
        $("#monstersKilled").html(hero.badGuysKilled.toString());
        $("#money").html("$ " + hero.money.toString());
        $("#weapon").html("" + hero.weapon.name);
        $("#weaponDescription").html("" + hero.weapon.description);
    }
    function hideAllPanels() {
        $("#characterCreation").hide();
        $("#homeBase").hide();
        $("#monsterFight").hide();
    }
    $(document).ready(function () {
        $("#charCreation").on("submit", function (e) {
            e.preventDefault();
            makeCharacter();
            return false;
        });
        $("#homeBaseRest").on("click", takeNap);
        $("#homeBaseFight").on("click", startMonsterFight);
        $("#monsterContinueFight").on("click", continueMonsterFight);
        $("#monsterRunAway").on("click", leaveMonsterFight);
        $("#startNewGame").on("click", beginGame);
    });
});
//# sourceMappingURL=gameplay.js.map