import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProgressComponent } from '../../ui/progress/progress.component';

@Component({
  selector: 'app-languages',
  imports: [TranslatePipe, ProgressComponent],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  languages = [
    {item: 'languages.french', value: 100},
    {item: 'languages.dutch', value: 95},
    {item: 'languages.english', value: 90},
  ]
}
