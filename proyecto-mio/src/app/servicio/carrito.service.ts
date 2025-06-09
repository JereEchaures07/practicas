import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductosComponent } from '../paginas/productos/productos.component';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritosubject = new BehaviorSubject<{ producto: Producto; cantidad: number }[]>([])
  carrito$ = this.carritosubject.asObservable();
  agregarAlcarrito(producto: Producto) {
    const productos = this.carritosubject.getValue();
    const encontrado = productos.find(p => p.producto.id === producto.id)
    if (encontrado) {
      encontrado.cantidad++
    } else {
      this.carritosubject.next([...productos, { producto, cantidad: 1 }])
    }
  }
  eliminarDelCarrito(productoId: number) {
    const productos = this.carritosubject.getValue().filter(p => p.producto.id !== productoId)
    this.carritosubject.next(productos)
  }
  VaciarCarrito() {
    this.carritosubject.next([])
  }

  // Metodo para actualizar la cantidad de un producto en el carrito
  actualizarCantidad(productoId: number, nuevaCantidad: number) {
    // Recorremos el carrito y actualizamos la cantidad del producto con el ID dado
    const Productos = this.carritosubject.getValue().map(item => {
      if (item.producto.id === productoId) {
        // retomamos una copia del producto con la nueva cantidad
        return { ...item, cantidad: nuevaCantidad }
      }
      return item
    })
    // emitimoes el nuevo estado del carrito
    this.carritosubject.next(Productos)
  }
  // metodo para obtener los productos del carrito como un arreglo 
  obtenerProductos(): {producto:Producto;cantidad:number}[]{
    return this.carritosubject.getValue();
  }

  // metodo para calcular el total a pagar (precio * cantidad de cada producto)
  obtenerTotal():number{
    const productos = this.carritosubject.getValue();
    // Usamos reduce para sumar los subtotales de cada producto
    return productos.reduce((total, item)=> total + item.producto.precio * item.cantidad,0)
  }

  constructor() { }
}
