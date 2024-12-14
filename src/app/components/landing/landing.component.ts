import { Component } from '@angular/core';
import { GroupInfoComponent } from "../../shared/design-system/organisms/group-info/group-info.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    GroupInfoComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
