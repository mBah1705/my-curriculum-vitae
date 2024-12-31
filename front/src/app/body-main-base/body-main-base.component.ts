import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, input, OnDestroy, OnInit, signal, TemplateRef } from '@angular/core';
import { slideAnimation } from '../animations/slide.animation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body-main-base',
      animations: [
        trigger('slideToggle', [
          transition('* => *', [
            useAnimation(slideAnimation)
          ])
        ])
      ],
  imports: [CommonModule],
  templateUrl: './body-main-base.component.html',
  styleUrl: './body-main-base.component.scss'
})
export class BodyMainBaseComponent  implements OnInit, OnDestroy {
  templateRef = input<TemplateRef<unknown> | null>(null)
  protected show = signal(false)
  
    ngOnInit(): void {
      this.show.set(true)
    }
  
    ngOnDestroy(): void {
      this.show.set(false)
    }
}
