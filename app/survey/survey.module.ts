
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


import { SurveyService }  from './survey.service';
import { SurveyComponent } from './survey.component';
import { IndividualSurvey } from './individualSurvey.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        SurveyComponent,
        IndividualSurvey
    ],
    exports: [
        SurveyComponent,
        IndividualSurvey
    ],
    providers: [
        SurveyService
    ]
})
export class SurveyModule {
    
}