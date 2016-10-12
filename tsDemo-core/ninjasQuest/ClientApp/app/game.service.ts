import { Injectable } from '@angular/core';
import { Hero } from './characters';
import * as Weapon from './weapons';
import { Dice } from './dice';

@Injectable()
export class GameService {
    private hero: Hero;
    private message: string;


    createCharacter(name: string, weapon: string) {
        this.hero = new Hero();

        this.hero.name = name;
        this.hero.health = Dice.rollDice(10, 3, 2);
        this.hero.maxHealth = this.hero.health;
        this.hero.money = 0;
        this.hero.badGuysKilled = 0;

        switch (weapon) {
            case "sword":
                this.hero.weapon = new Weapon.Sword("Generic Samaurai Sword", "A Generic Samaurai Sword", Weapon.SwordQuality.Decent);
                break;
            case "ninja-star":
                this.hero.weapon = new Weapon.NinjaStar("Ninja Stars", "They're quite pointy...", 1);
                break;
            default:
                this.hero.weapon = new Weapon.Sword("Vorpal Samaurai Sword", "A vorpal Samaurai Sword. It silently goes snicker-snack!", Weapon.SwordQuality.Awesome);
                break;
        }
    }
    
    getHero(): Hero {
        return this.hero;
    }

    setMessage(msg: string): void {
        this.message = msg;
    }

    getAndClearMessage(): string {
        var msg = this.message;
        this.message = null;
        return msg;
    }
}