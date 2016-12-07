import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormComponent } from './reactive-form.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ContactFormComponent, ReactiveFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(){
      console.log("Main",performance.now());
    }
 }
