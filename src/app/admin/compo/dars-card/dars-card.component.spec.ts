import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarsCardComponent } from './dars-card.component';

describe('DarsCardComponent', () => {
  let component: DarsCardComponent;
  let fixture: ComponentFixture<DarsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
