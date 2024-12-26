import { DOCUMENT } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

type  Mode = 'bright' | 'dark'
type  Language = 'english' | 'french' | 'dutch'

@Component({
  selector: 'app-header',
  imports: [MatButtonToggleModule, FormsModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  fontStyle = signal<Mode>('bright')
  language = signal<Language>('french')
  private readonly _document: Document  = inject(DOCUMENT)
  private readonly localStorage = this._document.defaultView?.localStorage

  constructor() {
    const matIconRegistry = inject(MatIconRegistry)
    const domSanitizer = inject(DomSanitizer)
    matIconRegistry.addSvgIcon('github', domSanitizer.bypassSecurityTrustResourceUrl('/assets/github.svg'))
  }

  computeMode = computed(() => {
    if(this.localStorage) {
      localStorage.setItem('theme', this.fontStyle())
      localStorage['theme'] === 'dark' ? 
      document.documentElement.classList.add('dark') :    
      document.documentElement.classList.remove('dark')
    }
  })

  switchLanguage = computed(() => this.language())

  navigateToGithubPage = () => {
    window.open('https://github.com/mBah1705/my-curriculum-vitae', "_blank")
  }
}
