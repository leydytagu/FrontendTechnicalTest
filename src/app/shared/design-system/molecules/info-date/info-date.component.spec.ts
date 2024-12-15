import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDateComponent } from './info-date.component';

describe('InfoDateComponent', () => {
  let component: InfoDateComponent;
  let fixture: ComponentFixture<InfoDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
