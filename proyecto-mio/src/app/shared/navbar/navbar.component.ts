import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CarritoService } from '../../servicio/carrito.service'; 
import { Producto } from '../../model/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cantidadProductos: number = 0
  constructor(private carritoServices: CarritoService) { }
  ngOnInit(): void {
    //escucha los cambios en el carrito para actualizar la cantidad de productos
    this.carritoServices.carrito$.subscribe((productos: { producto: Producto, cantidad: number }[]) => {
      this.cantidadProductos = productos.reduce((total, item) => total + item.cantidad, 0)
    }
    )
  }
  onCarritoClick(){
    console.log('carrito clicked')
  }

}
