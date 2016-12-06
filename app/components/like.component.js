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
var LikeComponent = (function () {
    function LikeComponent() {
        this.likedClick = new core_1.EventEmitter();
    }
    LikeComponent.prototype.onClickHeart = function () {
        this.item.iLike = !this.item.iLike;
        this.item.totalLikes += this.item.iLike ? 1 : -1;
        this.likedClick.emit({ data: this.item });
    };
    __decorate([
        core_1.Input("data"), 
        __metadata('design:type', Object)
    ], LikeComponent.prototype, "item", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LikeComponent.prototype, "likedClick", void 0);
    LikeComponent = __decorate([
        core_1.Component({
            selector: 'like',
            template: "\n  <i class=\"glyphicon glyphicon-heart\" \n    [class.liked] =\"item.iLike\"\n    on-click=\"onClickHeart()\">\n    </i> \n    <span>{{item.totalLikes}}</span>",
            styles: ["\n      .glyphicon-heart {color:#ccc; cursor: pointer;}\n      .liked {color: deeppink;}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LikeComponent);
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map