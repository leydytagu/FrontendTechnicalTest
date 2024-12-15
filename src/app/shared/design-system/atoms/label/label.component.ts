import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  @Input() title: string = '';
  @Input() icon: string = '';

  get hasTitle(): boolean {
    return !!this.title;
  }

  get hasIcon(): boolean {
    return !!this.title;
  }

}
