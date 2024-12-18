import { environment } from '../../../environments/environment';

export const urlBuilder: any = {
  services(url: string): string {
    return environment.api.base + url;
  }
};
