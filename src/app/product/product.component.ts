import { Component ,OnInit} from '@angular/core';
import{FormBuilder, FormControl,FormGroup,Validators}from'@angular/forms';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit {
  product_form :FormGroup;
  product:any={};

  constructor(){
    
  }
  ngOnInit(){
   this.buildProduct();
  }
  buildProduct(){
    this.product_form=new FormGroup({
      'product_name':new FormControl('',[Validators.required]),
      'product_category':new FormControl('',[Validators.required]),
      'product_price':new FormControl('',[Validators.required]),
      'product_description':new FormControl('',[Validators.required]),
    })
  }
  saveDetails(){
    console.log(this.product_form.value);
    this.product=Object.assign(this.product,this.product_form.value);
    this.addProduct(this.product);
   
    this.product_form.reset();
   


  }
 
  addProduct(product){
    let products=[];
    if(localStorage.getItem('products')){
      products=JSON.parse(localStorage.getItem('products'));
      products=[product,...products];
    }
    else{
      products=[product];
    }
    localStorage.setItem('Products',JSON.stringify(products));
   

  }

}

//  buildForm() {
//   this.pledgeForm = new FormGroup({
//     'quantity': new FormControl('', [Validators.required]),
//     'amount': new FormControl({ value: '', disabled: true }, [Validators.required]),
//     'entity': new FormControl('ps', [Validators.required, this.validationUtil.optionFieldValidator]),
//   })
// }