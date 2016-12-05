import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { PropertyBindComponent } from  './propertyBinding.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,  PropertyBindComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(){
        console.log("Main",performance.now());
    }
 }
