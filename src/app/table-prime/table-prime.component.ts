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
  products: any=[];
  users: any = [];

  cols: any[];
  constructor(private commonService :CommonService){
   
  }
  ngOnInit(): void {
    this.initialiseProductSchema();
    this.getData();
  }

  // initialiseTableSchema() {
  //   this.cols = [
  //     { field: 'id', header: 'ID' },
  //     { field: 'name', header: 'Name' },
  //     { field: 'username', header: 'Username' },
  //     { field: 'email', header: 'Email' }
  //   ];
  // }
  initialiseProductSchema() {
    this.cols=[
      {field: 'id', header: 'ID'},
      {field: 'name', header: 'Product Name'},
      {field:'desc',header: 'Product Description'},
      {field:'category',header: 'Category'},
      {field:'price',header: 'Price'},
      

    ];
  }

  getData() {
    // const url = 'https://jsonplaceholder.typicode.com/users';
    const url=' http://localhost:3000/products';
    this.commonService.getproductInfo(url).subscribe((data) => {
      console.log('users', data);
      this.users = data;
    });

  }

  UpdatedList(){
    const url='http://localhost:3000/products';
    this.commonService.getproductInfo(url).subscribe((data) =>{
      console.warn('product',data);
      
      this.products = data});
    
  }

}
