import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  navigateToLinkedInPage() {
    window.open('https://www.linkedin.com/in/mamadou-bah-guinee/', '_blank')
  }
}
