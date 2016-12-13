import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { FormGroup } from '@angular/forms';
 
export interface FormComponent{
  //form: FormGroup;
  //hasUnsavedChnages(): Boolean;
}

@Injectable()
export class PreventUnsavedChangedGuard implements CanDeactivate<FormComponent>{
  canDeactivate(component: FormComponent){
    // if(component.hasUnsavedChnages())
    //   return confirm("Are you sure?");

    return true;
  }
}