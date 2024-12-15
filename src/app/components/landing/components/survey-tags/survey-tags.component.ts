import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TagComponent } from '../../../../shared/design-system/atoms/tag/tag.component';
import { TargetComponent } from '../../../../shared/design-system/atoms/target/target.component';
import { TooltipComponent } from '../../../../shared/design-system/atoms/tooltip/tooltip.component';

export interface ISurveyTagsComponentProps {
  img?: string;
  head: {
    title: string;
    description?: string;
  },
  tag?: {
    type?: 'met' | 'not-met',
    img?: string;
    text: string;
  },
  target?: {
    icon?: string;
    text: string;
    tooltip?: string;
  }
}

@Component({
  selector: 'app-survey-tags',
  standalone: true,
  imports: [
    TagComponent,
    TargetComponent,
    NgOptimizedImage,
    TooltipComponent,
    NgIf
  ],
  templateUrl: './survey-tags.component.html',
  styleUrl: './survey-tags.component.scss'
})
export class SurveyTagsComponent {
  @Input() surveyTags: ISurveyTagsComponentProps | null = null;

  get hasImg(): boolean {
    return !!this.surveyTags?.img;
  }

  get hasTag(): boolean {
    return !!this.surveyTags?.tag;
  }

  get hasTarget(): boolean {
    return !!this.surveyTags?.target;
  }
}
