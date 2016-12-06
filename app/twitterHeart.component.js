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
var TwitterHeart = (function () {
    function TwitterHeart() {
    }
    TwitterHeart.prototype.onClick = function () {
        this.isHeart == true ? this.heartCount-- : this.heartCount++;
        this.isHeart = !this.isHeart;
    };
    __decorate([
        core_1.Input('is-heart'), 
        __metadata('design:type', Object)
    ], TwitterHeart.prototype, "isHeart", void 0);
    __decorate([
        core_1.Input('heart-count'), 
        __metadata('design:type', Object)
    ], TwitterHeart.prototype, "heartCount", void 0);
    TwitterHeart = __decorate([
        core_1.Component({
            selector: 'heart',
            templateUrl: 'app/twitterHeart.template.html',
            styles: ["\n        .glyphicon-heart {\n            color:#ccc;\n        }\n        .pink{\n            color:deeppink;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], TwitterHeart);
    return TwitterHeart;
}());
exports.TwitterHeart = TwitterHeart;
//# sourceMappingURL=twitterHeart.component.js.map