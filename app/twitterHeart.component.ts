import { Component,Input } from '@angular/core';

@Component({
    selector:'heart',
    templateUrl:'app/twitterHeart.template.html',
    styles:[`
        .glyphicon-heart {
            color:#ccc;
        }
        .pink{
            color:deeppink;
        }
    `]
})

export class TwitterHeart{
    @Input('is-heart') isHeart;
    @Input('heart-count') heartCount;

    onClick(){
        this.isHeart == true ? this.heartCount--: this.heartCount++;
        this.isHeart = !this.isHeart;
    }
}