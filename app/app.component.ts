import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'my-app',
  template: `
  <ul>
  <li><a routerLink="">Home</a></li>
  <li><a routerLink="surveylist">Survey</a></li>
  </ul>
  <button (click)="onClick()"> Survey </button>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  constructor(private _router:Router){}
  onClick(){
    this._router.navigate(['surveylist']);
  }
}