import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ButtonTypesExample } from './example/button-types-example';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent  },
    { path: 'buttons', component: ButtonTypesExample},
    { path: 'nav', component: NavbarComponent}

];
