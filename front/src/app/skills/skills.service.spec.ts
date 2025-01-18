import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { SkillsService } from './skills.service';
import { Skill } from './skill.model';
import { provideHttpClient } from '@angular/common/http';

const mockSkills: Skill[] = [
  {
    skill: 'Angular',
    theoryWeight: 50,
    practicalWeight: 50,
    usedInThisApp: true,
    challenges: ['Challenge 1', 'Challenge 2']
  },
  {
    skill: 'React',
    theoryWeight: 30,
    practicalWeight: 70,
    usedInThisApp: false,
    challenges: ['Challenge 1', 'Challenge 2'] 
  }
];

describe('SkillsService', () => {
  let service: SkillsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SkillsService, 
        provideHttpClient(), 
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(SkillsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch skills', () => {    
    service.fetchSkills$().subscribe(data => {
      expect(data).toEqual(mockSkills);
    });

    const req = httpTestingController.expectOne('https://my-curriculum-vitae-g5sp.onrender.com');
    expect(req.request.method).toEqual('GET');
    req.flush(mockSkills)
  });

  it('should handle error when fetching skills', () => {
    service.fetchSkills$().subscribe({
      next: () => fail('should have failed with the 404 error'),
      error: (e) => {
        expect(e.message).toContain('Something bad happened; please try again later.');
      }
    });

    const req = httpTestingController.expectOne('https://my-curriculum-vitae-g5sp.onrender.com');
    req.flush('Invalid request', {status: 404, statusText: 'Not Found'});
  });
});