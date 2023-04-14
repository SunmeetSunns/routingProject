import { Component,OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProductComponent } from '../product/product.component';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-table-prime',
  templateUrl: './table-prime.component.html',
  styleUrls: ['./table-prime.component.css']
})
export class TablePrimeComponent implements OnInit {
  products: any;
  constructor(private productInfo :CommonService){
   
  }
  ngOnInit(): void {
      
  }
  UpdatedList(){
    const url='http://localhost:3000/products';
    this.productInfo.getproductInfo(url).subscribe((data) =>{
      console.warn('product',data);
      
      this.products = data});
    
  }

}
