import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productdetails="../../assets/products/products.json"

  constructor(private http:HttpClient) { }

  getproducts():Observable<products[]>{
    
    return this.http.get<products[]>(this.productdetails)

  }


}
