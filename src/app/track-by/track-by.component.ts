import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent implements OnInit {
  
  studentList:any = [
    {id: 1, name : 'banti', marks: 64},
    {id: 2, name : 'Hello', marks: 82},
    {id: 3, name : 'John', marks: 23},
    {id: 4, name : 'Vinay', marks: 35},
    {id: 5, name : 'Doe', marks: 32},
    {id: 6, name : 'Amins', marks: 45}
  ]
  cartList:any = [];
  editingId:number|null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

  addData(){
    const newObj = {
      id:this.studentList.length + 1,
      name: `New Data ${this.studentList.length + 1}`,
      marks: this.studentList.length
    }
    this.studentList = [...this.studentList, newObj]
  }

  trackById(index:number, item:any){
    return item.id
  }

  removeStudent(indx:number){
    this.studentList.splice(indx, 1);
  }

  editData(id:number){
    this.editingId = id;
  }
  cancelEdit(){
    this.editingId = null;
  }

  updateData(){
    this.editingId = null;
  }

  addToCart(product:any){
    this.cartList.push(product);
  }

  

}
