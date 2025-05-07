import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {


  transform(value:any, type:any, accending:any = true) {
    // if(!Array.isArray(value) || !!type){
    //   return value;
    // }

    // return value.sort((a:any, b:any) => (a[type] > b[type] ? 1 : -1));
  }

}
