import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value) {
      const mon = String(value).substring(4);
      const year = String(value).substring(0, 4);
      if (mon) {
        const num = +mon - 1;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[num] + ' ' + year;
      } else {
        return year;
      }
    } else {
      return value;
    }
  }
}
