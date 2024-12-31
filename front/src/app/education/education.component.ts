import { Component } from '@angular/core';
import { BodyMainBaseComponent } from '../body-main-base/body-main-base.component';

@Component({
  selector: 'app-education',
  imports: [BodyMainBaseComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent extends BodyMainBaseComponent {
}
