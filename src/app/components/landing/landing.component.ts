import { Component, OnInit } from '@angular/core';
import { GroupFacade } from '../../core/facades/group.facade';
import { mapGroups } from '../../core/mappers/group.mapper';
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

  constructor(private facade: GroupFacade) {}

  ngOnInit(): void {
    this.facade.getGroups().subscribe(groups => this.groups = mapGroups(groups))
  }
}
