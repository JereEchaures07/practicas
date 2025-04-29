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

  constructor() { }
}
