import { Routes } from '@angular/router';
import { ButtonComponents } from './example/button.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    { path: 'buttons', component: ButtonComponents},
    { path: 'nav', component: NavbarComponent}
];
