import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  imports: [TranslatePipe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = {
    title: 'education.title', 
    type: 'education.type', 
    time: 'education.time', 
    institution: 'education.institution',
    locality: 'education.locality',
  }

  trainings = [
    {topic: 'trainings.mvc.asp-net', completionYear: 2016, institution: 'Udemy' },
    {topic: 'trainings.angular.crash-course', completionYear: 2017, institution: 'Udemy' },
    {topic: 'trainings.angular.complete-guide', completionYear: 2024, institution: 'Udemy' },
    {topic: 'trainings.angular.advanced', completionYear: 2024, institution: 'Ambient IT' },
    {topic: 'trainings.node', completionYear: 2024, institution: 'Ambient IT' },
  ]
}
