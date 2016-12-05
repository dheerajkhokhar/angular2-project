import {Injectable} from '@angular/core';

@Injectable()
export class AuhtorService{
    getAuthors() : string[]{
        return ["Author1","Author2","Author3"];
    }
}