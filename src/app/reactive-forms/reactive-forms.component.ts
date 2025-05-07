import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';

interface StudentValue {
  name: string,
  email: string,
  number: number,
  gender: string,
  stream: string,
  year: number
}

interface StricFromType {
  name: FormControl<string>,
  email: FormControl<string>,
  mobile: FormControl<string>
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent implements OnInit {

  strictForm:FormGroup;
  
  studentValue:StudentValue[] = [];
  registerForm:FormGroup;

  constructor(private fb:FormBuilder, private nonNullableFormBuilder:NonNullableFormBuilder) { 
    this.registerForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.strictForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]]
    })
  }

  studentForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    number: new FormControl(''),
    gender: new FormControl(''),
    stream: new FormControl(''),
    year: new FormControl('')
  })

  ngOnInit(): void {
  }


  submitStundent(){
    this.studentValue.push(this.studentForm.value) 
    console.log(this.studentValue)
  }

  submitRegisterForm(){
    console.log(this.registerForm.value);
  }

  strictFormSubmit(){

  }

}
