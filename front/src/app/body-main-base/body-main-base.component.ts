import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, input, OnDestroy, OnInit, signal, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'app-body-main-base',
      animations: [
        fadeInAnimation
      ],
  imports: [CommonModule],
  templateUrl: './body-main-base.component.html',
  styleUrl: './body-main-base.component.scss'
})
export class BodyMainBaseComponent  implements OnInit, OnDestroy {
  templateRef = input<TemplateRef<unknown> | null>(null)
  protected readonly show = signal(false)
  
    ngOnInit(): void {
      this.show.set(true)
    }
  
    ngOnDestroy(): void {
      this.show.set(false)
    }
}
