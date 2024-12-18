import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TooltipComponent } from '../../atoms/tooltip/tooltip.component';

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
  @Input() textCopyAction: string = '';
  @Input() delayCopy: number = 5000;
  @Input() actionLink: string = '';

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
    return !!this.textCopyAction && !!this.actionLink;
  }

  get hasTextActionLink(): boolean {
    return !!this.actionLink;
  }

  get showCopy(): boolean {
    return this._showCopy;
  }

  public clickButton(): void {
    if (this.hasTextCopy) {
      navigator.clipboard.writeText(this.actionLink).then(
        () => {
          this._showCopy = true;
          setTimeout(() => {
            this._showCopy = false;
          }, this.delayCopy);
        }
      );
      this._showCopy = true;
      setTimeout(() => {
        this._showCopy = false;
      }, this.delayCopy);
    } else if (this.hasTextActionLink) {
      const link = document.createElement('a');
      link.href = this.actionLink;
      link.target = '_blank';
      link.click();
    }
  }
}
