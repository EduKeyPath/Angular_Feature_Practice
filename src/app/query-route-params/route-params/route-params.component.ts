import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html'
})
export class RouteParamsComponent implements OnInit {

  routerParamsData:number | undefined;

  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.paramMap.subscribe((param:any) => {
      this.routerParamsData = param.get('id');
    })
  }

}
