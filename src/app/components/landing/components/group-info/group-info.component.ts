import { Component, Input } from '@angular/core';
import { IGroupInfo } from '../../../../core/models/group.model';
import { LabelComponent } from '../../../../shared/design-system/atoms/label/label.component';
import { ItemListComponent } from '../../../../shared/design-system/molecules/item-list/item-list.component';

@Component({
  selector: 'app-group-info',
  standalone: true,
  imports: [
    LabelComponent,
    ItemListComponent
  ],
  templateUrl: './group-info.component.html',
  styleUrl: './group-info.component.scss'
})
export class GroupInfoComponent {
  @Input() info!: IGroupInfo;
}
