import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupServiceService } from 'src/services/popup-service.service';
import { CommonModalComponent } from '../shared/common-modal/common-modal.component';
import { UpdateProductComponent } from '../update-product/update-product.component';

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
  productData: any;

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
          modalRef.dismiss();
        });
      }
    });
  }
 EditProduct(id){
  debugger;
  const ref=this.modal.open(UpdateProductComponent,{size:'lg',centered:true});
  ref.componentInstance.title="Update Modal";
  ref.componentInstance.heading='Update Product';
  ref.componentInstance.message='Update your product here : ';
  ref.componentInstance.mainData.subscribe(data =>{
    const url= 'http://localhost:3000/products';
    this.productInfo.UpdateProduct(url,id,data).subscribe((result) =>{
      this.productMessage = "Product updated successfully";
      this.UpdatedList();
      ref.dismiss();
    })
  })
  // ref.componentInstance.confirmClicked.subscribe((confirmed) => {
  //   if (confirmed) {
  //     const url = 'http://localhost:3000/products';
  //     this.productInfo.UpdateProduct(url, id).subscribe((result) => {
  //       this.productMessage = "Product deleted successfully";
  //       this.UpdatedList();
  //       ref.dismiss();
  //     });
  //   }
  // });
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
