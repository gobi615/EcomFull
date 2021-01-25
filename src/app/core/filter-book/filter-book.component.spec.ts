import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBookComponent } from './filter-book.component';

describe('FilterBookComponent', () => {
  let component: FilterBookComponent;
  let fixture: ComponentFixture<FilterBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
