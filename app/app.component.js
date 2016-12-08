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
var post_service_1 = require('./services/post.service');
require('rxjs/add/operator/debounceTime');
var AppComponent = (function () {
    function AppComponent(_postService) {
        this._postService = _postService;
        this.isLoading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.createPost({ userId: 1, title: "a", body: "test" }).subscribe(function (posts) { return console.log(posts); });
        // Observable
        // this._postService.getPosts().subscribe((posts) => {
        //   this.isLoading = false;
        //   console.log(posts[0].id)
        // });
        // Promise
        this._postService.getPosts().then(function (posts) {
            _this.isLoading = false;
            console.log(posts[0].id);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>Server Example</h1>\n    <div *ngIf=\"isLoading\"><i class=\"fa fa-spinner fa-spin fa-3x\"></i></div>\n    <div *ngIf=\"!isLoading\">Data Loaded...</div>\n  "
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//***********************************************************************************************************
// In case of observable use subscribe
// In case of promise use then
//***********************************************************************************************************
//# sourceMappingURL=app.component.js.map