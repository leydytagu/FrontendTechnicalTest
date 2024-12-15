import { Component } from '@angular/core';
import { GroupInfoComponent } from "./components/group-info/group-info.component";
import { AccordionComponent } from '../../shared/design-system/molecules/accordion/accordion.component';
import { ISurveyTagsComponentProps, SurveyTagsComponent } from './components/survey-tags/survey-tags.component';
import { AccordionHeadComponent, IAccordionHeadComponent } from './components/accordion-head/accordion-head.component';
import { OptionComponent } from '../../shared/design-system/atoms/option/option.component';
import { GroupCardComponent } from './components/group-card/group-card.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    GroupInfoComponent,
    AccordionComponent,
    SurveyTagsComponent,
    AccordionHeadComponent,
    OptionComponent,
    GroupCardComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  public survey:ISurveyTagsComponentProps  = {
    img: './assets/imgs/Check-In.svg',
    head: {
      title: 'Check-In Surveys',
      description: 'March 11, 2024'
    },
    tag: {
      img: 'assets/imgs/target.svg',
      text: 'Target Not Met',
      color: 'red'
    },
    target: {
      text: '10 of 12',
      tooltip: 'response target',
      icon: 'icon-target-met'
    }
  }

  public data: IAccordionHeadComponent = {
    surveyTags: this.survey
  }

}
