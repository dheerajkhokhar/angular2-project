import {Component} from '@angular/core';
import {AuhtorService} from './author.service';

@Component({
    selector:'authors',
    template:`
    <h2>Authors</h2>
    {{title}}
    <ul>
        <li *ngFor="let author of authors, let i = index">
          {{i+1}} - {{author}}
        </li>
    </ul><br/>
    <h2>Custom Pipes</h2>
    {{post.title}}
    <br/>
    {{post.body | summary:100}}
    `
})

export class AuthorsComponent{
    title : string = "Title for the auhtors page";
    authors : string[];
    constructor(private authorService : AuhtorService){
        this.authors = this.authorService.getAuthors();
    }
    post={
      title:"Key Bindings for Visual Studio Code",
      body:`
        Visual Studio Code lets you perform most tasks directly from the keyboard. 
        This page lists out the default bindings (keyboard shortcuts) and describes how you can update them.
        If you visit this page on a Mac, you will see the key bindings for the Mac. 
        If you visit using Windows or Linux, you will see the keys for that platform. 
        If you need the key binding for another platform, hover your mouse over the key you are interested in.
      `
    }
}