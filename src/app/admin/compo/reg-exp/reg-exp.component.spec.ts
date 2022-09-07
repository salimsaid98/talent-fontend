import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegExpComponent } from './reg-exp.component';

describe('RegExpComponent', () => {
  let component: RegExpComponent;
  let fixture: ComponentFixture<RegExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
