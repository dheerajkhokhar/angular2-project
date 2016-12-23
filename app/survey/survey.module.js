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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var survey_service_1 = require('./survey.service');
var survey_component_1 = require('./survey.component');
var individualSurvey_component_1 = require('./individualSurvey.component');
var SurveyModule = (function () {
    function SurveyModule() {
    }
    SurveyModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                survey_component_1.SurveyComponent,
                individualSurvey_component_1.IndividualSurvey
            ],
            exports: [
                survey_component_1.SurveyComponent,
                individualSurvey_component_1.IndividualSurvey
            ],
            providers: [
                survey_service_1.SurveyService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SurveyModule);
    return SurveyModule;
}());
exports.SurveyModule = SurveyModule;
//# sourceMappingURL=survey.module.js.map