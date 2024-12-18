import { Component, Input } from '@angular/core';
import { ISurveyAdministrationDetail } from '../../../../core/models/group.model';
import { ListComponent } from '../../../../shared/design-system/molecules/list/list.component';

@Component({
  selector: 'app-survey-detail',
  standalone: true,
  imports: [
    ListComponent
  ],
  templateUrl: './survey-detail.component.html',
  styleUrl: './survey-detail.component.scss'
})
export class SurveyDetailComponent {
  @Input() surveyDetail!: ISurveyAdministrationDetail;
}
