import { Skill } from "./skill.model";

export const SKILLS_DATA: Skill[] = [
  {skill: 'Angular', theoryWeight: 90, practicalWeight: 90, usedInThisApp: true, challenges: ['RxJS, ng-19', 'Angular Material CDK']},
  {skill: 'Typescript', theoryWeight: 80, practicalWeight: 85, usedInThisApp: true},
  {skill: 'Javascript', theoryWeight: 80, practicalWeight: 70, usedInThisApp: true},
  {skill: 'Git', theoryWeight: 60, practicalWeight: 65, usedInThisApp: true, challenges: ['merge', 'rebase', 'cherry-pick', 'revert']},
  {skill: 'TailwindCSS', theoryWeight: 70, practicalWeight: 75, usedInThisApp: true, challenges: ['Using preprocessors', 'Optimizing for production', 'Manual tweacking']},
  {skill: 'Angular Material', theoryWeight: 75, practicalWeight: 75, usedInThisApp: true},
  {skill: 'RxJS', theoryWeight: 75, practicalWeight: 55, usedInThisApp: true, challenges: ['To master operators']},
  {skill: 'NgRx', theoryWeight: 70, practicalWeight: 55, usedInThisApp: false, challenges: ['To master the pattern']},
  {skill: 'NodeJS', theoryWeight: 65, practicalWeight: 30, usedInThisApp: true, challenges: ['Event programming']},
  {skill: 'Unit Tests', theoryWeight: 85, practicalWeight: 85, usedInThisApp: true},
  {skill: 'Express', theoryWeight: 60, practicalWeight: 25, usedInThisApp: true, challenges: ['middlewares', 'templating', 'routing']},
  {skill: 'HTML/CSS', theoryWeight: 85, practicalWeight: 90, usedInThisApp: true},
  {skill: 'npm/pnpm', theoryWeight: 55, practicalWeight: 50, usedInThisApp: true},
  {skill: 'ESLint/Prettier', theoryWeight: 75, practicalWeight: 70, usedInThisApp: false},
  {skill: 'SSR/SSG (Angular)', theoryWeight: 45, practicalWeight: 55, usedInThisApp: true},
  {skill: 'PWA (Angular)', theoryWeight: 55, practicalWeight: 65, usedInThisApp: false},
];
