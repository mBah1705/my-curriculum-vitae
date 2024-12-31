import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-actions',
  imports: [TranslateModule, MatButtonModule, RouterLink],
  templateUrl: './content-actions.component.html',
  styleUrl: './content-actions.component.scss'
})
export class ContentActionsComponent {
  actions = [
    {
      title: 'content-actions.professional-experiences',
      link: '/experiences'
    },
    {
      title: 'content-actions.technical-skills',
      link: '/skills'
    },
    {
      title: 'content-actions.education-and-trainings',
      link: '/education'
    },
    {
      title: 'content-actions.languages',
      link: '/languages'
    },
    
    
    
  ]
}
