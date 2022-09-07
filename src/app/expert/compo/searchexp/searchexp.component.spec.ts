import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchexpComponent } from './searchexp.component';

describe('SearchexpComponent', () => {
  let component: SearchexpComponent;
  let fixture: ComponentFixture<SearchexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
