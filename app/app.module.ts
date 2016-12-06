import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { TwitterComponent }   from './components/twitter.component';
import { LikeComponent }   from './components/like.component';
import { TwitterService }   from './services/twitter.service';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, TwitterComponent, LikeComponent ],
  providers:    [TwitterService],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(){
        console.log("Main",performance.now());
    }
 }
