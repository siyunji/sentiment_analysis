import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readLess'
})
export class ReadLessPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // * show only 10 words
    return value.split(' ').length > 10 ? value.split(' ', 10).join(' ') + '...' : value;
  }

}
