import { Component, OnInit } from '@angular/core';
import { Hero } from "../../characters";
import { GameService } from "../../game.service";


@Component({
    selector: "nq-stats",
    template: require('./stats.component.html')
})
export class StatsComponent implements OnInit {
    hero: Hero;

    constructor(private game: GameService) { }

    ngOnInit(): void {
        this.hero = this.game.getHero();
    }
}