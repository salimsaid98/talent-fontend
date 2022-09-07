import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterexpComponent } from './registerexp.component';

describe('RegisterexpComponent', () => {
  let component: RegisterexpComponent;
  let fixture: ComponentFixture<RegisterexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
