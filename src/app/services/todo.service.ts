import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  serviceURL:string = "https://todo-3fc75-default-rtdb.firebaseio.com/products.json"

  constructor(private http:HttpClient) { }

  saveProduct(products: any[]){
    return this.http.put(this.serviceURL,products)
    
  }
  
  showData(){
    return this.http.get(this.serviceURL)
  }
  
}
