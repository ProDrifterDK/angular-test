import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialDate'
})
export class SpecialDatePipe extends DatePipe implements PipeTransform {

  override transform(value: any, ...args: any[]): any {
    return super.transform(value, "MMMM y");
  }

}
