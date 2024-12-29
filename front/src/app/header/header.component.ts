import { DOCUMENT } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

type  Mode = 'bright' | 'dark'
type  Language = 'en' | 'fr' | 'nl'

@Component({
  selector: 'app-header',
  imports: [MatButtonToggleModule, FormsModule, MatIconModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly _document: Document  = inject(DOCUMENT)
  private readonly localStorage = this._document.defaultView?.localStorage
  private readonly translateService = inject(TranslateService)
  
  fontStyle = signal<Mode>('bright')
  language = signal<Language>(this.translateService.getBrowserLang() as Language || 'fr')

  constructor() {
    const matIconRegistry = inject(MatIconRegistry)
    const domSanitizer = inject(DomSanitizer)
    matIconRegistry.addSvgIcon('github', domSanitizer.bypassSecurityTrustResourceUrl('/assets/github.svg'))

    this.translateService.addLangs(['fr', 'en', 'nl'])
    this.translateService.setDefaultLang('fr')
    this.translateService.use('fr')
  }

  computeMode = computed(() => {
    if(this.localStorage) {
      localStorage.setItem('theme', this.fontStyle())
      localStorage['theme'] === 'dark' ? 
      document.documentElement.classList.add('dark') :    
      document.documentElement.classList.remove('dark')
    }
  })

  switchLanguage = computed(() => this.translateService.use(this.language()))

  navigateToGithubPage = () => {
    window.open('https://github.com/mBah1705/my-curriculum-vitae', "_blank")
  }
}
