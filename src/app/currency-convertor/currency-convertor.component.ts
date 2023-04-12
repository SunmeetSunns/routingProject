import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.css']
})
export class CurrencyConvertorComponent implements OnInit {

  currency_form:FormGroup;
  currency:any={};
  rate:number;
  currentrate:number;
  optCurrencies1=['USD','EUR','INR','GBP','JPY'];
  optCurrencies2=[];
  


  
 
  
  constructor(){

  }
  ngOnInit(): void {
      this.GetForm();
  }
  GetForm(){
    this.currency_form=new FormGroup({
      'rate':new FormControl('',Validators.required),
      'amount':new FormControl('',Validators.required),
      'from':new FormControl('',Validators.required),
      'to':new FormControl('',Validators.required),
    
    })
  }
  OnConvert(){
    
    this.currency=Object.assign(this.currency,this.currency_form.value);

    localStorage.setItem('Currency',JSON.stringify(this.currency));
    localStorage.getItem('Currency');
    if(this.currency.from=='INR'){
      this.divide();
    }
    else{
      this.multiply();
    }
     
 
  }
  onCurrencyChange(event:any){
    debugger
    let option=event.target.value;
    switch(option){
      case 'INR':
        this.optCurrencies2=['USD','EUR','GBP','JPY'];
        break;
      default:
        this.optCurrencies2=['INR'];
        break;
    }
  }
  divide(){
    this.currentrate=this.currency.amount/this.currency.rate;
   
  }
  multiply(){
    this.currentrate=this.currency.amount*this.currency.rate;
  }
 


}
