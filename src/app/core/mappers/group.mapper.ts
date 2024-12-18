import { ESurveyTagColor, ESurveyTagText, Group } from '../models/group.model';

export const mapGroups = (groups: Group[]): any => {
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
      }
    }
  })
}
