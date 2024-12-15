import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss'
})
export class OptionComponent {
  @Input() img: string = '';
  @Input() text: string = '';

  get hasText(): boolean {
    return !!this.text;
  }

  get hasImg(): boolean {
    return !!this.img;
  }
}
