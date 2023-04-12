import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // url='http://localhost:3000/products'
  constructor(private http: HttpClient) { }
  // product(){
  //   return this.http.get(this.url);
  // }
  getproductInfo(url : string){
    return this.http.get(url);
  }

}
//  constructor(private http: HttpClient) { }
//   news(){
//     return this.http.get(' https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=4a280822e4ca4ec692ca888d1b29a232 ');
//   }