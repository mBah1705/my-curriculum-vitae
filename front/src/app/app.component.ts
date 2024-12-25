import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterOutlet } from '@angular/router';

type  Mode = 'bright' | 'dark'
type  Language = 'english' | 'french' | 'dutch'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonToggleModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'my-curriculum-vitae'
  fontStyle = signal<Mode>('bright')
  language = signal<Language>('french')
 
  computeMode = computed(() => {
    localStorage.setItem('theme', this.fontStyle())
    localStorage['theme'] === 'dark' ? 
      document.documentElement.classList.add('dark') :    
      document.documentElement.classList.remove('dark')
  })

  switchLanguage = computed(() => this.language())
}
