import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html'
})
export class InputOutputComponent implements OnInit {
  @ViewChildren(ChildComponent) children!: QueryList<ChildComponent>;

  data:string = 'This is input data';
  dataFromChild:string  = '';

  constructor() { }

  ngOnInit(): void {
  }

  getData(e:string){
    this.dataFromChild = e;
  }

  changeBgColor(){
    this.children.forEach((item, index) => {
      item.highLight()
      item.sendData('This is view child data')
    })
  }

  updateChildData(){
    this.data = 'input data change'
  }

}
