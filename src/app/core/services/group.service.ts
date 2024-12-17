import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Group } from '../models/group.model';
import { urlBuilder } from '../utils/url-builder';

@Injectable({
  providedIn: 'root',
})
export class GroupService {

  constructor(private http: HttpClient) {}

  getGroups(): Observable<Group[]> {
    const url = urlBuilder.services(environment.api.services.groupsList);
    return this.http.get<{ data: { groups: Group[] } }>(url).pipe(
      map(response => response.data.groups)
    );
  }
}
