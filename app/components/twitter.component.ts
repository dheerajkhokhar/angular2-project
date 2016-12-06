import { Component } from '@angular/core';
import { LikeComponent }   from './../components/like.component';
import { TwitterService } from './../services/twitter.service';

@Component({
    selector:'twitter',
    templateUrl:'./app/templates/twitter.template.html'
})

export class TwitterComponent{
  twitterList:any[]
  
  constructor(private twitterService : TwitterService){
    this.twitterList = twitterService.getAllUsers();
  }

  changePrint(data){
    console.log(data);
    console.log(this.twitterList);
  }

}