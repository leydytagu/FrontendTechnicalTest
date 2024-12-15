import { Component } from '@angular/core';
import { InfoDateComponent } from '../../../../shared/design-system/molecules/info-date/info-date.component';
import { ProgressBarComponent } from '../../../../shared/design-system/atoms/progress-bar/progress-bar.component';
import {
  CountTooltipComponent
} from '../../../../shared/design-system/organisms/count-tooltip/count-tooltip.component';

@Component({
  selector: 'app-survey-collection',
  standalone: true,
  imports: [
    InfoDateComponent,
    ProgressBarComponent,
    CountTooltipComponent
  ],
  templateUrl: './survey-collection.component.html',
  styleUrl: './survey-collection.component.scss'
})
export class SurveyCollectionComponent {
  public count = {
    label: {
      text: 'valid responses',
      icon: 'icon-Info'
    },
    tooltip: {
      title: 'valid responses',
      colorIcon: 'blue' as any,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
