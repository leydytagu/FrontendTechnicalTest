import { Component, Input } from '@angular/core';
import { ISurveyCollection } from '../../../../core/models/group.model';
import { ProgressBarComponent } from '../../../../shared/design-system/atoms/progress-bar/progress-bar.component';
import { InfoDateComponent } from '../../../../shared/design-system/molecules/info-date/info-date.component';
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
  @Input() surveyCollection!: ISurveyCollection;
}
