import { Component, computed, input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'ui-progress',
  imports: [MatProgressBarModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  value = input.required<number>()

  widthStyle = computed(() => `${this.value()}%`)
}
