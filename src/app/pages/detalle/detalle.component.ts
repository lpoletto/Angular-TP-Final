import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  producto;

  constructor(private activatedRoute:ActivatedRoute, private productosService:ProductosService) {

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    
    // muestro la data
    this.productosService.getById(id).subscribe(data => {
      console.log(data);
      this.producto = data;
    })
    
  }

  // Métodos
  
  ngOnInit(): void {
  }

}
