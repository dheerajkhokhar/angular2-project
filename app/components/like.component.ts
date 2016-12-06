import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector:'like',
  template:`
  <i class="glyphicon glyphicon-heart" 
    [class.liked] ="item.iLike"
    on-click="onClickHeart()">
    </i> 
    <span>{{item.totalLikes}}</span>`,
    styles:[`
      .glyphicon-heart {color:#ccc; cursor: pointer;}
      .liked {color: deeppink;}
    `]
})

export class LikeComponent{
  @Input("data") item;
  @Output() likedClick = new EventEmitter();

  onClickHeart(){
    this.item.iLike = !this.item.iLike;
    this.item.totalLikes += this.item.iLike ? 1 : -1;
    this.likedClick.emit({data:this.item}) 
  }

}