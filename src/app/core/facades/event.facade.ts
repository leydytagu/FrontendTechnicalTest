import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventFacade {
  constructor(private eventService: EventService) {}

  public trackEvent(token: string, eventName: string, eventDescription: string): Observable<any> {
    return this.eventService.trackEvent(token, eventName, eventDescription);
  }

  public readEvents(token: string): Observable<Event[]> {
    return this.eventService.readEvents(token);
  }
}
