import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ExperiencesService } from './experiences.service';
import { TranslatePipe } from '@ngx-translate/core';
import { avivAngularExperience, avivReactExperience, cvAppExperience, qDelftExperience } from './experiences.data';

@Component({
  selector: 'app-experiences',
  imports: [TranslatePipe],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  experiencesBuilder = inject(ExperiencesService)
  experiences = this.experiencesBuilder.experiences

  ngOnInit(): void {
    this.experiencesBuilder.addExperience(cvAppExperience)
    this.experiencesBuilder.addExperience(avivAngularExperience)
    this.experiencesBuilder.addExperience(qDelftExperience)
    this.experiencesBuilder.addExperience(avivReactExperience)
  }

  ngOnDestroy(): void {
    // The experiences builder service's experiences reset because the internal experiences are kept in the service,
    // Because all the experiences are added one by one on initiation of this component, we must destroy the existing experiences, otherwise they are re-added
    this.experiencesBuilder.resetExperiences()
  }
}