import {Component} from '@angular/core';
import {CourseService} from './course.service';

@Component({
    selector:'courses',
    template:`
    <h2>Courses</h2>
    {{ title }}
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    `
})

export class CoursesComponent{
    title : string = "This title of courses page";
    courses : string[];
    constructor(private courseService : CourseService){
        console.log(courseService);
        console.log("Sub",performance.now());
        this.courses = this.courseService.getCourses();
    }
}