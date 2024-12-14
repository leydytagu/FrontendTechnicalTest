import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTagsComponent } from './survey-tags.component';

describe('SurveyTagsComponent', () => {
  let component: SurveyTagsComponent;
  let fixture: ComponentFixture<SurveyTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyTagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
