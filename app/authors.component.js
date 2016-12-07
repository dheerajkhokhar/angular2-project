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
var author_service_1 = require('./author.service');
var AuthorsComponent = (function () {
    function AuthorsComponent(authorService) {
        this.authorService = authorService;
        this.title = "Title for the auhtors page";
        this.post = {
            title: "Key Bindings for Visual Studio Code",
            body: "\n        Visual Studio Code lets you perform most tasks directly from the keyboard. \n        This page lists out the default bindings (keyboard shortcuts) and describes how you can update them.\n        If you visit this page on a Mac, you will see the key bindings for the Mac. \n        If you visit using Windows or Linux, you will see the keys for that platform. \n        If you need the key binding for another platform, hover your mouse over the key you are interested in.\n      "
        };
        this.authors = this.authorService.getAuthors();
    }
    AuthorsComponent = __decorate([
        core_1.Component({
            selector: 'authors',
            template: "\n    <h2>Authors</h2>\n    {{title}}\n    <ul>\n        <li *ngFor=\"let author of authors, let i = index\">\n          {{i+1}} - {{author}}\n        </li>\n    </ul><br/>\n    <h2>Custom Pipes</h2>\n    {{post.title}}\n    <br/>\n    {{post.body | summary:100}}\n    "
        }), 
        __metadata('design:paramtypes', [author_service_1.AuhtorService])
    ], AuthorsComponent);
    return AuthorsComponent;
}());
exports.AuthorsComponent = AuthorsComponent;
//# sourceMappingURL=authors.component.js.map