import { Routes } from '@angular/router';
import { LanguagesComponent } from './languages/languages.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'experiences',
        component: ExperiencesComponent,
        data: {
            animation: 'ExperiencesPage'
        }
    },
    {
        path: 'skills',
        component: SkillsComponent,
        data: {
            animation: 'SkillsPage'
        }
    },
    {
        path: 'education',
        component: EducationComponent,
        data: {
            animation: 'EducationPage'
        }
    },
    {
        path: 'languages',
        component: LanguagesComponent,
        data: {
            animation: 'LanguagesPage'
        }
    },
    {
        path: '', 
        redirectTo: '/experiences', 
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {
            animation: 'PageNotFoundPage'
        }
    },

];
