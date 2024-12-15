import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input() progress: number = 0;
  @Input() color: 'red' | 'magenta' = 'red';

  get calcProgress():number {
    return this.progress > 100 ? 100 : this.progress;
  }
}
