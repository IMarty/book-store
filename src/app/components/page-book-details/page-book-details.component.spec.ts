import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBookDetailsComponent } from './page-book-details.component';

describe('PageBookDetailsComponent', () => {
  let component: PageBookDetailsComponent;
  let fixture: ComponentFixture<PageBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
