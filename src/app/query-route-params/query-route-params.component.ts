import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-route-params',
  templateUrl: './query-route-params.component.html'
})
export class QueryRouteParamsComponent implements OnInit {

  routerId:number = 20;
  queryId:number = 40;
  queryName:string = 'Banty';

  user = {
    name : this.queryName,
    id : this.routerId,
    mob : this.queryId
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToRouteParams(){
    this.router.navigate(['/RouteParams/', this.routerId])
  }

  goToQueryParams(){
    this.router.navigate(['/QueryParams'], {queryParams: {...this.user}})
    // this.router.navigate(['/QueryParams/'], { queryParams: { id: 123, name: 'John' } })
  }

}
