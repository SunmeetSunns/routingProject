import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common.service';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  constructor(private productInfo :CommonService,private ModalService :NgbModal){
   
  }
  
 closeResult:string ;
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
    const url='http://localhost:3000/products';
   
    this.productInfo.DeleteProductInfo(url,id).subscribe((result) =>{
      this.productMessage="Product deleted successfully";
      
      this.UpdatedList();

    })
    // console.log('delete product',id);

    setTimeout(() => {
      this.productMessage=undefined;
    }, 3000);

  }
  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
  changeContent(newContent: string) {
    this. popUpContent = newContent;
    // show the popup
  }
 
 
}
