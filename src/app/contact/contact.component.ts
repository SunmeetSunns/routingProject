import { Component } from '@angular/core';
import { UserDataService } from '../my_services/user-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  users:any;
  constructor(private userService: UserDataService){
    console.warn('UserData',userService.users());
   this. users=this.userService.users();
  }
}
