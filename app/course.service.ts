import {Injectable} from '@angular/core';

@Injectable()
export class CourseService{
    getCourses(): string[]{
        return ["Courses1","Courses2","Courses3"];
    }
}