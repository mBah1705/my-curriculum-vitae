import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Skill } from './skill.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private readonly url = 'https://my-curriculum-vitae-g5sp.onrender.com'

  httpClient = inject(HttpClient)

  readonly fetchSkills$ = () => this.httpClient.get<Skill[]>(this.url).pipe(
    catchError((error: HttpErrorResponse) => {
      if(error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error)
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }

      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'))
    })
  )
}
