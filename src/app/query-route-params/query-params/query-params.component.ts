import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html'
})
export class QueryParamsComponent implements OnInit {

  queryParamsId:number | undefined;
  queryParamsName:string | undefined;

  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.queryParamMap.subscribe((qp:any) => {
      this.queryParamsId = qp.params.id;
      this.queryParamsName = qp.params.name
    })

  }

}
