import { Component,OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';

import { FavoritosService } from '../servicio/favoritos.service';
@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
  productosEnFavorito: { producto: Producto; cantidad: number }[] = []

  constructor(private favoritosservice: FavoritosService) { }

  ngOnInit(): void {
    this.favoritosservice.favoritos$.subscribe((producto) => {
      this.productosEnFavorito = producto
    })
  }
  agregarCantidad(index: number) {
    this.productosEnFavorito[index].cantidad++
  }

  quitarCantidad(index: number) {
    if (this.productosEnFavorito[index].cantidad > 1) {
      this.productosEnFavorito[index].cantidad--
    }
  }
  
  eliminarProducto(productoId:number){
    this.favoritosservice.eliminarDeFavoritos(productoId)
  }

  vaciarFavorito(){
    this.favoritosservice.favoritosCarrito()
  }
 
  realizarCompra(){
    alert('compra Realizada')
    this.vaciarFavorito()
  }

}
