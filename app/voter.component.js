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
var VoterComponent = (function () {
    function VoterComponent() {
        this.vote = new core_1.EventEmitter();
    }
    VoterComponent.prototype.voting = function (x) {
        if (this.myVote != x) {
            this.totalVotes += x;
            this.myVote += x;
            this.vote.emit({ myVote: this.myVote });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VoterComponent.prototype, "myVote", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VoterComponent.prototype, "totalVotes", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VoterComponent.prototype, "vote", void 0);
    VoterComponent = __decorate([
        core_1.Component({
            selector: 'voters',
            templateUrl: 'app/voter.template.html',
            styles: ["\n        .voted {color:orange},\n        .glyphicon-menu-up{color:#ccc, cursor: pointer;},\n        .glyphicon-menu-down{color:#ccc, cursor: pointer;}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], VoterComponent);
    return VoterComponent;
}());
exports.VoterComponent = VoterComponent;
//# sourceMappingURL=voter.component.js.map