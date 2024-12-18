import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCollectionComponent } from './survey-collection.component';

describe('SurveyCollectionComponent', () => {
  let component: SurveyCollectionComponent;
  let fixture: ComponentFixture<SurveyCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
