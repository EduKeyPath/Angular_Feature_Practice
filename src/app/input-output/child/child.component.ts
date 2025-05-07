import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ChangeDetectionStrategy } from '@angular/core';

// interface inputData {
//   data : string
// }

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent implements OnInit {

  @Input() inputData! :string;
  @Output() fetchDatafromChild: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('highlight') 'highlight' : ElementRef;

  dataFromParent:(string | undefined) = '';
  childData:string = 'This child data, send to parent component';

  constructor() { }

  ngOnInit(): void {
    this.dataFromParent = this.inputData
    console.log(this.inputData,'Child component Intilized');
  }

  ngDoCheck(){
    console.log('Child component checked');
  }


  sendData(childData:string){
    this.fetchDatafromChild.emit(childData)
  }

  highLight(){
    this.highlight.nativeElement.style.color = 'red';
  }

}
