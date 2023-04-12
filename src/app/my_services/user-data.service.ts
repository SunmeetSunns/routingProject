import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { 
   
  }
  users(){
    return[
      {name : 'John' ,age:'34',email : 'john@mail.com'},
      {name : 'Mohan' ,age:'28',email : 'mohan@mail.com'},
      {name : 'Rohan' ,age:'24',email : 'Rohan@mail.com'}
    ]
  }
}
