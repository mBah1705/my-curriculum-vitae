import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMainBaseComponent } from './body-main-base.component';

describe('BodyMainBaseComponent', () => {
  let component: BodyMainBaseComponent;
  let fixture: ComponentFixture<BodyMainBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyMainBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyMainBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
