import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import {Post} from './../post'

@Injectable()
export class PostService{
  _url : string = "http://jsonplaceholder.typicode.com/posts";
  constructor(private _http:Http){

  }

  // Observable
  // getPosts(): Observable<Post[]>{
  //   return this._http.get(this._url)
  //     .map((res)=>res.json());
  // }

  // Promise

  getPosts(): Promise<Post[]>{
    return this._http.get(this._url)
      .map((res)=>res.json())
      .toPromise();
  }

  createPost(post:Post){
    return this._http.post(this._url,JSON.stringify(post))
      .map((res)=>res.json());
  }

}

//***********************************************************************************************************

// If you prefer promise then we need to convet Observable into promise. Use toPromise().

// CROS solution add header in http request
// public headers = new Headers({ 'Content-Type': 'application/json' });
// public options = new RequestOptions({ headers: this.headers });
// _http.get(this._url,options)

//***********************************************************************************************************