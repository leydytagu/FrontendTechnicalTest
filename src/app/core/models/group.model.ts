import { ISurveyTagsComponentProps } from '../../components/landing/components/survey-tags/survey-tags.component';

export interface Group {
  id: number;
  name: string;
  site: string;
  participants: number;
  start_date: string;
  end_date: string;
  survey_date: string;
  valid_responses: number;
  response_target: number;
  survey_link: string;
  backup_surveys: string;
  survey_admin_kit: string;
}

export interface IGroupInfo {
  name: string;
  site: string;
  participants: string;
  date: string;
}

export interface IAccordionHead {
  groupInfo: IGroupInfo;
  surveyTags: ISurveyTagsComponentProps;
}

export interface IGroup {
  id: number;
  headData: IAccordionHead;
}

export enum ESurveyTagColor {
  magenta = 'magenta',
  red = 'red'
}

export enum ESurveyTagText {
  target_met = 'Target Met',
  target_not_met = 'Target Not Met',
  no_responses_collected = 'No Responses Collected'
}
