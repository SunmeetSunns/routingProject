import { Component, Type ,Input ,Output,EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent {
  @Input() isVisible: boolean;
  @Output() onClose = new EventEmitter();
  popUpContent='';

  closePopup() {
    this.onClose.emit();
  }
  changeContent(newContent: string) {
    this. popUpContent = newContent;
    // show the popup
  }

}
