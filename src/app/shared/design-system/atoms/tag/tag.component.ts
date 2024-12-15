import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  @Input() text = '';
  @Input() icon = '';
  @Input() image = '';
  @Input() color : 'red' | 'magenta' = 'red';

  get hasText(): boolean {
    return !!this.text;
  }

  get hasImage(): boolean {
    return !!this.image;
  }

  get hasIcon(): boolean {
    return !!this.icon;
  }
}
