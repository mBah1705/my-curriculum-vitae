import { Routes } from '@angular/router';
import { LanguagesComponent } from './languages/languages.component';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'languages', 
        pathMatch: 'full'
    },
    {
        path: 'languages',
        component: LanguagesComponent
    }
];
