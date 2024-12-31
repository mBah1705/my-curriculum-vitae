import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIntroComponent } from './main-intro.component';

describe('MainIntroComponent', () => {
  let component: MainIntroComponent;
  let fixture: ComponentFixture<MainIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
