import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  constructor(private productInfo :CommonService){
   
  }
 
  ngOnInit(): void{
    this.UpdatedList();
  }
  products:any;
  productMessage:string;
 
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
    console.log('delete product',id);

    setTimeout(() => {
      this.productMessage=undefined;
    }, 3000);
  }
 
}
