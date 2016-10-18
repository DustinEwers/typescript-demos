import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from "../../game.service";

@Component({
    selector: 'nq-character-builder',
    template: require('./characterbuilder.component.html')
})
export class CharacterBuilderComponent {
    public name: string;
    public weapon: string;

    constructor(private game: GameService, private router: Router) {

    }

    buildCharacter() {
        this.game.createCharacter(this.name, this.weapon);
        this.router.navigate(['home']);
        return false;
    }
}