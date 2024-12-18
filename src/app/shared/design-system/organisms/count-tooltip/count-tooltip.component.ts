import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EResponseColor, ETooltipColor } from '../../../../core/models/group.model';

@Component({
  selector: 'app-count-tooltip',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './count-tooltip.component.html',
  styleUrl: './count-tooltip.component.scss'
})
export class CountTooltipComponent {
  @Input() label: {
    text: string;
    icon: string;
  } | null = null;
  @Input() text: string = '';
  @Input() textColor: EResponseColor = EResponseColor.black;
  @Input() tooltip: {
    title: string;
    description: string;
    colorIcon: ETooltipColor
  }

  public showTooltip: boolean = false;

  get hasLabel(): boolean {
    return !!this.label;
  }

  get hasText(): boolean {
    return !!this.text;
  }

  get hasTooltip(): boolean {
    return !!this.tooltip;
  }

  public toggleTooltip(): void {
    this.showTooltip = !this.showTooltip;
  }

}
