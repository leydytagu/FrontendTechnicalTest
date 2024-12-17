import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';
import { GroupService } from '../services/group.service';

@Injectable({
  providedIn: 'root'
})
export class GroupFacade {
  constructor(private groupService: GroupService) {}

  public getGroups(): Observable<Group[]> {
    return this.groupService.getGroups();
  }
}
