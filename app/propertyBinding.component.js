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
var PropertyBindComponent = (function () {
    function PropertyBindComponent() {
        this.starClass = "glyphicon-star";
        this.title = "App";
        this.username = "test";
        this.isActive = true;
        this.ngc = "active";
        this.imageUrl = "https://1.bp.blogspot.com/-h6ApG7an6_s/V7BPvQuVUoI/AAAAAAAAAJI/0NP4W3JbUc0-5jAAJuJEo5k0waXnH5tmgCK4B/s640/Indian-flag-image-free.jpg";
    }
    PropertyBindComponent.prototype.onClick = function ($event) {
        $event.stopPropagation();
        console.log("clicked", $event);
    };
    PropertyBindComponent.prototype.onDivClick = function () {
        console.log("handed by DIV");
    };
    PropertyBindComponent.prototype.changeStarState = function () {
        this.starClass == "glyphicon-star" ? this.starClass = "glyphicon-star-empty" : this.starClass = "glyphicon-star";
    };
    PropertyBindComponent = __decorate([
        core_1.Component({
            selector: 'propertyBind',
            template: "\n        <div>\n            <img src=\"{{imageUrl}}\"/>\n        </div>\n        <div>\n            <button class=\"btn btn-primary\" [class.active]=\"isActive\">Submit</button>\n            <button class=\"btn btn-danger\" [ngClass]=\"ngc\">Submit</button>\n        </div> \n\n        <div (click)=\"onDivClick()\">\n            <h2>Event Binding</h2>\n            <button on-click=\"onClick($event)\">Submit</button>\n        </div>\n\n        <div>\n            <h2>Two way binding</h2>\n            <input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\">\n            <h3>{{title}}</h3>\n            <input type=\"text\" [(ngModel)]=\"username\">\n            <h3>{{username}}</h3>\n            <input type=\"text\" bindon-ngModel=\"username\">\n            <h3>{{username}}</h3>\n        </div>\n\n        <div>\n            <h2>Create a star icon and change it state from full to empty on click or viseversa</h2>\n            <i class=\"glyphicon\" [ngClass]=\"starClass\" on-click=\"changeStarState()\"></i>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PropertyBindComponent);
    return PropertyBindComponent;
}());
exports.PropertyBindComponent = PropertyBindComponent;
//*******************************************************************************
// Property Binding
// for property binding stick with one style.
// this is one way binding you can use anyone of the following method.
// <img src="{{imageUrl}}"/>
// <img [src]="imageUrl"/>
// <img bind-src="imageUrl"/>
//*******************************************************************************
//*******************************************************************************
// Event Binding
// How to stop event bubbling
//*******************************************************************************
//*******************************************************************************
// Two way binding
// bindon means property Binding (bind) and event binding (on)
// Include FormsModule in module before using ngModel
//*******************************************************************************
//# sourceMappingURL=propertyBinding.component.js.map