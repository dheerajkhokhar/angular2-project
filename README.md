# angular2-project

Angular Bindings:

Interpolation<br/>
{{ title }}<br/><br/>

Property binding<br/>
[src]=“imageUrl” <br/> 
bind-src=“imageUrl”<br/><br/>

Class binding<br/>
[class.active]=“isActive”<br/>
class="btn btn-danger" [ngClass]="'className'">Submit<br/><br/>

Style binding<br/>
[style.backgroundColor]=“isActive ? ‘blue’ : ‘gray’”<br/><br/>

Event binding<br/>
(click)=“onClick($event)” <br/>
on-click=“onClick($event)”<br/><br/>

Twoway binding
type="text" [value]="title" (input)="title = $event.target.value"<br/>
import 'FormsModule' from '@angular/forms' when you are using [(ngModel)] or bindon-ngModel as it is not a part of @angular/core.<br/>
type=“text” [(ngModel)]=“firstName”<br/>
type=“text” bindon-ngModel=“firstName”<br/>
