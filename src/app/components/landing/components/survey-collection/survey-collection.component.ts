import { Component } from '@angular/core';
import { InfoDateComponent } from '../../../../shared/design-system/molecules/info-date/info-date.component';
import { ProgressBarComponent } from '../../../../shared/design-system/atoms/progress-bar/progress-bar.component';

@Component({
  selector: 'app-survey-collection',
  standalone: true,
  imports: [
    InfoDateComponent,
    ProgressBarComponent
  ],
  templateUrl: './survey-collection.component.html',
  styleUrl: './survey-collection.component.scss'
})
export class SurveyCollectionComponent {

}
