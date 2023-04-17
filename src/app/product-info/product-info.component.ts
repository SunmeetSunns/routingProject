import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupServiceService } from 'src/services/popup-service.service';
import { CommonModalComponent } from '../shared/common-modal/common-modal.component';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  constructor(private productInfo: CommonService, private popupService: PopupServiceService, private modal: NgbModal,){

   
  }
  

  ngOnInit(): void{
    this.UpdatedList();
  }
  products:any;
  productMessage:string;
  popUpContent='';
 
  UpdatedList(){
    const url='http://localhost:3000/products';
    this.productInfo.getproductInfo(url).subscribe((data) =>{
      console.warn('product',data);
      
      this.products = data});
    
  }
  // DeleteProduct(id:number){
   
  //   this.onOpenModal();
  //   if(this.onConfirm()==true){
  //     const url='http://localhost:3000/products';
  //   this.productInfo.DeleteProductInfo(url,id).subscribe((result) =>{
  //     this.productMessage="Product deleted successfully";
  //     this.UpdatedList();

  //   })
  //   }
  //   else{

  //   }
  // }

  DeleteProduct(id) {
    const modalRef = this.modal.open(CommonModalComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.title = 'Delete Modal';
    modalRef.componentInstance.heading = 'Delete Product';
    modalRef.componentInstance.message = 'Are you sure you want to delete this product?';

    modalRef.componentInstance.confirmClicked.subscribe((confirmed) => {
      if (confirmed) {
        const url = 'http://localhost:3000/products';
        this.productInfo.DeleteProductInfo(url, id).subscribe((result) => {
          this.productMessage = "Product deleted successfully";
          this.UpdatedList();
        });
      }
    });
  }
  


  onOpenModal() {
    this.popupService.openModal();
  }

  onCloseModal() {
    this.popupService.closeModal();
  }

  onConfirm() {
    console.log('Confirmed');
    return true;
    
  }

  onCancel() {
    console.log('Cancelled');
  }
 
 
}
