import { ComponentFixture, TestBed } from '@angular/core/testing';

import { partnerScroll } from './partner-slide.component';

describe('partnerScroll', () => {
  let component: partnerScroll;
  let fixture: ComponentFixture<partnerScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [partnerScroll]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(partnerScroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
