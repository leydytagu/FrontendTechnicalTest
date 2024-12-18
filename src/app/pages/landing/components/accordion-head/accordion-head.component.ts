import { Component, Input } from '@angular/core';
import { IAccordionHead } from '../../../../core/models/group.model';
import { GroupInfoComponent } from '../group-info/group-info.component';
import { SurveyTagsComponent } from '../survey-tags/survey-tags.component';

@Component({
  selector: 'app-accordion-head',
  standalone: true,
	imports: [
		GroupInfoComponent,
		SurveyTagsComponent
  ],
  templateUrl: './accordion-head.component.html',
  styleUrl: './accordion-head.component.scss'
})
export class AccordionHeadComponent {
  @Input() props!: IAccordionHead;
}
