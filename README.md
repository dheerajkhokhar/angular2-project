# angular2-project

Angular Bindings:

Interpolation
<h1>{{ title }}</h1>

Property binding
<img [src]=“imageUrl” /> <img bind-src=“imageUrl” />

Class binding
<li [class.active]=“isActive” />
<button class="btn btn-danger" [ngClass]="'className'">Submit</button>

Style binding
<button [style.backgroundColor]=“isActive ? ‘blue’ : ‘gray’”>

EWent binding
<button (click)=“onClick($event)”> <button on-click=“onClick($event)”>

Twoway binding
<input type="text" [value]="title" (input)="title = $event.target.value">
import 'FormsModule' from '@angular/forms' when you are using [(ngModel)] or bindon-ngModel as it is not a part of @angular/core.
<input type=“text” [(ngModel)]=“firstName”> 
<input type=“text” bindon-ngModel=“firstName”>
