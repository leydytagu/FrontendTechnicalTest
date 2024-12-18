import { Component, Input } from '@angular/core';
import { IContentData } from '../../../../core/models/group.model';
import { OptionComponent } from '../../../../shared/design-system/atoms/option/option.component';
import { SurveyCollectionComponent } from '../survey-collection/survey-collection.component';
import { SurveyDetailComponent } from '../survey-detail/survey-detail.component';

@Component({
  selector: 'app-group-card',
  standalone: true,
  imports: [
    OptionComponent,
    SurveyCollectionComponent,
    SurveyDetailComponent
  ],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.scss'
})
export class GroupCardComponent {
  @Input() props!: IContentData;
}
