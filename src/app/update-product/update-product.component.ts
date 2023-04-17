import { Component , OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/services/common.service';
import { PopupServiceService } from 'src/services/popup-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productData: any;
  update_form:FormGroup;
  productMessage:string;
  constructor(private route : ActivatedRoute,private product:CommonService,private popupService:PopupServiceService){}

  ngOnInit(): void {
    const url='http://localhost:3000/products'
      let ProdId=this.route.snapshot.paramMap.get('id');
      console.log(ProdId);
      this.product.GetProductId(url,ProdId).subscribe((data) => {
        console.warn(data);
        this.productData=data;
      })
  }

  Submit(data :any){
    if(this.productData){
      data.id=this.productData.id;
    }
    const url='http://localhost:3000/products'
    console.log(data);
    this.product.UpdateProduct(url, data.id,data).subscribe((result) => {
      if(result) {
       
        this.productMessage="Product Updated successfully";
       
       
      }
    });
    setTimeout(() => {
      this.productMessage=undefined;
    }, 3000);

  }
  
  onOpenModal() {
    this.popupService.openModal();
    
  }

  onCloseModal() {
    this.popupService.closeModal();
  }

  onConfirm() {
    console.log('Confirmed');
   
    
  }

  onCancel() {
    console.log('Cancelled');
  }

}
