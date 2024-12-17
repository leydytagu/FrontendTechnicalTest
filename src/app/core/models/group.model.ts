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
