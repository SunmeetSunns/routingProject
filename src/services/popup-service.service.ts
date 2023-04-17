import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupServiceService {


  constructor() { }
  showModal$ = new Subject<boolean>();

  openModal() {
    this.showModal$.next(true);
  }

  closeModal() {
    this.showModal$.next(false);
  }
}
