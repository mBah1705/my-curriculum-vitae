import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { TranslateModule } from '@ngx-translate/core';
import { SkillsService } from './skills.service';
import { signal } from '@angular/core';
import { Skill } from './skill.model';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  const skillsServiceStub = {
    fetchSkills: () => {
      return signal<Skill[]>([{
        skill: 'test-skill',
        theoryWeight: 1,
        practicalWeight: 1,
        usedInThisApp: true,
        challenges: ['test-challenge']
      }]);
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent, TranslateModule.forRoot()],
      providers: [{ provide: SkillsService, useValue: skillsServiceStub }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch skills', () => {
    expect(component.dataSource()).toEqual([{
      skill: 'test-skill',
      theoryWeight: 1,
      practicalWeight: 1,
      usedInThisApp: true,
      challenges: ['test-challenge']
    }]);
  });
});
