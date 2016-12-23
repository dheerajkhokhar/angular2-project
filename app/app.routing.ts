import {Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SurveyComponent } from './survey/survey.component';
import { NotFoundComponent } from './not-found.component';

import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangedGuard } from './prevent-unsaved-chnages-guard.service';

export const routing = 
RouterModule.forRoot([
  {path:'',component: HomeComponent},
  {
    path:'survey',
    component: SurveyComponent
  },
  {path:'**',component: NotFoundComponent}
])