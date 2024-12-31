import { Component } from '@angular/core';
import { BodyMainBaseComponent } from '../body-main-base/body-main-base.component';

@Component({
  selector: 'app-languages',
  imports: [BodyMainBaseComponent],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent extends BodyMainBaseComponent {
}
