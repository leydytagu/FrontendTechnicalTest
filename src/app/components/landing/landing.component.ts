import { Component } from '@angular/core';
import { GroupInfoComponent } from "../../shared/design-system/organisms/group-info/group-info.component";
import { AccordionComponent } from '../../shared/design-system/molecules/accordion/accordion.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    GroupInfoComponent,
    AccordionComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
