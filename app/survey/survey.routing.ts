import {Router, RouterModule } from '@angular/router';

import { SurveyComponent } from './survey.component';
import { IndividualSurvey } from './individualSurvey.component';

export const photosRouting = 
RouterModule.forChild([
  {path:'surveylist',component: SurveyComponent},
  {path:'survey',component: IndividualSurvey}
])