import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-direct-test',
  templateUrl: './custom-direct-test.component.html'
})
export class CustomDirectTestComponent implements OnInit {

  showElement:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCustomNgIf(){
    this.showElement = !this.showElement;
  }

}
