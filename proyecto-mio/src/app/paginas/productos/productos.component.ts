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
      descripcion: 'Diseño elegante, cámara mejorada y chip A18 Pro para un rendimiento más rápido y eficiente.',
      precio: 24000,
      imagen: 'https://www.1p.sg/cdn/shop/files/iPhone-16-Black_1cebd178-ed7b-4386-983e-e3aca356bd31.jpg?v=1728668203&width=1445',
      disponible: true,
    },
    {
      id: 2,
      nombre: 'iPhone 15 Pro Max',
      descripcion: 'Diseño en titanio, chip A17 Pro, cámara de 48 MP.',
      precio: 240000,
      imagen: 'https://ipoint.com.ar/26645-large_default/iphone-15-pro-max-256gb.jpg',
      disponible: true,
    },
    {
      id: 3,
      nombre: 'AirPods Pro (2ª gen)',
      descripcion: 'Cancelación activa de ruido, chip H2.',
      precio: 95000,
      imagen: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEBIQEA8PDw8PDxAPEBAPDRAQFREWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NFQ8PFysZFRkrLS0rKysrLS0rKzE4MSsrKys3LS4tLS0rNystKzctLTArLSs0KysrKy0tKy0tLSstK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUHBgj/xAA8EAACAQICBgYIBAYDAQAAAAAAAQIDEQQhBRIxQVFxBhMUYYGRIjJSkqGx0eFCcsHwByNTYoLxQ6LSFv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAARASH/2gAMAwEAAhEDEQA/APagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjlXit/ln8gJAQPFR4P4fUdqXB/ACcEHalwfw+oWKXCS5pfowJwQ9pj/d5DtMf7vICYEPaY/wB3kO0x4S8gJgQ9pjwl5DtK4S8gJgQdpjwl5DtUeEvICcFd4uPCT8F9R2tcH8ALAK/alwfwMrFLg/gBOCONeL3255EgAAAAAAAAAAADSrUUVd+C3s2lKyu9iOdVqNu7/wBLgBmrWctuzgtn3Im/A1cirXrlRZdZL7mvaORzp1yLtAhXZVfkSRq9y+JxoYgsU6whXT11wM6yKUapt1hFXLAgp1tzJwFhYG+zmBo48SOUl/sxVqlKtiCosyrLgjTtHI51TEkPagOwq/LyM9oXBHMp1bm7kRXWp1VLY/DeTQqOPL4fY4SrWZ1cLX11fesmB06dRS570bnPhLVeXh9ORfjK6vxAyAAAAAAACtjZ5Jcc34fv4FCci1jn6XgvmznVplRFiK2451auZq1b3OfXqGaqaVYxrlB1TeNU3jLoQmWadQ5UKpNGsUdiNU2dU5kK5mWIJqupCqX8NUvHlkcChWudXR0763h+plV9SsQ1qxrWnYo4qsVGMRXOdXxRHia5z6tQzVWJ4g2pzuc6Mru29lymrbfqbxHToTJZTOdCpYzKsCp51cy/ouvaaW6WXjuOJ1mZboVLWfBpmVfVNXVixg53Xx5PeiCLur8TfB7Xzl87gXAAAAAAAAUdIrNPu+T+5xcbOyZ9DjKetB22rNHzONYHOc8inUi33Li9n3LMN/BZc+42o4dzd3yXBGVU6NGD9d1FwcYxfwbRtUoRXqTeat6UWn4nE/iRpbEaPpUpYeMV11ScJVZR11BqKcYpbLy9Lb7LPm9DfxLmvRxlGNSP9WgtSol3wbtLwaL0fb1IyjtXJ7UzaNQm0TpDD4unr4epGrD8Uc1OH5oPOP7sa4vCuGa9X5FzUjCqGnWNmkYtlvD4bexukWMNkjvaNhand/id/Dcc3B4XXavlBecjtbhghxj9F92Zx69S6OniahxKtVRltyY0xVqsq1Ey/WpXzRVlBmcFKd7ljCqT2bFtb2ImpYa+cvV+LK2mdLUMLDWrzVKH4IJN1J/lgs3+7lsWL9N07+lKX+MdZ+F2hW1PwdZ3uSjH4Js8z0t/EWpL0cJSjSj/AFKyU6r5RT1Y+OsfWfwu0pisdSrPEJSjSnCNOsoqGvJpuUWlk3G0dntDpx23FrPauK3c+BcpSyLVbBWzWT+D5kUKN2kstZ6tvZf03gfT4N/y4/kj8izgVv43a5N5fAr7EorerLuitr/e+xfoQsiokAAAAAAAAODp3AtJ1IK8dskvw9/I7xX0hU1aU5LaoStzasgPjaVK9l4nWwmGskRYaidXD08iZiq+IwFOrB06sIVKc1aUKkVOEl3p5M+D6RfwkwlZOWEk8JUzahnUw0nw1W7w/wAXZcD1OnhnvyNHTzsVH5b01oXSGiK0Z1I1MPNP+ViaUm6FTfaNRZPZnCWfFHsvRDSMsfgKWIqRSnUU4zsvRlKE5Qcl3PVvbdc+5xmDhUg4TjGpTllKE4qcJc4vJlSODjCKhCMYQikoxhFRjFLYklkkB8ljK6oy1VG8mr7VsuU5aZUX6UJN8LWj5s6lXBKrXqVHs1lSj+WndP8A7OZrW0WmrNXXBk6qg+lVRepTgvzOU/lYz/8AW4j2KPuz/wDRUxWiVB7Zar2ZJ27iu8JHjLyROnFqt0lrS2xpeCl/6KFbSk5eso+F0J4aPGXkjfC4BTf4rLlm+BOqkwekp7IqTXBq6XjuOthsWpvVlFJpX2p3zMUNH5WtZcFsJno/UlCot0tWX5ZZfPVfgXKjndK9ITwuDq14RvOnGKhdXjFynGCk1wWtfwPKNEaBx+laspU1KtK/83EVpNUYO+xzs1v9VZ8EfoCOETWrJJxas00mmntTT2l3C4WMIqEIxhGPqxilGK5JZIuYPP8Ao5/CnCUbTxTeLqey7wwyfdBO8v8AJ+CPQcJgoU4KnThGnTirRhCKhCK4KKyRahTLNKg3sRUUZ4fIoTh1c1O2Wx8LPf8AvvO/Uo2yKGNo3iwLuEofiltf78i2Q4OetTg3tcI352zJgAAAAAAAABS0w11Mk2lfVSu9r1lkinp3Tiw/oQSlWa2P1YLc5d/cfJRxNSpWjOpJyeus28km9iWxLkSq+lwiy5HUoLIrUKN1lt3MnhLVdpZfJlRfVbijSWbPldL9OsLhMdTwNeFaLrRpuNfVj2ZdZJxjd617XVm7WXmfVXAN3KuNnqQlPa4p2XGWxLxdkWyhpF60oU91+slyj6q95p/4gc/DYTVio7bJXfF734krw5ejAy4AfPaWwq6uT4J257j5idKfGPkfVdJ5NU1CNryd2r2bivvY+QlUYEdWlPjHyO5ojDehF7cs+e84UpNn0fRxSScJbU9ZLfZ/f5kV1KWHJ3hVJOL2NNPxLNKmWIQKipho3im9uyX5lk/iWYQEYWm1ul6S57H+nmTJAYjEs0allaxFE+Y0T06w+J0hPAUadWfVKpr4hanZ06eUt99XW9FPe+7MD62TvmVMTHInlUNWr/vMDGjpR1FFNNwupJNNxd3tW4tHnWNxU44ic6cnFqpJKUXZ5O1vhsPpuj+n+u/l1bRq/hayjU8N0u4lHfABQAAAixVbq6cpvPUhKduNlexKQY+nrUqkfapzXnFgedzm5ycpO8pNuT4t5kGk6nV0XUW2Lg/+yJpQcW09pri6Cq0pUnlrxtfg9qfnYzivq9HaVjKKae1EmN0gtV5nneFxFSj6EspLbw5ruLFTSMmtpu4z1rpnSGHxUurx2Gp4qFKUlTlrTo1optXSnBptOyutjsfU4fptQsk4VY2SWyLXzPOMTU/mS5r5G8JEV6dDplhd8prnCX6FrAY2NZyrRd4yajDioR2J8Hdyf+R5bGRZw2JnTetTlKD4xbV+fEg9ajM2lM83p9JcWlbrE+cIN/Iq47S+Iqq1SrKSe2KtGHio2T8Si50g0s6uIk4O8I+hBrY0tr8Xf4FWFTWV3tKVKm5OyV/ki/GlZWIJMO1FuXBZc2WcDpJQqxk3ZXtLkynqvNcVYo1oyi8/sy0j1ChUTXPYWYyPK8JpStSyp1JRXs5OPk8i3LpLi3l1tuUKafyIPQNJYuFKPWzaioPO/wCJPJpcXvt3HJn0wwy2dY+UPqfB4nEzqPWqTlOXGUnJ+F9hBJlH3VbpxRXq06suahFfNny2B0vTw0nDA4ahg41ZR6yUFr1ZJN2TlLcrvLdfI5M2R0Zemub+RFem6J0mrJyld723dl3HafpUoOTd7LZvZ53CvJbG0Q19eo9WN5Sexfq+CLUjqaDm6tGVSW2dWpLzdyfOLUk7NNNNbU1sYwVFUaUaSd9VZvi9rfmb06TqSUYq7bMq9E0fiOspQqb5wi3ztn8blgr6Po6lKEF+GEV8CwaQAAANXAA+UeCjUVpZSjdKS2q3zKdbRNWOxa64x2+R2UrVJrhOXxdy7TJFfG18NGStUhs4pqS5PaihV0NF+rOUfzR1l+h6Pqp7UnzVx2Wn7EPdRYjyir0YlKTkqsc7ZOD4cyWHRma/5Ie7I9T7JT9iHuxHZafsQ92Ig8wXR2f9SHlI3j0fe+rHwi3+p6fCjCOyMVfhFI2t3Lz+wg8zhoOK21G+UUv1ZLDRFFe1L8z+lj0a3cvP7Gbdy8/sIPPHRiskklwSsjR0z0bwXn9h4Lz+xIPOFTN1RTyaTXBq6PRPBef2HgvP7CDziWiaMtzi/wC1tfMjloGD2TkucVL6HpfgvP7DwXn9iweXvo891VeNN/U1/wDnZf1I+4/qepeC8/saOim7yUZcE0ml5iDy2XRpv/lXuP6kdPow1JSdZZXyVJ8Le0erdnh7EPdiOzw9iHuxEHnFPQ8F60pS5LVX6l+hg0lq04PP2U3J83tZ9yqMPZj7qJErCD4/D6ArT9ZdWuMtvkdmho2nQg9VXk1nJ+s/ojrMr1Vey4yj8wLcVZW4JIyAAAAAAAcbFQtWk90tVr3Uv0J6Q0lH00+MbeT+5rSAtQJERQJUUbIBAAAAAAAAGlaerFys5WTerHOTsti7ybsN43BFhq2vBScZQ1l6s1aSztmiUZty4mbcuAAKoAAAAAyZMIyQayIo+sv3uJJGlFelyQFgAAAAAAAFLScck+Dt5/6K9I6OIp60WuKy57jm0gLcCVEMCaIGwAKAAAAAAAAAAAAAAAAAMgDIAZBpMxQW1+AmSQjZAbAAAAAAAAFLE0bPWWx7e5l0w1cCnAmiaTo6uazXxRmLAlBhMyUAZAGAZAGAZAGDIAAwZAAAAAgZABgWIMRibgAAAAAAAAAAAANJU0/sbgCPqxqskAGlmLM3AGlmLM3AGlmLM3AGlmLM3AGlmLM3AGlmLM3AGlmZsbADFjIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkAAf/Z',
      disponible: true,
    },
    {
      id: 4,
      nombre: 'Apple Watch Series 9',
      descripcion: 'Pantalla Always-On, chip S9 y sensores de salud.',
      precio: 145000,
      imagen: 'data:image/jpeg;base64,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',
      disponible: true,
    },
    {
      id: 5,
      nombre: 'iPad Pro 12.9” M2',
      descripcion: 'Liquid Retina XDR, chip M2 y Face ID.',
      precio: 310000,
      imagen: 'https://static.wixstatic.com/media/1a92e1_2fdceeadbbb3485487355fa269916e9d~mv2.png/v1/fill/w_520,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1a92e1_2fdceeadbbb3485487355fa269916e9d~mv2.png',
      disponible: true,
    },
    {
      id: 6,
      nombre: 'MacBook Air M2 13”',
      descripcion: 'Diseño liviano, batería prolongada, chip M2.',
      precio: 420000,
      imagen: 'https://images.fravega.com/f300/50c5ab583ac03f4e56651cc5994a9aef.jpg.webp',
      disponible: true,
    },
    {
      id: 7,
      nombre: 'HomePod mini',
      descripcion: 'Sonido 360º con diseño compacto.',
      precio: 68000,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiU--dZ4qpB7_S56hWZS3mEwi-JFQbVoQtPw&s',
      disponible: true,
    },
    {
      id: 8,
      nombre: 'iPhone SE (3ª gen)',
      descripcion: 'Compacto, potente y asequible con chip A15.',
      precio: 129000,
      imagen: 'https://alephksa.com/cdn/shop/files/MEEN-iPhone_SE3_ProductRED_PDP_Image_Position-1A_fdde8ab5-a3ca-4ffc-9a07-fefdc0ca5db1.jpg?v=1688803808&width=1445',
      disponible: true,
    },
    {
      id: 9,
      nombre: 'Apple Pencil (2ª gen)',
      descripcion: 'Ideal para dibujar, escribir y tomar notas.',
      precio: 50000,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2dIz4EWbohrqL3oTwKT749LtOfLvG12PKg&s',
      disponible: true,
    },
    {
      id: 10,
      nombre: 'iMac 24” M1',
      descripcion: 'Todo en uno, ultradelgado y colorido.',
      precio: 395000,
      imagen: 'https://ipoint.com.ar/26956-large_default/imac-24-retina-45k-m1-chip-8-core-cpu-8-core-gpu-512gb-ssd-blue.jpg',
      disponible: true,
    },
    {
      id: 11,
      nombre: 'AirTag (4 unidades)',
      descripcion: 'Localización precisa con app Buscar.',
      precio: 39999,
      imagen: 'https://www.ismartbolivia.com/wp-content/uploads/2021/04/airtag-double-select-202104-300x300.jpeg',
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



