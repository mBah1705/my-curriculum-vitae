import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { ProgressComponent } from '../../ui/progress/progress.component';

export interface Skill {
  skill: string;
  theoryWeight: number;
  practicalWeight: number;
  usedInThisApp: boolean,
  challenges?: string[]
}

const ELEMENT_DATA: Skill[] = [
  {skill: 'Angular', theoryWeight: 90, practicalWeight: 90, usedInThisApp: true, challenges: ['RxJS, ng-19', 'Angular Material CDK']},
  {skill: 'Typescript', theoryWeight: 80, practicalWeight: 85, usedInThisApp: true},
  {skill: 'Javascript', theoryWeight: 80, practicalWeight: 70, usedInThisApp: true},
  {skill: 'Git', theoryWeight: 60, practicalWeight: 65, usedInThisApp: true, challenges: ['merge', 'rebase', 'cherry-pick', 'revert']},
  {skill: 'TailwindCSS', theoryWeight: 70, practicalWeight: 75, usedInThisApp: true, challenges: ['Using preprocessors', 'Optimizing for production', 'Manual tweacking']},
  {skill: 'Angular Material', theoryWeight: 75, practicalWeight: 75, usedInThisApp: true},
  {skill: 'RxJS', theoryWeight: 75, practicalWeight: 55, usedInThisApp: true, challenges: ['To master operators']},
  {skill: 'NgRx', theoryWeight: 70, practicalWeight: 55, usedInThisApp: false, challenges: ['To master pattern']},
  {skill: 'NodeJS', theoryWeight: 65, practicalWeight: 30, usedInThisApp: true, challenges: ['Event programming']},
  {skill: 'Unit Tests', theoryWeight: 85, practicalWeight: 85, usedInThisApp: true},
  {skill: 'Express', theoryWeight: 60, practicalWeight: 25, usedInThisApp: true, challenges: ['middlewares', 'templating', 'routing']},
  {skill: 'HTML/CSS', theoryWeight: 85, practicalWeight: 90, usedInThisApp: true},
  {skill: 'npm/pnpm', theoryWeight: 55, practicalWeight: 50, usedInThisApp: true},
  {skill: 'ESLint/Prettier', theoryWeight: 75, practicalWeight: 70, usedInThisApp: false},
  {skill: 'SSR (Angular)', theoryWeight: 45, practicalWeight: 55, usedInThisApp: true},
  {skill: 'PWA (Angular)', theoryWeight: 55, practicalWeight: 65, usedInThisApp: false},
];


@Component({
  selector: 'app-skills',
  imports: [MatTableModule, TranslateModule, ProgressComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  displayedColumns: string[] = ['skill', 'theoryWeight', 'practicalWeight', 'usedInThisApp', 'challenges'];
  dataSource = ELEMENT_DATA;
}
