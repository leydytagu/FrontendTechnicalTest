import { Component, OnInit } from '@angular/core';
import { EVENT_TOKEN } from '../../core/constants/global.constants';
import { EventFacade } from '../../core/facades/event.facade';
import { GroupFacade } from '../../core/facades/group.facade';
import { mapGroups } from '../../core/mappers/group.mapper';
import { Events, EventsDescription } from '../../core/models/event.enum';
import { IGroup } from '../../core/models/group.model';
import { AccordionComponent } from '../../shared/design-system/molecules/accordion/accordion.component';
import { AccordionHeadComponent } from './components/accordion-head/accordion-head.component';
import { GroupCardComponent } from './components/group-card/group-card.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionHeadComponent,
    GroupCardComponent
  ],
  providers: [GroupFacade],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  public groups: IGroup[] = [];

  constructor(private groupFacade: GroupFacade, private eventFacade: EventFacade) {}

  ngOnInit(): void {
    this.groupFacade.getGroups().subscribe(groups => this.groups = mapGroups(groups))
  }

  public sendEventOnShowDetails(): void {
    this.eventFacade.trackEvent(
      EVENT_TOKEN,
      Events.show_details,
      EventsDescription.show_details
    ).subscribe();
  }
}
