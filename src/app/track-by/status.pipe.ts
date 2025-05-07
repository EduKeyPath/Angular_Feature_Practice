import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value:number) {
    return value < 50 ? 'Fail' : 'Pass';
  }

}
