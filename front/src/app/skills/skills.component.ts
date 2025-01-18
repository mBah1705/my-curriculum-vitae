import { Component, inject, OnDestroy, signal } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { ProgressComponent } from '../../ui/progress/progress.component';
import { EmphasizeYesComponent } from '../../ui/emphasize-yes/emphasize-yes.component';
import { SkillsService } from './skills.service';
import { Skill } from './skill.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-skills',
  imports: [MatTableModule, TranslateModule, ProgressComponent, EmphasizeYesComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnDestroy{
  displayedColumns: string[] = ['skill', 'theoryWeight', 'practicalWeight', 'usedInThisApp', 'challenges']
  dataSource = signal<Skill[]>([])
  skeletonArray = [...Array(16).keys()]
  skillsFetcher = inject(SkillsService)
  fetchSkillSubscription: Subscription | undefined = undefined


  constructor() {
    this.fetchSkillSubscription = this.skillsFetcher.fetchSkills$().subscribe(data => {
      this.dataSource.set(data)
    })
  }

  ngOnDestroy() {
    this.fetchSkillSubscription?.unsubscribe()
  }
}
