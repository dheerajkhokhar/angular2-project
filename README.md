# angular2-project

Angular Bindings:

Interpolation
{{ title }}

Property binding
[src]=“imageUrl”  
bind-src=“imageUrl”

Class binding
[class.active]=“isActive”
class="btn btn-danger" [ngClass]="'className'">Submit

Style binding
[style.backgroundColor]=“isActive ? ‘blue’ : ‘gray’”

EWent binding
(click)=“onClick($event)” 
on-click=“onClick($event)”

Twoway binding
type="text" [value]="title" (input)="title = $event.target.value"
import 'FormsModule' from '@angular/forms' when you are using [(ngModel)] or bindon-ngModel as it is not a part of @angular/core.
type=“text” [(ngModel)]=“firstName”
type=“text” bindon-ngModel=“firstName”
