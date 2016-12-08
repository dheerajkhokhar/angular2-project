import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule,JsonpModule } from '@angular/http';
import {PostService} from './services/post.service'

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [PostService]
})
export class AppModule {
  constructor(){
        console.log("Main",performance.now());
    }
 }

//*********************************************************************************************

// To connect to a server import HttpModule and JsonpModule from @angular/http 
// get()    : get data
// post()   : create data
// put()    : update data with complete representation 
// patch()  : update only part of resource
// delete() : delete resource
// head()   : getting meta data about the resource (use if you want to check existence of resource)

//*********************************************************************************************
 
