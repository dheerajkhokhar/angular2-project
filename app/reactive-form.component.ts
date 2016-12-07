import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import {UsernameValidators} from './userNameValidators'

@Component({
  selector:'model-form',
  templateUrl:'app/reactive-form.template.html'
})

export class ReactiveFormComponent implements OnInit {

  // registerForm = new FormGroup({
  //   firstname: new FormControl('',Validators.required),
  //   lastname: new FormControl('lastname',Validators.required),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     zip: new FormControl(),
  //     city: new FormControl()
  //   })
  // });

  registerForm:FormGroup;
  constructor(private formBuilder: FormBuilder){}
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.compose([
                  Validators.required,
                  UsernameValidators.cannotContainSpace,
                  ]),Validators.composeAsync([UsernameValidators.shouldBeUnique])],
      lastname: ['', Validators.required],
      address: this.formBuilder.group({
        street: '',
        zip: '',
        city: ''
      })
    });
    this.registerForm.valueChanges.subscribe(data => console.log('form changes', data));
  }

   save(f) {
     this.registerForm.controls["firstname"].setErrors({
       invalidValue:true
     });
    console.log(this.registerForm.value);
    console.log(f);
  }
}


//***************************************************************************************************

//firstname:['default value','Sync Validators','Async Validators']

//Call when some change take place in form
//this.registerForm.valueChanges.subscribe(data => console.log('form changes', data)); 

//***************************************************************************************************