import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  @Input() text = '';
  @Input() icon = '';
  @Input() image = '';

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
