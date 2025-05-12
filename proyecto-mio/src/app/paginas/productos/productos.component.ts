import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicio/carrito.service';
import { FavoritosComponent } from '../../favoritos/favoritos.component';

@Component({
  selector: 'app-producto',
  imports: [FormsModule, NgFor, CommonModule, NgIf],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  /*
  productos = [
  {nombre: 'producto 1', precio:100},
  {nombre: 'producto 2', precio:200},
  {nombre: 'producto 3', precio:300},
  ];
  
  
  usuario= {
  nombre :'jere',
  activo: true
  };
  

  productos = [
   { nombre: 'iphone 16', precio: 1200, img: 'https://www.1p.sg/cdn/shop/files/iPhone-16-Black_1cebd178-ed7b-4386-983e-e3aca356bd31.jpg?v=1728668203&width=1445', desc: '' },
   { nombre: 'iphone 15 pro max', precio: 1500, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5bhIS8u-u8BeZPMDi0NnxgzLacyrDteu7A&s', desc: '' },
  ]
  */

  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'iphone 16',
      descripcion: '',
      precio: 24000,
      imagen: 'https://www.1p.sg/cdn/shop/files/iPhone-16-Black_1cebd178-ed7b-4386-983e-e3aca356bd31.jpg?v=1728668203&width=1445',
      disponible: true,
    },
    {
      id: 2,
      nombre: 'iphone 15 pro max',
      descripcion: '',
      precio: 20000,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5bhIS8u-u8BeZPMDi0NnxgzLacyrDteu7A&s',
      disponible: true,
    },

  ]
  constructor(private carritoService: CarritoService, private favoritosservice: FavoritosComponent) {

  }
  // Metodo para agregar un producto

  agregar(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)
    alert('producto agregado al carrito')
  }
  agregarfav(producto: Producto) {
    this.favoritosservice.agregarfavorito(producto)
    alert('producto agregado a favoritos')
  }

}



