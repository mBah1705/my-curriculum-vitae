import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertBool'
})
export class ConvertBoolPipe implements PipeTransform {

  transform(value: boolean | undefined): string {
    return value ? 'skills-table.yes' : 'skills-table.no';
  }

}
