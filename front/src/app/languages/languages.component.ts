import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProgressComponent } from '../../ui/progress/progress.component';
import { MatTableModule } from '@angular/material/table';

export interface Language {
  item: string;
  verbalWeight: number;
  writtenWeight: number;
}

const ELEMENT_DATA: Language[] = [
  {item: 'languages.french', verbalWeight: 100, writtenWeight: 100},
  {item: 'languages.dutch', verbalWeight: 90, writtenWeight: 95},
  {item: 'languages.english', verbalWeight: 85, writtenWeight: 85},
]

@Component({
  selector: 'app-languages',
  imports: [TranslatePipe, ProgressComponent, MatTableModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  displayedColumns: string[] = ['item', 'verbalWeight', 'writtenWeight']
  languages = ELEMENT_DATA
}
