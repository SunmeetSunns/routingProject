import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModalComponent } from './common-modal/common-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CommonModalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CommonModalComponent
    
  ]
})
export class SharedModule { }
