import { Component, Type ,OnInit,Input ,Output,EventEmitter } from '@angular/core';

import { PopupServiceService } from 'src/services/popup-service.service';


@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() buttons: any[];

  showModal = false;
  constructor(private PopupService: PopupServiceService){}
  ngOnInit(): void {
    this.PopupService.showModal$.subscribe(show=>this.showModal=show);
  }
  onClose() {
    this.PopupService.closeModal();
  }

  onButtonClicked(button: any) {
    button.action();
    this.onClose();
  }
  
 


}
