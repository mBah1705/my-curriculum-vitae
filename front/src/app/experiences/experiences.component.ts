import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { slideAnimation } from '../animations/slide.animation';

@Component({
  selector: 'app-experiences',
  animations: [
    trigger('slideToggle', [
      transition('* => *', [
        useAnimation(slideAnimation)
      ])
    ])
  ],
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  protected showExperiences = signal(false)

  ngOnInit(): void {
    this.showExperiences.set(true)
  }

  ngOnDestroy(): void {
    this.showExperiences.set(false)
  }
}
