import { Component } from '@angular/core';
import { BodyMainBaseComponent } from '../body-main-base/body-main-base.component';

@Component({
  selector: 'app-skills',
  imports: [BodyMainBaseComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent extends BodyMainBaseComponent {
}
