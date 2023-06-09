import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { TablePrimeComponent } from './table-prime/table-prime.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'service', component: ServiceComponent,
    children: [
      { path: 'product', component: ProductComponent },
      { path: 'currency', component: CurrencyConvertorComponent },
      { path: 'product_info', component: ProductInfoComponent },
      { path: 'p-table', component: TablePrimeComponent },
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'update/:id', component: UpdateProductComponent },
  { path: '**', component: NoPageComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
