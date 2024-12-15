import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountTooltipComponent } from './count-tooltip.component';

describe('CountTooltipComponent', () => {
  let component: CountTooltipComponent;
  let fixture: ComponentFixture<CountTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
