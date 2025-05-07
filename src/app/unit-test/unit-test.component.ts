import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent implements OnInit {

  count:any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.count++
  }

  decrement(){
    if(this.count > 0){
      this.count--
    } 
      
  }

}
