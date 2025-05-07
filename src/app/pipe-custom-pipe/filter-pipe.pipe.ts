import { Pipe, PipeTransform } from "@angular/core";

interface ItemList {
  name : string
}

@Pipe({
  name : 'filterPipe',
  pure: false
})

export class FilterPipePipe implements PipeTransform {
  transform(list:ItemList[], searchTxt:string) {
    return list.filter((item:ItemList) => item.name.toLowerCase().includes(searchTxt.toLowerCase()))
  }
}


