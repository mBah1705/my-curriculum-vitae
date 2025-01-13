import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ExperiencesComponent } from './experiences.component';
import { avivAngularExperience, avivReactExperience, cvAppExperience, qDelftExperience } from './experiences.data';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;
  const experiencesServiceStub = {
    experiences: [],
    addExperience: () => {},
    resetExperiences: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesComponent, TranslateModule.forRoot()],
      providers: [{ provide: ExperiencesComponent, useValue: experiencesServiceStub }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add experiences on init', () => {
    const addExperienceSpy = spyOn(component.experiencesBuilder, 'addExperience');
    component.ngOnInit();
    expect(addExperienceSpy).toHaveBeenCalledTimes(4);
  });

  it('should call addExperience with all experiences', () => {
    const addExperienceSpy = spyOn(component.experiencesBuilder, 'addExperience');
    component.ngOnInit();
    expect(addExperienceSpy).toHaveBeenCalledWith(cvAppExperience);
    expect(addExperienceSpy).toHaveBeenCalledWith(avivAngularExperience);
    expect(addExperienceSpy).toHaveBeenCalledWith(qDelftExperience);
    expect(addExperienceSpy).toHaveBeenCalledWith(avivReactExperience);
  });

  it('should reset experiences on destroy', () => {
    const resetExperiencesSpy = spyOn(component.experiencesBuilder, 'resetExperiences');
    component.ngOnDestroy();
    expect(resetExperiencesSpy).toHaveBeenCalled();
  });
});
