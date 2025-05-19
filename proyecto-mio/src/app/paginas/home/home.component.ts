import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor,CommonModule,NgIf } from '@angular/common';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicio/carrito.service';
import { FavoritosService } from '../../servicio/favoritos.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, NgFor, CommonModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 Productos: Producto[] = [
    {
      id: 1,
      nombre: 'iphone 14',
      descripcion: '.',
      precio: 24000,
      imagen: 'https://ishopmx.vtexassets.com/arquivos/ids/267026-800-auto?v=638134658097500000&width=800&height=auto&aspect=true',
      disponible: true,
    },
    {
      id: 2,
      nombre: 'iphone 16E',
      descripcion: '.',
      precio: 20000,
      imagen: 'https://macstore.com.pa/cdn/shop/files/83736d9f-dd3d-57a2-bcf4-2668b975f66d_m_jpg_1_25e66324-fde5-4a27-8215-68475b8427dd.jpg?v=1739993687&width=1920',
      disponible: true,
    },
    {
      id: 2,
      nombre: 'iphone 13',
      descripcion: '',
      precio: 20000,
      imagen: 'https://istore.co.bw/cdn/shop/files/iphone-13_1_1200x.png?v=1698131930',
      disponible: true,
    },


  ]
  constructor(private carritoService: CarritoService, private favoritosservice: FavoritosService) {

  }
  // Metodo para agregar un producto

  agregar(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)
    alert('producto agregado al carrito')
  }
  agregarAfavorito(Producto: Producto) {
    this.favoritosservice.agregarfavoritos(Producto)
    alert('producto agregado a favoritos')
  }

}


