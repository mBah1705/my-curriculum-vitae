import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainIntroComponent } from "./main-intro/main-intro.component";
import { ContentActionsComponent } from "./content-actions/content-actions.component";
import { fadeInAnimation } from './animations/fade-in.animation';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainIntroComponent, ContentActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    fadeInAnimation
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'my-curriculum-vitae'
  value = 93

  
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation']
  }
}
