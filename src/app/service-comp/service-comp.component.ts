import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PubService} from '../pub-ser.service';


@Component({
  selector: 'app-service-comp',
  templateUrl: './service-comp.component.html'
})
export class ServiceCompComponent implements OnInit {

  apiData:any = [];

  user = {
    name:''
  }
  res:any = [];
  
  constructor(private pubService:PubService, public http:HttpClient) { }

  ngOnInit(): void {
    this.apiData = this.pubService.getData();
    // this.pubService.getData().subscribe((data) => {
    //   console.log(data)
    //   this.apiData = data;
    // })
    
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next : data => {
        this.apiData = data
      },
      error: err => console.log(err)
    })
  }


  postDataSubmit(data:any){
    this.pubService.postData(data.value).subscribe(item => {
      console.log(item)
      this.res.push(item);
    })
  }

}
