import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { FavoriteComponent } from  './favorite.component';
import { TwitterHeart } from  './twitterHeart.component';
import { VoterComponent } from  './voter.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,  FavoriteComponent, TwitterHeart,VoterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(){
        console.log("Main",performance.now());
    }
 }
