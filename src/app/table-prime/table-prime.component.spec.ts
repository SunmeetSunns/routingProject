import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrimeComponent } from './table-prime.component';

describe('TablePrimeComponent', () => {
  let component: TablePrimeComponent;
  let fixture: ComponentFixture<TablePrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePrimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
