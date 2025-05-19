import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto.model';
@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritossubject = new BehaviorSubject<{ producto: Producto; cantidad: number }[]>([])
  favoritos$ = this.favoritossubject.asObservable();
  agregarfavoritos(producto: Producto) {
    const productos = this.favoritossubject.getValue();
    const encontrado = productos.find(p => p.producto.id === producto.id)
    if (encontrado) {
      encontrado.cantidad++
    } else {
      this.favoritossubject.next([...productos, { producto, cantidad: 1 }])
    }
  }
  eliminarDeFavoritos(productoId: number) {
    const productos = this.favoritossubject.getValue().filter(p => p.producto.id !== productoId)
    this.favoritossubject.next(productos)
  }
  VaciarFavorito() {
    this.favoritossubject.next([])
  }
  constructor() {

  }
}
