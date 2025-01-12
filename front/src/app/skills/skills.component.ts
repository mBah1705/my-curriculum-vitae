import { Component, inject, signal } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { ProgressComponent } from '../../ui/progress/progress.component';
import { EmphasizeYesComponent } from '../../ui/emphasize-yes/emphasize-yes.component';
import { SkillsService } from './skills.service';
import { Skill } from './skill.model';


@Component({
  selector: 'app-skills',
  imports: [MatTableModule, TranslateModule, ProgressComponent, EmphasizeYesComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  displayedColumns: string[] = ['skill', 'theoryWeight', 'practicalWeight', 'usedInThisApp', 'challenges']
  dataSource = signal<Skill[]>([])
  skeletonArray = [...Array(16).keys()]
  skillsFetcher = inject(SkillsService)

  constructor() {
    this.dataSource = this.skillsFetcher.fetchSkills()
  }
}
