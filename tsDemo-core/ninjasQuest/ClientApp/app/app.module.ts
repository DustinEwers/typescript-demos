import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterBuilderComponent } from './components/characterbuilder/characterbuilder.component';
import { StatsComponent } from './components/stats/stats.component';
import { EncounterComponent } from './components/encounter/encounter.component';
import { GameService } from './game.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CharacterBuilderComponent,
        StatsComponent,
        EncounterComponent
    ],
    providers: [ GameService ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'start', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'encounter', component: EncounterComponent },
            { path: 'start', component: CharacterBuilderComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {


}
