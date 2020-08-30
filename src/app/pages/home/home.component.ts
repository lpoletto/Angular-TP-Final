/**
 * CONTROLADOR
 * Son clases
 */
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  productos;

  // Inyectamos el servicio
  constructor(private productosService:ProductosService){
    // Observable
    this.productosService.getAll().subscribe(data => {
      console.log(data);
      this.productos = data;
    });
    
    //this.productos = this.productosService.getAll();
  }


  cambiarProductos(){
    this.productos = [
      {
        "id" : 1,
        "name" : "Moto X",
        "price" : 15000
      },
      {
        "id" : 2,
        "name" : "Moto G",
        "price" : 10000
      }
    ];
  }

  ngOnInit(): void {
  }

}
