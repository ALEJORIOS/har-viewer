import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCellComponent } from './total-cell.component';

describe('TotalCellComponent', () => {
  let component: TotalCellComponent;
  let fixture: ComponentFixture<TotalCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
