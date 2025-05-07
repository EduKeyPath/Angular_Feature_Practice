import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelPipe'
})
export class CamelPipePipe implements PipeTransform {

  transform(value: string) {
    return value.split(' ').map(item => item[0].toUpperCase() + item.substring(1) + ' ').join(' ');
  }

}
