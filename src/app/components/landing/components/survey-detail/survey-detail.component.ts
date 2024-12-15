import { Component } from '@angular/core';
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
  public list = {

  }
}
