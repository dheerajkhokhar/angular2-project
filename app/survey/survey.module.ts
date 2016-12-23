
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


import { SurveyService }  from './survey.service';
import { SurveyComponent } from './survey.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        SurveyComponent
    ],
    exports: [
        SurveyComponent
    ],
    providers: [
        SurveyService
    ]
})
export class SurveyModule {
    
}