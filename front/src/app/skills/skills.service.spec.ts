import { TestBed } from '@angular/core/testing';
import { SkillsService } from './skills.service';
import { SKILLS_DATA } from './skills.data';


describe('SkillsService', () => {
  let service: SkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SkillsService
      ]
    });
    service = TestBed.inject(SkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetchSkills$ should return data', () => {
    service.fetchSkills$().subscribe(data => {
      expect(data).toBeTruthy();
      expect(data).toEqual(SKILLS_DATA);
    });
  });
});