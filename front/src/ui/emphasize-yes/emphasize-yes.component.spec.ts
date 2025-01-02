import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphasizeYesComponent } from './emphasize-yes.component';

describe('EmphasizeYesComponent', () => {
  let component: EmphasizeYesComponent;
  let fixture: ComponentFixture<EmphasizeYesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmphasizeYesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmphasizeYesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
