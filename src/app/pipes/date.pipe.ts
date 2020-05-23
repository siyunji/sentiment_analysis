import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let date = new Date(value);
    return date.toLocaleString();
  }

}
