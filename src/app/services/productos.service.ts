import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/** 
 * SERVICIOS:
 * 
 * Un servicio para consumir una API con el HttpClient
 * 
*/
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get("https://jsonfy.com/items"); // Observable   
  }


  getById(id){
    return this.http.get("https://jsonfy.com/items/" + id); // Observable   
  }

}
