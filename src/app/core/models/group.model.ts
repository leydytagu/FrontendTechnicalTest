import { ISurveyTagsComponentProps } from '../../pages/landing/components/survey-tags/survey-tags.component';
import { EProgressBarColor, EResponseColor, ETooltipColor } from './group.enum';

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

export interface ISurveyAdministrationDetail {
  surveyLink: string;
  backupSurveys: string;
  surveyAdminKit: string;
}

export interface ISurveyCollection {
  date: string;
  validResponses: {
    quantity: number;
    color: EResponseColor;
    label: {
      text: string;
      icon: string;
    };
    tooltip: {
      title: string;
      colorIcon: ETooltipColor;
      description: string;
    }
  };
  responseTarget: {
    quantity: number;
    color: EResponseColor;
    label: {
      text: string;
      icon: string;
    }
    tooltip: {
      title: string;
      colorIcon: ETooltipColor;
      description: string;
    }
  };
  progressBar: {
    percentage: number;
    color: EProgressBarColor;
  };
}

export interface IContentData {
  surveyCollection: ISurveyCollection
  surveyAdministrationDetail: ISurveyAdministrationDetail
}

export interface IAccordionHead {
  groupInfo: IGroupInfo;
  surveyTags: ISurveyTagsComponentProps;
}

export interface IGroup {
  id: number;
  headData: IAccordionHead;
  contentData: IContentData;
}
