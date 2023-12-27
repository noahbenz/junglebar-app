import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitDividerComponent } from './fruit-divider.component';

describe('FruitDividerComponent', () => {
  let component: FruitDividerComponent;
  let fixture: ComponentFixture<FruitDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
