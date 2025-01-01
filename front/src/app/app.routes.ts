import { Routes } from '@angular/router';
import { LanguagesComponent } from './languages/languages.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'languages', 
        pathMatch: 'full'
    },
    {
        path: 'languages',
        component: LanguagesComponent,
        data: {
            animation: 'LanguagesPage'
        }
    },
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
];
