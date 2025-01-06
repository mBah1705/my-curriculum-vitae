import { Component, input } from '@angular/core';
import { ConvertBoolPipe } from '../../app/convert-bool/convert-bool.pipe';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'ui-emphasize-yes',
  imports: [ConvertBoolPipe, TranslatePipe],
  templateUrl: './emphasize-yes.component.html',
  styleUrl: './emphasize-yes.component.scss'
})
export class EmphasizeYesComponent {
  value = input.required<boolean | undefined>()

}
