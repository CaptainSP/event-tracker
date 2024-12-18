import { Pipe, PipeTransform } from '@angular/core';
import {format,parse} from 'date-fns';
import {tr} from 'date-fns/locale';

@Pipe({
  name: 'parseDate',
  standalone: true
})
export class ParseDatePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    // return local month and day then hour and minute
    console.log('value', value);
    if (value) {
      const date = new Date(new Date(value).toISOString());
      date.setHours(date.getHours());
      console.log('date', date);
      return format(date, 'dd MMMM HH:mm', {locale: tr});
    }
    return "";
  }

}
