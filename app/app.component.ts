import { Component ,OnInit } from '@angular/core';
import {PostService} from './services/post.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'my-app',
  template: `
    <h1>Server Example</h1>
    <div *ngIf="isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i></div>
    <div *ngIf="!isLoading">Data Loaded...</div>
  `
})
export class AppComponent implements OnInit {
  isLoading = true;
  
  constructor(private _postService : PostService){
  }

  ngOnInit(){
    this._postService.createPost({userId:1,title:"a",body:"test"}).subscribe((posts) => console.log(posts));

    // Observable
    // this._postService.getPosts().subscribe((posts) => {
    //   this.isLoading = false;
    //   console.log(posts[0].id)
    // });

    // Promise
    this._postService.getPosts().then((posts) => {
      this.isLoading = false;
      console.log(posts[0].id)
    });
  }
 }

//***********************************************************************************************************

// In case of observable use subscribe
// In case of promise use then

//***********************************************************************************************************
