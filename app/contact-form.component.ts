import {Component,OnInit} from '@angular/core';
import { User } from './user.interface';
@Component({
  selector: 'contact-form',
  templateUrl: 'app/contact-form.template.html'
})
export class ContactFormComponent implements OnInit {
public user  :User;
ngOnInit() {
  this.user = {
    name:'',
    address: {
    street: '',
    postcode: '8000'
    }
  };
}

  save(model:User, isValid: boolean,f) {
    //console.log(model, isValid);
    console.log(f);
  }

  log(x){
    console.log(x);
  }
}