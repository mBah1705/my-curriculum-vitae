import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressComponent } from './progress.component';
import { ComponentRef } from '@angular/core';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let componentRef: ComponentRef<ProgressComponent>;
  let fixture: ComponentFixture<ProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [MatProgressBarModule, ProgressComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef
    componentRef.setInput('value', 75)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value', () => {
    expect(component.value).toBeDefined();
  });

  it('should compute widthStyle correctly', () => {
    fixture.detectChanges();
    expect(component.widthStyle()).toBe('75%');
  });

  it('should update widthStyle when value changes', () => {
    componentRef.setInput('value', 30)
    fixture.detectChanges();
    expect(component.widthStyle()).toBe('30%');
  });
});
