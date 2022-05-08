import {RouterModule, Routes} from '@angular/router';
import { ShifumiComponent } from './shifumi/shifumi.component';
import { BotComponent } from './bot/bot.component';
import { AccueilComponent } from './accueil/accueil.component';

const APP_ROUTING: Routes = [
    {path: '', component: AccueilComponent},
    {path: 'shifumi', component: ShifumiComponent},
    {path: 'bot', component: BotComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);