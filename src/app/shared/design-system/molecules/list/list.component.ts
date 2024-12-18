import { Component, Input } from '@angular/core';
import { TooltipComponent } from '../../atoms/tooltip/tooltip.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    TooltipComponent,
    NgIf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() text: string = '';
  @Input() listNumber: string = '';
  @Input() tooltip: string = '';
  @Input() buttonIcon: string = '';
  @Input() textCopy: string = '';
  @Input() delayCopy: number = 5000;

  private _showCopy = false;

  get hasText(): boolean {
    return !!this.text;
  }

  get hasListNumber(): boolean {
    return !!this.listNumber;
  }

  get hasButtonIcon(): boolean {
    return !!this.buttonIcon;
  }

  get hasTextCopy(): boolean {
    return !!this.textCopy;
  }

  get showCopy(): boolean {
    return this._showCopy;
  }

  public clickButton(): void {
    if (this.hasTextCopy) {
      this._showCopy = true;
      setTimeout(() => {
        this._showCopy = false;
      }, this.delayCopy);
    }
  }

}
