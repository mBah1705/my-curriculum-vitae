import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentActionsComponent } from './content-actions.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { provideRouter } from '@angular/router';

fdescribe('ContentActionsComponent', () => {
  let component: ContentActionsComponent;
  let fixture: ComponentFixture<ContentActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        MatButtonModule,
        ContentActionsComponent,
      ],
      providers: [
        provideRouter([]),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have actions defined', () => {
    expect(component.actions).toBeDefined();
    expect(component.actions.length).toBeGreaterThan(0);
  });

  it('should render buttons for each action', () => {
    const buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('a[type="button"]'));
    console.log(fixture.debugElement);
    
    expect(buttons.length).toBe(component.actions.length);
  });

  it('should unsubscribe from router events on destroy', () => {
    if(component.subscription) {
      spyOn(component.subscription, 'unsubscribe');
    }
    component.ngOnDestroy();
    expect(component.subscription?.unsubscribe).toHaveBeenCalled();
  });
});
