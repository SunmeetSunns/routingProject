import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common.service';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupServiceService } from 'src/services/popup-service.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  constructor(private productInfo :CommonService,private popupService :PopupServiceService){

   
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
  DeleteProduct(id:number){
   
    this.onOpenModal();
    if(this.onConfirm()==true){
      const url='http://localhost:3000/products';
    this.productInfo.DeleteProductInfo(url,id).subscribe((result) =>{
      this.productMessage="Product deleted successfully";
      this.UpdatedList();

    })
    // console.log('delete product',id);

  
    }
    else{

    }


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
