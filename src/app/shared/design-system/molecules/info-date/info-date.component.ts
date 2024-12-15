import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-info-date',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './info-date.component.html',
  styleUrl: './info-date.component.scss'
})
export class InfoDateComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  get hasImg(): boolean {
    return !!this.img;
  }

  get hasTitle(): boolean {
    return !!this.title;
  }

  get hasDescription(): boolean {
    return !!this.description;
  }
}
