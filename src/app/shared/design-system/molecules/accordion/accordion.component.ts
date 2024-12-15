import { Component, Input } from '@angular/core';
import { TooltipComponent } from '../../atoms/tooltip/tooltip.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    TooltipComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() isOpen: boolean = false;
  @Input() tooltip: string = '';

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}