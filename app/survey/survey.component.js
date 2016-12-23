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
var survey_service_1 = require('./survey.service');
var SurveyComponent = (function () {
    function SurveyComponent(service) {
        this.title = "New Message";
        this.surveyList = service.getSurveys();
    }
    SurveyComponent.prototype.gotoSurvey = function (survey) {
        console.log(survey);
    };
    SurveyComponent = __decorate([
        core_1.Component({
            selector: 'survey',
            template: "<h1>Survey List</h1>\n    <ul>\n        <li *ngFor=\"let survey of surveyList\" (click)=\"gotoSurvey(survey)\" class=\"surveyList\">{{ survey.notificationAttributes.title }}</li>\n    </ul>\n    ",
            styles: [".surveyList { cursor:pointer }"]
        }), 
        __metadata('design:paramtypes', [survey_service_1.SurveyService])
    ], SurveyComponent);
    return SurveyComponent;
}());
exports.SurveyComponent = SurveyComponent;
//# sourceMappingURL=survey.component.js.map