import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss'
})
export class TargetComponent {
  @Input() text = '';
  @Input() icon = '';
  @Input() color : 'red' | 'magenta' = 'red';

  get hasText(): boolean {
    return !!this.text;
  }

  get hasIcon(): boolean {
    return !!this.icon;
  }
}
