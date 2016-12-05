import {Component} from '@angular/core';

@Component({
    selector:'propertyBind',
    template:`
        <div>
            <img src="{{imageUrl}}"/>
        </div>
        <div>
            <button class="btn btn-primary" [class.active]="isActive">Submit</button>
            <button class="btn btn-danger" [ngClass]="ngc">Submit</button>
        </div> 

        <div (click)="onDivClick()">
            <h2>Event Binding</h2>
            <button on-click="onClick($event)">Submit</button>
        </div>

        <div>
            <h2>Two way binding</h2>
            <input type="text" [value]="title" (input)="title = $event.target.value">
            <h3>{{title}}</h3>
            <input type="text" [(ngModel)]="username">
            <h3>{{username}}</h3>
            <input type="text" bindon-ngModel="username">
            <h3>{{username}}</h3>
        </div>

        <div>
            <h2>Create a star icon and change it state from full to empty on click or viseversa</h2>
            <i class="glyphicon" [ngClass]="starClass" on-click="changeStarState()"></i>
        </div>
    `
})
export class PropertyBindComponent{
    starClass = "glyphicon-star";
    title = "App";
    username = "test";
    isActive = true;
    ngc = "active";
    imageUrl = "https://1.bp.blogspot.com/-h6ApG7an6_s/V7BPvQuVUoI/AAAAAAAAAJI/0NP4W3JbUc0-5jAAJuJEo5k0waXnH5tmgCK4B/s640/Indian-flag-image-free.jpg";

    onClick($event){
        $event.stopPropagation();
        console.log("clicked",$event)
    }
    onDivClick(){
        console.log("handed by DIV")
    }
    changeStarState(){
        this.starClass == "glyphicon-star" ? this.starClass = "glyphicon-star-empty":this.starClass = "glyphicon-star";
    }
}

//*******************************************************************************
// Property Binding

// for property binding stick with one style.
// this is one way binding you can use anyone of the following method.

// <img src="{{imageUrl}}"/>
// <img [src]="imageUrl"/>
// <img bind-src="imageUrl"/>

//*******************************************************************************


//*******************************************************************************
// Event Binding
// How to stop event bubbling

//*******************************************************************************


//*******************************************************************************
// Two way binding
// bindon means property Binding (bind) and event binding (on)
// Include FormsModule in module before using ngModel
//*******************************************************************************
