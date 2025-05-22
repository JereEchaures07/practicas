import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicio/carrito.service';
import { FavoritosService } from '../../servicio/favoritos.service';

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
      nombre: 'Iphone 16',
      descripcion: '.',
      precio: 24000,
      imagen: 'https://www.1p.sg/cdn/shop/files/iPhone-16-Black_1cebd178-ed7b-4386-983e-e3aca356bd31.jpg?v=1728668203&width=1445',
      disponible: true,
    },
    {
      id: 1,
      nombre: 'iPhone 15 Pro Max',
      descripcion: 'Diseño en titanio, chip A17 Pro, cámara de 48 MP.',
      precio: 240000,
      imagen: 'https://images.macrumors.com/t/O5US5fRzA7w4LJ66rxqHoh6GTF4=/2500x/article-new/2023/09/iPhone-15-Pro-Blue-Titanium-Feature.jpg',
      disponible: true,
    },
    {
      id: 2,
      nombre: 'AirPods Pro (2ª gen)',
      descripcion: 'Cancelación activa de ruido, chip H2.',
      precio: 95000,
      imagen: 'https://images.macrumors.com/t/UM3tRZLgm2EOK9gT4ULnHE9pRB8=/800x0/article-new/2022/09/airpods-pro-2.jpg',
      disponible: true,
    },
    {
      id: 3,
      nombre: 'Apple Watch Series 9',
      descripcion: 'Pantalla Always-On, chip S9 y sensores de salud.',
      precio: 145000,
      imagen: 'https://images.macrumors.com/t/ilPUzOVFCEkVzCWYaJh3KOMCZl0=/800x0/article-new/2023/09/Apple-Watch-Series-9-Pink-Band.jpg',
      disponible: true,
    },
    {
      id: 4,
      nombre: 'iPad Pro 12.9” M2',
      descripcion: 'Liquid Retina XDR, chip M2 y Face ID.',
      precio: 310000,
      imagen: 'https://images.macrumors.com/t/I_0ddgPLoWAV0iMp-PPKMvq-XVw=/800x0/article-new/2022/10/ipad-pro-2022.jpg',
      disponible: true,
    },
    {
      id: 5,
      nombre: 'MacBook Air M2 13”',
      descripcion: 'Diseño liviano, batería prolongada, chip M2.',
      precio: 420000,
      imagen: 'https://images.macrumors.com/t/zH6kaEqjFZDAoyBYY9xCtM9rmZQ=/800x0/article-new/2022/06/M2-MacBook-Air-Colors.jpg',
      disponible: true,
    },
    {
      id: 6,
      nombre: 'HomePod mini',
      descripcion: 'Sonido 360º con diseño compacto.',
      precio: 68000,
      imagen: 'https://images.macrumors.com/t/9vZSc0qUGYBZYQ42STqI3bPgdfg=/800x0/article-new/2020/10/homepod-mini-colors.jpg',
      disponible: true,
    },
    {
      id: 7,
      nombre: 'iPhone SE (3ª gen)',
      descripcion: 'Compacto, potente y asequible con chip A15.',
      precio: 129000,
      imagen: 'https://images.macrumors.com/t/QZLSF0uPLh7VrzwVuI8EXOvHR84=/800x0/article-new/2022/03/2022-iPhone-SE.jpg',
      disponible: true,
    },
    {
      id: 8,
      nombre: 'Apple Pencil (2ª gen)',
      descripcion: 'Ideal para dibujar, escribir y tomar notas.',
      precio: 50000,
      imagen: 'https://images.macrumors.com/t/ZR-Rk3HpczCuN4SpgUuJpNN-lUs=/800x0/article-new/2021/04/Apple-Pencil-2-Design-Feature.jpg',
      disponible: true,
    },
    {
      id: 9,
      nombre: 'iMac 24” M1',
      descripcion: 'Todo en uno, ultradelgado y colorido.',
      precio: 395000,
      imagen: 'https://images.macrumors.com/t/BL5Id0CnClNR93JlhDdoXcdLv2o=/800x0/article-new/2021/04/imac-2021-hero.jpg',
      disponible: true,
    },
    {
      id: 10,
      nombre: 'AirTag (4 unidades)',
      descripcion: 'Localización precisa con app Buscar.',
      precio: 39999,
      imagen: 'https://images.macrumors.com/t/PjBKeH7ntx2gGKyQwrMJm64t1ew=/800x0/article-new/2021/04/airtags-2021.jpg',
      disponible: true,
    }
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



  busqueda: string = '';
  precioMin: number | null = null;
  precioMax: number | null = null;

  productosFiltrados() {
    return this.Productos.filter(p => {
      const coincideNombre = p.nombre.toLowerCase().includes(this.busqueda.toLowerCase());
      const coincideMin = this.precioMin == null || p.precio >= this.precioMin;
      const coincideMax = this.precioMax == null || p.precio <= this.precioMax;
      return coincideNombre && coincideMin && coincideMax;
    });
  }

}



