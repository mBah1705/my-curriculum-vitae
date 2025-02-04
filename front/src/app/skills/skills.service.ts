import { Injectable } from '@angular/core';
import {  of } from 'rxjs';
import { SKILLS_DATA } from './skills.data';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
   readonly fetchSkills$ = () => of(SKILLS_DATA)
}
