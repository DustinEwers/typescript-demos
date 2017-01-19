import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-character-builder',
  templateUrl: './character-builder.component.html',
  styleUrls: ['./character-builder.component.css']
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
