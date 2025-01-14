import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, FormsModule, TranslateModule.forRoot()],
      providers: [
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the language to "fr"', () => {
    expect(component.language()).toBe('fr');
  });

  it('should add three languages to the translate service', () => {
    expect(component['translateService'].langs).toEqual(['fr', 'en', 'nl']);
  });

  it('should switch the language to "en"', () => {
    const switchLanguageSpy = spyOn(component['translateService'], 'use').and.callThrough();
    component.language.set('en');
    component.switchLanguage();
    expect(switchLanguageSpy).toHaveBeenCalledWith('en');
    expect(component.language()).toBe('en');
  });

  it('should switch the language to "en" on click on the EN button', () => {
    const button = fixture.debugElement.query(By.css('mat-button-toggle[value="en"]')).nativeElement
    .querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(component.language()).toBe('en');
  });

  it('should switch the language to "fr" on click on the FR button', () => {
    const button = fixture.debugElement.query(By.css('mat-button-toggle[value="fr"]')).nativeElement
    .querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(component.language()).toBe('fr');
  });

  it('should switch the language to "nl" on click on the NL button', () => {
    const button = fixture.debugElement.query(By.css('mat-button-toggle[value="nl"]')).nativeElement
    .querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(component.language()).toBe('nl');
  });

  it('should set the theme to "dark" in localStorage and add "dark" class to document element', () => {
    component.fontStyle.set('dark');
    component.computeMode();
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBeTrue();
  });

  it('should set the theme to "bright" in localStorage and remove "dark" class from document element', () => {
    component.fontStyle.set('bright');
    component.computeMode();
    expect(localStorage.getItem('theme')).toBe('bright');
    expect(document.documentElement.classList.contains('dark')).toBeFalse();
  });

  it('should navigate to the GitHub page', () => {
    const openSpy = spyOn(window, 'open');
    component.navigateToGithubPage();
    expect(openSpy).toHaveBeenCalledWith('https://github.com/mBah1705/my-curriculum-vitae', "_blank")
  });

  it('should set the font style to "bright"', () => {
    expect(component.fontStyle()).toBe('bright');
  });

  it('should set the font style to "dark" on click on the header.darkMode button', () => {
    const button = fixture.debugElement.query(By.css('mat-button-toggle[value="dark"]')).nativeElement
    .querySelector('button');
    button.click();
    expect(component.fontStyle()).toBe('dark');
  });
});
