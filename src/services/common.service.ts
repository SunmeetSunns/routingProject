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
  saveProductfo(url:string,data:any){
    return this.http.post(url, data);
  }
  DeleteProductInfo(url:string,id:number){
    return this.http.delete(url+'/'+id);
  }
  GetProductId(url:string,id:string){
    return this.http.get(url+'/'+id);
  }
  UpdateProduct(url:string,id :number,product:any){
    return this.http.put(url+'/'+id,product);

  }

}
