import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule}from '@angular/material/button';
import{ReactiveFormsModule} from '@angular/forms';
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductInfoComponent } from './product-info/product-info.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { TablePrimeComponent } from './table-prime/table-prime.component';
import { TableModule } from 'primeng/table';
import { PopupServiceService } from 'src/services/popup-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    NoPageComponent,
    ProductComponent,
    CurrencyConvertorComponent,
    ProductInfoComponent,
    UpdateProductComponent,
    TablePrimeComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    TableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
