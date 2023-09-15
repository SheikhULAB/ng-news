import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadlineComponent } from './top-headline.component';

describe('TopHeadlineComponent', () => {
  let component: TopHeadlineComponent;
  let fixture: ComponentFixture<TopHeadlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopHeadlineComponent]
    });
    fixture = TestBed.createComponent(TopHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
