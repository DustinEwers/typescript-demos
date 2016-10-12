import { Component, Input } from '@angular/core';
import { Hero } from "../../characters";

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
})
export class NavMenuComponent {
}
