import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../model/producto.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productosEncarrito: { producto: Producto; cantidad: number }[] = []

  constructor(private carritoService: CarritoService, private router: Router) { }

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

  eliminarProducto(productoId: number) {
    this.carritoService.eliminarDelCarrito(productoId)
  }

  vaciarCarrito() {
    this.carritoService.VaciarCarrito()
  }

  /*realizarCompra(){
    alert('compra Realizada')
    this.vaciarCarrito()
  }
    */
  // Navega el formulario de compra
  irAFormularioCompra() {
    // redirige al usuario a la rita '/compra', donde se encuentra el formulario
    this.router.navigate(['/compra'])
  }
  // Calcular el total del carrito de compras
  calcularTotal(): number {
    // Recorre el arreglo de productos en el carrito y suma el resultado de (precio * cantidad) de cada item
    return this.productosEncarrito.reduce((total, item) => {
      return total + item.producto.precio * item.cantidad
    }, 0)
  }

}

