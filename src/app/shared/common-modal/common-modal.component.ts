import { Component ,OnInit,Input ,Output,EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent implements OnInit {
  @Input() title = ``;
  @Input() heading = ``;
  @Input() message = ``;
  @Output() confirmClicked = new EventEmitter<any>();

  constructor(public activeModal: NgbActiveModal) { }
  
  ngOnInit(): void {
  }

  confirm() {
    this.confirmClicked.emit(true);
  }
  
 


}
