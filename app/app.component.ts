import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Reuseable Component</h1>
  <h2>Vote</h2>
  <voters [myVote]="post.myVote" [totalVotes]="post.totalVotes" (vote)="onMyVote($event)"></voters><br/>
  <h2>Pre-Select</h2>
  <favorite [is-favorite]="post.isFavorite" (favoriteChange)="onFavoriteChange($event)"></favorite><br/>
  <h2>Input and Output example</h2>
  <heart [is-heart]="post.isHeart" [heart-count]="post.heartCount"></heart>
  `
})
export class AppComponent { 
  post={
    title:"Title",
    isFavorite:true,
    isHeart:false,
    heartCount:10,
    myVote:0,
    totalVotes:10
  }

  onFavoriteChange($event){
    console.log($event);
  }
  onMyVote($event){
    console.log($event);
  }

}

// <favorite [is-favorite]="post.isFavorite" (favoriteChange)="onFavoriteChange($event)"></favorite>
//   <heart [is-heart]="post.isHeart" [heart-count]="post.heartCount"></heart>