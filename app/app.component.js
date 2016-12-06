"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.post = {
            title: "Title",
            isFavorite: true,
            isHeart: false,
            heartCount: 10,
            myVote: 0,
            totalVotes: 10
        };
    }
    AppComponent.prototype.onFavoriteChange = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onMyVote = function ($event) {
        console.log($event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>Reuseable Component</h1>\n  <h2>Vote</h2>\n  <voters [myVote]=\"post.myVote\" [totalVotes]=\"post.totalVotes\" (vote)=\"onMyVote($event)\"></voters><br/>\n  <h2>Pre-Select</h2>\n  <favorite [is-favorite]=\"post.isFavorite\" (favoriteChange)=\"onFavoriteChange($event)\"></favorite><br/>\n  <h2>Input and Output example</h2>\n  <heart [is-heart]=\"post.isHeart\" [heart-count]=\"post.heartCount\"></heart>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// <favorite [is-favorite]="post.isFavorite" (favoriteChange)="onFavoriteChange($event)"></favorite>
//   <heart [is-heart]="post.isHeart" [heart-count]="post.heartCount"></heart> 
//# sourceMappingURL=app.component.js.map