import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'service',component:ServiceComponent
,children:[{path:'product',component:ProductComponent},{path:'currency',component:CurrencyConvertorComponent},]},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  
  {path:'**',component:NoPageComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
