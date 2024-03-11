import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortUrl'
})
export class ShortUrlPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const regExp = new RegExp(/https?:\/\/([^/]*)\/?/);
    const result = value.match(regExp) || [];
    return result.length > 1 ? result[1] : value;
  }

}
