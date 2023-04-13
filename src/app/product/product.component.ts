import { Component ,OnInit} from '@angular/core';
import{FormBuilder, FormControl,FormGroup,Validators}from'@angular/forms';
import { CommonService } from 'src/services/common.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit {
  product_form :FormGroup;
  product:any={};
  my_Product:any;

  constructor(private productInfo :CommonService){
    // const url='http://localhost:3000/products';
    // productInfo.getproductInfo(url).subscribe((data) =>{
    //   console.warn('product',data);
      
    //   this.product = data});
  }
 
  ngOnInit(){
   this.buildProduct();
  }
  buildProduct(){
    this.product_form=new FormGroup({
      'name':new FormControl('',[Validators.required]),
      'category':new FormControl('',[Validators.required]),
      'price':new FormControl('',[Validators.required]),
      'desc':new FormControl('',[Validators.required]),
    })
  }
  saveForm(){
     const my_Product=this.product_form.value;
    const url='http://localhost:3000/products';
    this.productInfo.saveProductfo(url,my_Product).subscribe((result) => console.log(result));
    this.product_form.reset();
  }
  saveDetails(){
    // const url='http://localhost:3000/products';
    console.log(this.product_form.value);
    this.product=Object.assign(this.product,this.product_form.value);
    localStorage.setItem('Products',JSON.stringify(this.product));
    // this.productInfo.saveProductfo(url,this.product).subscribe((result) => {})


    // this.addProduct(this.product);
   
    this.product_form.reset();
   


  }
 
  // addProduct(product){
  //   let products=[];
  //   if(localStorage.getItem('products')){
  //     products=JSON.parse(localStorage.getItem('products'));
  //     products=[product,...products];
  //   }
  //   else{
  //     products=[product];
  //   }
  //   localStorage.setItem('Products',JSON.stringify(products));
  // }

}

//  buildForm() {
//   this.pledgeForm = new FormGroup({
//     'quantity': new FormControl('', [Validators.required]),
//     'amount': new FormControl({ value: '', disabled: true }, [Validators.required]),
//     'entity': new FormControl('ps', [Validators.required, this.validationUtil.optionFieldValidator]),
//   })
// }