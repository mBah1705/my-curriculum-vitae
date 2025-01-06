import { computed, Injectable, Signal, signal } from '@angular/core';
import { ExperienceWithId } from './experiences.data';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  private readonly _experiences = signal<ExperienceWithId[]>([])

  get experiences(): Signal<ExperienceWithId[]> {
    return computed(() => this._experiences())
  }

  addExperience(experience: ExperienceWithId) {
    if (!experience.endTime) {
      experience.endTime = 'experiences.till-now'
    }
    this._experiences.update(currentExperiences => [...currentExperiences, {...experience}])
  }

  resetExperiences() {
    this._experiences.set([])
  }
}
