import { Component } from '@angular/core';
import { OptionComponent } from '../../../../shared/design-system/atoms/option/option.component';

@Component({
  selector: 'app-group-card',
  standalone: true,
	imports: [
		OptionComponent
	],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.scss'
})
export class GroupCardComponent {

}
