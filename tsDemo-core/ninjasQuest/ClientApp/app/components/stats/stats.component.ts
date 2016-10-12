import { Component } from '@angular/core';
import { Hero } from "../../characters";
import { GameService } from "../../game.service";


@Component({
    selector: "stats",
    template: require('./stats.component.html')
})
export class StatsComponent {
    hero: Hero;

    constructor(private game: GameService) { }

    ngOnInit(): void {
        this.hero = this.game.getHero();
    }
}