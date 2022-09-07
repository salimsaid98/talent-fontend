import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearTalentComponent } from './sear-talent.component';

describe('SearTalentComponent', () => {
  let component: SearTalentComponent;
  let fixture: ComponentFixture<SearTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearTalentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
