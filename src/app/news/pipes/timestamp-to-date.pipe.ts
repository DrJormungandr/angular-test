import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: number | string | Date, args?: any): any {
    const formattedDate = formatDate(value, "yyyy/MM/dd", 'en-US');
    return formattedDate;
  }

}
