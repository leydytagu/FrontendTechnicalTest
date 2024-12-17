import { environment } from '../../../environments/environment';

export const urlBuilder: any = {
  service(url: string): string {
    return environment.api.base + url;
  }
};
