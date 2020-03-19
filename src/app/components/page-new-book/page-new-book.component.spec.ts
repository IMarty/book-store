import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewBookComponent } from './page-new-book.component';

describe('PageNewBookComponent', () => {
  let component: PageNewBookComponent;
  let fixture: ComponentFixture<PageNewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
