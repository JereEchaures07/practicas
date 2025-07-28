import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { FavoritosService } from '../../servicio/favoritos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  productosEnFavorito: { producto: Producto; cantidad: number }[] = [];

  constructor(
    private favoritosservice: FavoritosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.favoritosservice.favoritos$.subscribe((producto) => {
      this.productosEnFavorito = producto;
    });
  }

  agregarfavoritos(index: number) {
    this.productosEnFavorito[index].cantidad++;
  }

  quitarCantidad(index: number) {
    if (this.productosEnFavorito[index].cantidad > 1) {
      this.productosEnFavorito[index].cantidad--;
    }
  }

  eliminarDeFavoritos(productoId: number) {
    this.favoritosservice.eliminarDeFavoritos(productoId);
  }

  vaciarFavorito() {
    this.favoritosservice.VaciarFavorito();
  }

  // ✅ Esta es la función correcta para el botón "Ir al Carrito"
  irAlCarrito(): void {
    this.router.navigate(['carrito']); // Asegúrate de que esta ruta exista
  }
}
