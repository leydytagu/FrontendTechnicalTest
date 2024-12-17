import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Event } from '../models/event.model';
import { urlBuilder } from '../utils/url-builder';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {}

  trackEvent(token: string, eventName: string, eventDescription: string): Observable<any> {
    const body = { token, event_name: eventName, event_description: eventDescription };

    const url = urlBuilder.services(environment.api.services.trackEvent);
    return this.http.post(url, body);
  }

  readEvents(token: string): Observable<Event[]> {
    const url =  `${urlBuilder.services(environment.api.services.readEvents)}/${token}/`;
    return this.http.get<{ events: Event[] }>(url).pipe(
      map(response => response.events)
    );
  }
}
