import { Component, OnInit } from '@angular/core';

interface ItemList {
  name : string
}

interface SortedList {
  id: number,
  name : string,
  email : string
  mobile : number
}

@Component({
  selector: 'app-pipe-custom-pipe',
  templateUrl: './pipe-custom-pipe.component.html'
})
export class PipeCustomPipeComponent implements OnInit {

  itemNumber:number = 10;
  fulldate:Date = new Date();
  fullName:string = 'Banty';
  camelCasePipes:string =  'pipe custom pipe works!'

  search:string = '';

  itemList:ItemList[] = [
    {name : 'Banti'},
    {name : 'Hello'},
    {name : 'John'},
    {name : 'Vinay'},
    {name : 'Doe'},
    {name : 'Amins'}
  ]

  unsortedList:any = [
    {id: 1, name : 'banti shaw', email: 'banty@gmail.com', mobile:9563735364},
    {id: 2, name : 'hello', email: 'Hello@gmail.com', mobile:8743349982},
    {id: 3, name : 'John', email: 'John@gmail.com', mobile:2354353453},
    {id: 4, name : 'Vinay', email: 'Vinay@gmail.com', mobile:3534534535},
    {id: 5, name : 'Doe', email: 'Doe@gmail.com', mobile:5456556232},
    {id: 6, name : 'Amins', email: 'Amins@gmail.com', mobile:56676545345}
  ]

  // sortColumn:any = 'id'
  // accending:any = true;

  constructor() { }

  ngOnInit(): void {
  }

  sortData(data:any){
    this.unsortedList.sort((a:any, b:any) => {
      return a[data] > b[data] ? 1 : -1
    })
  }

  // sortData(data:any){
  //   if(this.sortColumn == data){
  //     this.accending = !this.accending
  //   }else {
  //     this.sortColumn = data;
  //     this.accending = true;
  //   }
  //   console.log(this.sortColumn, this.accending);
  // }

}
