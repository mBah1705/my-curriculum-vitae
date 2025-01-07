import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, viewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { CONTENT_ACTIONS_DATA } from './content-actions.data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content-actions',
  imports: [TranslateModule, MatButtonModule, RouterLink],
  templateUrl: './content-actions.component.html',
  styleUrl: './content-actions.component.scss'
})
export class ContentActionsComponent implements OnInit, AfterViewInit, OnDestroy {
  actions = CONTENT_ACTIONS_DATA
  
  private readonly _document: Document  = inject(DOCUMENT)
  private readonly router = inject(Router)

  btnRefs = viewChildren<ElementRef<HTMLAnchorElement>>('btnRef')

  // The active button is the one representing the displayed component (on navigation)
  activeBtn: ElementRef<HTMLAnchorElement> | undefined = undefined

  subscription: Subscription | undefined = undefined

  ngOnInit(): void {
    this._document.addEventListener('click', () => {
      this.activeBtn?.nativeElement.focus({
        preventScroll: true
      })
    })
  }
  
  ngAfterViewInit(): void {
    this.subscription = this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        // On navigation focus the button representing the navigation url
        const activeBtn = this.btnRefs().find(btn => btn.nativeElement.href.endsWith(evt.url))
        this.activeBtn = activeBtn
        this.activeBtn?.nativeElement.focus({
          preventScroll: true
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
