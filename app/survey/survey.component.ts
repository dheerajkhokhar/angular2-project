
import { Component } from '@angular/core';
import { SurveyService } from './survey.service'; 
import { FormComponent } from '../prevent-unsaved-chnages-guard.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'survey',
    template: `<h1>Survey List</h1>
    <ul>
        <li *ngFor="let survey of surveyList" (click)="gotoSurvey(survey)" class="surveyList">{{ survey.notificationAttributes.title }}</li>
    </ul>
    `,
    styles:[`.surveyList { cursor:pointer }`]
})
export class SurveyComponent {
    surveyList;
    title = "New Message";

    constructor(service : SurveyService) {
        this.surveyList = service.getSurveys();
    }

    gotoSurvey(survey){
      console.log(survey);
    }
}