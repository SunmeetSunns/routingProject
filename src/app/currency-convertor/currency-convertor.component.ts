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
  
   
    alert("currency: " + JSON.stringify(this.currency));
    if(this.currency.from=='USD' ){
      this.currentrate=this.currency.amount*this.currency.rate;
    }
    else if(this.currency.from=='EUR'){
      this.currentrate=this.currency.amount*this.currency.rate;
    }
    else if(this.currency.from=='GBP'){
      this.currentrate=this.currency.amount*this.currency.rate;
    }
    else if(this.currency.from=='JPY'){
      this.currentrate=this.currency.amount*this.currency.rate;
    }
    else{
      this.currentrate=this.currency.amount*this.currency.rate;
    }
    console.log(this.currentrate);
  }
  // convertCurrency(amount: number, rate : number,fromCurrency: string, toCurrency: string): number {
  //   // Set the exchange rate between the two currencies
  //   const exchangeRate = 1.2; // Example rate: 1 USD = 1.2 EUR
    
  //   // Convert the amount to the destination currency
  //   const convertedAmount = amount * exchangeRate;
    
  //   // Return the converted amount rounded to two decimal places
  //   return parseFloat(convertedAmount.toFixed(2));
  // }
  


}
