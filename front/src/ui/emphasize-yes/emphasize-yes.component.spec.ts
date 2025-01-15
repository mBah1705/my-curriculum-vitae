import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphasizeYesComponent } from './emphasize-yes.component';
import { ComponentRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ConvertBoolPipe } from '../../app/convert-bool/convert-bool.pipe';

describe('EmphasizeYesComponent', () => {
  let component: EmphasizeYesComponent;
  let componentRef: ComponentRef<EmphasizeYesComponent>
  let fixture: ComponentFixture<EmphasizeYesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmphasizeYesComponent, TranslateModule.forRoot(), ConvertBoolPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmphasizeYesComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('value', false)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value', () => {
    expect(component.value).toBeDefined()
    expect(component.value()).toBe(false)
  })

  it('should update the value to true', () => {
    componentRef.setInput('value', true);
    fixture.detectChanges();
    expect(component.value()).toBe(true);
  });

  it('should update the value to undefined', () => {
    componentRef.setInput('value', undefined);
    fixture.detectChanges();
    expect(component.value()).toBeUndefined();
  });

  it('should display "Yes" in the template when value is true', () => {
    componentRef.setInput('value', true);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('skills-table.yes');
  });

  it('should display "No" in the template when value is false', () => {
    componentRef.setInput('value', false);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('skills-table.no');
  });
});
