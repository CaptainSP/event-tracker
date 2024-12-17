import { Pipe, PipeTransform } from '@angular/core';
import {format} from 'date-fns';
import {tr} from 'date-fns/locale';

@Pipe({
  name: 'parseDate',
  standalone: true
})
export class ParseDatePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    // return local month and day
    console.log('value', value);
    if (value) {
      const date = new Date(value);
      return format(date, 'dd MMMM', {locale: tr});
    }
    return "";
  }

}
