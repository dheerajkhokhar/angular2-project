import {Component,Input,EventEmitter,Output} from '@angular/core';

@Component({
    selector:'favorite',
    templateUrl:'app/favorite.template.html',
    inputs:['isFavorite:is-favorite'],
    outputs:['change:favoriteChange'],
    styles:[`
      .glyphicon-star{
        color:orange;
      }
    `]
})

export class FavoriteComponent{
  isFavorite = false;

  change = new EventEmitter();

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue:this.isFavorite});
  }
}

//*************************************************************************************************
//We can use @Input() in place of inputs[]
//@Input('is-favorite') isFavorite = false;
//We can use @Output() in place of outputs[]

//*************************************************************************************************


//*************************************************************************************************


//*************************************************************************************************