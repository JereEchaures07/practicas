import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../model/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule,FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productosEncarrito: { producto: Producto; cantidad: number }[] = []

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe((productos) => {
      this.productosEncarrito = productos
    })
  }
  agregarCantidad(index: number) {
    this.productosEncarrito[index].cantidad++
  }

  quitarCantidad(index: number) {
    if (this.productosEncarrito[index].cantidad > 1) {
      this.productosEncarrito[index].cantidad--
    }
  }
  
  eliminarProducto(productoId:number){
    this.carritoService.eliminarDelCarrito(productoId)
  }

  vaciarCarrito(){
    this.carritoService.VaciarCarrito()
  }
 
  realizarCompra(){
    alert('compra Realizada')
    this.vaciarCarrito()
  }

}

