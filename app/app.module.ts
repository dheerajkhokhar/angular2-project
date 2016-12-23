import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { SurveyModule } from './survey/survey.module'; 
import { routing } from './app.routing';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { PreventUnsavedChangedGuard } from './prevent-unsaved-chnages-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    SurveyModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:[AuthGuard, AuthService, PreventUnsavedChangedGuard]
})
export class AppModule { }