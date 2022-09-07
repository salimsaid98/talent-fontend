import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshComponent } from './darsh.component';

describe('DarshComponent', () => {
  let component: DarshComponent;
  let fixture: ComponentFixture<DarshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
