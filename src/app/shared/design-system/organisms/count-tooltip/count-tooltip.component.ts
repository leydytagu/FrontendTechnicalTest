import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

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
  @Input() textColor: 'black' | 'gray' = 'black';
  @Input() tooltip: {
    title: string;
    description: string;
    colorIcon: 'gray' | 'blue'
  } | null = null;

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
