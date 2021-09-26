import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './domain/Product';
import { User } from './domain/User';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  
  
  private baseurl="http://localhost:8080/api/";
  constructor(private http: HttpClient) { 
    
  }

  authenticate(user:User):Observable<any>
  { 
    return this.http.post(this.baseurl+"authenticate",user,{ responseType: 'text'})
    .pipe(map(res => {
      
      return res;
  }));;
  }
  
  addProduct(product:Product):Observable<any>
  { 
    return this.http.post(this.baseurl+"product/addProduct",product)
    .pipe(map(res => {
      
      return res;
  }));;
  }
  
  getAllProducts():Observable<any> {
    let token="Bearer "+sessionStorage.getItem('token')?.toString();
    const headers = { 'Authorization': token};
    return this.http.get(this.baseurl+"product/getAll",{headers})
    .pipe(map(res => {
      return res;
  }));
  }
  deleteProduct(id:number) {
    let token="Bearer "+sessionStorage.getItem('token')?.toString();
    const headers = { 'Authorization': token};
    return this.http.delete(this.baseurl+"product/deleteProduct/"+id,{headers,responseType: 'text'})
    .pipe(map(res => {
      return res;
    }));
  }
  updateProduct(prod: Product) {
    let token="Bearer "+sessionStorage.getItem('token')?.toString();
    const headers = { 'Authorization': token};
    return this.http.put(this.baseurl+"product/updateProduct/",prod,{headers})
    .pipe(map(res => {
      return res;
    }));
  }
}
