import { Component, Input } from '@angular/core';
import { EVENT_TOKEN } from '../../../../core/constants/global.constants';
import { EventFacade } from '../../../../core/facades/event.facade';
import { Events, EventsDescription } from '../../../../core/models/event.enum';
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

  constructor(private eventFacade: EventFacade) {}

  public sendEventOnClickValidResponses(): void {
    this.eventFacade.trackEvent(
      EVENT_TOKEN,
      Events.valid_responses,
      EventsDescription.valid_responses
    ).subscribe();
  }

  public sendEventOnClickResponseTarget(): void {
    this.eventFacade.trackEvent(
      EVENT_TOKEN,
      Events.response_target,
      EventsDescription.response_target
    ).subscribe();
  }
}
