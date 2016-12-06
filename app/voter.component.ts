import { Component, Input , EventEmitter , Output } from '@angular/core';

@Component({
    selector:'voters',
    templateUrl:'app/voter.template.html',
    styles:[`
        .voted {color:orange},
        .glyphicon-menu-up{color:#ccc, cursor: pointer;},
        .glyphicon-menu-down{color:#ccc, cursor: pointer;}
    `]
})

export class VoterComponent{
  @Input() myVote;
  @Input() totalVotes;

  @Output() vote = new EventEmitter();
  
  voting(x){
    if(this.myVote != x){
      this.totalVotes += x;
      this.myVote +=x;
      this.vote.emit({ myVote: this.myVote });
    }
  }
}
