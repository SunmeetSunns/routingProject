import { Component } from '@angular/core';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  products:any;
  constructor(private productInfo :CommonService){
    productInfo.product().subscribe((data) =>{
      console.warn('product',data);
      
      this.products = data});
  }
}
