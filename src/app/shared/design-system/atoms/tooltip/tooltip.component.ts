import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  @Input() text = '';

  get hasText(): boolean {
    return !!this.text;
  }
}
