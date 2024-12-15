import { Component, Input } from '@angular/core';
import { GroupInfoComponent } from '../group-info/group-info.component';
import { ISurveyTagsComponentProps, SurveyTagsComponent } from '../survey-tags/survey-tags.component';

export interface IAccordionHeadComponent {
  surveyTags: ISurveyTagsComponentProps;
}

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
  @Input() props!: IAccordionHeadComponent;
}
