import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() alternativeTooltip: string = '';

  @Output() isShowDetails = new EventEmitter();

  public toggle(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.isShowDetails.emit();
    }
  }

  get tooltipText(): string {
    return this.isOpen ? this.alternativeTooltip : this.tooltip;
  }
}
