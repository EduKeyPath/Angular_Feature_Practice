import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class PubService{

  private publicUrl:string = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient){
    
  }

  getData(){
    return this.http.get(`${this.publicUrl}/posts`)
  }

  postData(data:any){
    return this.http.post(`${this.publicUrl}/posts`, data);
  }



}