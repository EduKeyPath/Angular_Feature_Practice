import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

interface Person {
  name : string,
  age: number,
  mob: number
}
type MoreColors = {
  [ key in 'red' | 'green']:boolean;
}

type Colors = {
  [ key in 'blue' | 'black' | 'white']:boolean;
} & MoreColors;


interface UsersList {
  id : number,
  fullname : string,
  email : string,
  date: string
}

interface UsersList {
  mobile : string,
  details: string
}

interface TodoList {
  item : string
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html'
})
export class TemplateDrivenComponent implements OnInit {

  currentSwitch = 'Light';
  templateDiv = true;
  
  person:[number, string, boolean] = [1, "John Doe", true]; //tupple

  itemList:{name:string}[] = [{name:''}];

  val1:number = 0;
  val2:number = 0;
  val3:number = 0;
  val3disa:boolean = true;

  Red:boolean = false;
  Green:boolean = false;
  Blue:boolean = false;
  favoriteColor:string = 'Red';

  colors:Colors = {
    'red' : false,
    'green' : false,
    'blue' : false,
    'black' : false,
    'white' : false
  }

  dummyObject:Person = {
    name : 'banty',
    age: 54,
    mob: 95
  }

  userList:UsersList[] = [];

  user:any = {
    id : 0,
    fullname : '',
    gender: '',
    color: '',
    email : '',
    mobile : '',
    date: '',
    details: ''
  }

  todoList:TodoList[] = [];

  todo:TodoList = {
    item : ''
  }
  optionVal:string = '';


  constructor() { }

  ngOnInit(): void {
    this.colors.red = true;
    this.colors.green = true;
  }

  changeView(vu:any){
    this.currentSwitch=vu;
  }

  toggleTemplate(){
    this.templateDiv = !this.templateDiv;
  }

  chooseOption(){
    console.log(this.optionVal)
  }

  userSubmit(data:NgForm){
    this.userList.push(data.value)
    console.log(this.userList)
  }

  clearData(indx:number){
    let idxp = this.userList.findIndex((item:UsersList) => {
      return item.id == indx
    })
    this.userList.splice(idxp, 1)
  }

  add(data:NgForm){
    this.todoList.push(data.value.item)
    console.log(this.todoList)
  }

  removeItem(indx:number){
    this.todoList.splice(indx, 1)
  }

  calc(){
    if(this.val1 && this.val2){
      this.val3 = Number(this.val1) + Number(this.val2);
      this.val3disa = false
    }else{
      this.val3disa = true
    }
  }

  valChange(){
    this.favoriteColor == 'Red' ? this.Red = true : this.Red = false;
    this.favoriteColor == 'Green' ? this.Green = true : this.Green = false; 
    this.favoriteColor == 'Blue' ? this.Blue = true : this.Blue = false; 
    // console.log(e)
  }

  selectColor(){
    let selectedColor = []
    for(let item in this.colors){      
      !!this.colors[item as keyof Colors] ? selectedColor.push(item) : null
    }
    console.log(selectedColor.join(','))
  }

  addItem(){
    this.itemList.push({name:''})
  }

  removeMoreItem(indx:number){
    this.itemList.splice(indx, 1);
  }

  adMoreSubmit(data:any){
    console.log(data.value)
  }

  funcType():string{
    return 'abc'
  }

}
