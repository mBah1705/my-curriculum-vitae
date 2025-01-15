import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, TranslateModule.forRoot()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the correct URL', () => {
    const navigateSpy = spyOn(window, 'open')
    fixture.nativeElement.querySelector('button').click();
    expect(navigateSpy).toHaveBeenCalledWith('https://www.linkedin.com/in/mamadou-bah-guinee/', '_blank');
  });

  it('should have a button', () => {
    expect(fixture.nativeElement.querySelector('button')).toBeTruthy();
  });

  it('sould have an image', () => {
    expect(fixture.nativeElement.querySelector('img')).toBeTruthy();
  });
});
