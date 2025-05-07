import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface FormdFileds {
  type: string,
  label: string,
  id: string,
  placeholder?: string,
  required?: boolean,
  min?: string,
  max?: string
}

interface FormdFiledsConfig {
  formdFileds:FormdFileds[]
  submitLabel: string
}

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html'
})
export class DynamicFormsComponent implements OnInit {
  @ViewChild('injectForm') injectForm = ElementRef;

  fileds:FormdFiledsConfig = {
    formdFileds : [{
      type: 'text',
      label: 'Name',
      id: 'name',
      placeholder: 'Enter your name',
      required: true
    },
    {
      type: 'email',
      label: 'Email',
      id: 'email',
      placeholder: 'Enter your email',
      required: true
    },
    {
      type: 'number',
      label: 'Age',
      id: 'age',
      min: '1',
      max:'100'
    },
    {
      type: 'checkbox',
      label: 'Subscribe to newsletter',
      id: 'subscribe'
    }],
    submitLabel: 'Register'
  }

  dynamicForm:FormGroup;
  
  constructor( private formBuilder:FormBuilder ) {
    this.dynamicForm = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl(''),
      subscribe: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  dynamicFormSubmit(){
    console.log(this.dynamicForm.value)
  }


  

}
