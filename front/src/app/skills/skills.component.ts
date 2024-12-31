import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { slideAnimation } from '../animations/slide.animation';

@Component({
  selector: 'app-skills',
    animations: [
      trigger('slideToggle', [
        transition('* => *', [
          useAnimation(slideAnimation)
        ])
      ])
    ],
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, OnDestroy {
  protected show = signal(false)

  ngOnInit(): void {
    this.show.set(true)
  }

  ngOnDestroy(): void {
    this.show.set(false)
  }
}
