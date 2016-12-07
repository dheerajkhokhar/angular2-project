import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CoursesComponent } from  './courses.component';
import { AuthorsComponent } from  './authors.component';
import { CourseService } from './course.service';
import { AuhtorService } from './author.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective, SummaryPipe ],
  bootstrap:    [ AppComponent ],
  providers:    [ CourseService, AuhtorService ],
})
export class AppModule {
  constructor(){
        console.log("Main",performance.now());
    }
 }
