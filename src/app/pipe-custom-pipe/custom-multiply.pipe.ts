import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customMultiply'
})
export class CustomMultiplyPipe implements PipeTransform {

  transform(value:number, into:number) {
    return value * into;
  }

}
