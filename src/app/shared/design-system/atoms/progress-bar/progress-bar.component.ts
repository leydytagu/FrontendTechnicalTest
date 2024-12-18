import { Component, Input } from '@angular/core';
import { EProgressBarColor } from '../../../../core/models/group.model';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input() progress: number = 0;
  @Input() color: EProgressBarColor = EProgressBarColor.red;

  get calcProgress(): number {
    return this.progress > 100 ? 100 : this.progress;
  }
}
