import {Component} from '@angular/core';
import {AuhtorService} from './author.service';

@Component({
    selector:'authors',
    template:`
    <h2>Authors</h2>
    {{title}}
    <ul>
        <li *ngFor="let author of authors">
            {{author}}
        </li>
    </ul>
    `
})

export class AuthorsComponent{
    title : string = "Title for the auhtors page";
    authors : string[];
    constructor(private authorService : AuhtorService){
        this.authors = this.authorService.getAuthors();
    }
}