import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanReadablePageNumber'
})
export class HumanReadablePageNumberPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return ++value;
  }

}
