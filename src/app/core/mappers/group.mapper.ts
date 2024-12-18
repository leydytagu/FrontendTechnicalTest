import {
  EProgressBarColor,
  EResponseColor,
  ESurveyTagColor,
  ESurveyTagText,
  ETooltipColor
} from '../models/group.enum';
import { Group, IGroup } from '../models/group.model';

export const mapGroups = (groups: Group[]): IGroup[] => {
  return groups.map(group => {
    const getSurveyTag = () => {
      if (group.valid_responses === 0) {
        return {
          img: 'assets/imgs/target.svg',
          color: ESurveyTagColor.red,
          text: ESurveyTagText.no_responses_collected
        };
      }

      if (group.valid_responses < group.response_target) {
        return {
          img: 'assets/imgs/target.svg',
          color: ESurveyTagColor.red,
          text: ESurveyTagText.target_not_met
        };
      }

      return {
        img: 'assets/imgs/Checkmark.svg',
        color: ESurveyTagColor.magenta,
        text: ESurveyTagText.target_met
      };
    };

    const surveyTagIcon = () => {
      if (group.valid_responses === group.response_target) {
        return './assets/imgs/Check-In.svg';
      }

      return './assets/imgs/Check-In-gray.svg';
    };

    const progressBarColor = () => {
      if (group.valid_responses === group.response_target) {
        return EProgressBarColor.magenta;
      }

      return EProgressBarColor.red;
    };

    return {
      id: group.id,
      headData: {
        groupInfo: {
          name: group.name,
          site: group.site,
          participants: `${group.participants} Group Participants`,
          date: `${group.start_date} - ${group.end_date}`
        },
        surveyTags: {
          img: surveyTagIcon(),
          head: {
            title: 'Check-In Surveys',
            description: group.survey_date
          },
          tag: getSurveyTag(),
          target: {
            text: `${group.valid_responses} of ${group.response_target}`,
            icon: 'icon-target-met',
            tooltip: 'Response Target'
          }
        }
      },
      contentData: {
        surveyCollection: {
          date: group.survey_date,
          validResponses: {
            quantity: group.valid_responses,
            color: EResponseColor.black,
            label: {
              text: 'valid responses',
              icon: 'icon-Info'
            },
            tooltip: {
              title: 'valid responses',
              colorIcon: ETooltipColor.gray,
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          },
          responseTarget: {
            quantity: group.response_target,
            color: EResponseColor.gray,
            label: {
              text: 'response target',
              icon: 'icon-Info'
            },
            tooltip: {
              title: 'response target',
              colorIcon: ETooltipColor.blue,
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          },
          progressBar: {
            percentage: Math.floor(group.valid_responses * 100 / group.response_target),
            color: progressBarColor()
          }
        },
        surveyAdministrationDetail: {
          surveyLink: group.survey_link,
          backupSurveys: group.backup_surveys,
          surveyAdminKit: group.survey_admin_kit
        }
      }
    }
  })
}
