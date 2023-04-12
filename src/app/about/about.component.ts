import { Component } from '@angular/core';
import { ApiCallingService } from '../my_services/api-calling.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  newses:any;
  constructor(private newsapi :ApiCallingService){
    newsapi.news().subscribe((data) =>{
      console.warn('newses',this.newses);
      this.newses = data;
    });
   }

}
