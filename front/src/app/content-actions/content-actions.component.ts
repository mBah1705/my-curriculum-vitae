import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-content-actions',
  imports: [TranslateModule, MatButtonModule],
  templateUrl: './content-actions.component.html',
  styleUrl: './content-actions.component.scss'
})
export class ContentActionsComponent {
  actions = [
    'content-actions.professional-experiences',
    'content-actions.technical-skills',
    'content-actions.education-and-trainings'
  ]
}
