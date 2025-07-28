import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../model/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // ← CORREGIDO aquí (en plural)
})
export class NavbarComponent implements OnInit {
  cantidadProductos: number = 0
  constructor(private carritoServices: CarritoService) { }
  ngOnInit(): void {
    //escucha los cambios en el carrito para actualizar la cantidad de productos
    this.carritoServices.carrito$.subscribe((productos: { producto: Producto, cantidad: number }[]) => {
      this.cantidadProductos = productos.reduce((total, item) => total + item.cantidad, 0)
    }
    )
  }
  onCarritoClick() {
    console.log('carrito clicked')
  }

  cambiarFondo() {
    let toggle: HTMLInputElement | null = document.getElementById('toggle') as HTMLInputElement
    let label_toggle: HTMLInputElement | null = document.getElementById('toggle') as HTMLInputElement
    if (toggle) {
      let checked: boolean = toggle.checked;
      document.body.classList.toggle('dark', checked)
      if (checked) {
        label_toggle!.innerHTML = '<i class="fa-solid fa-sun"></i>'
      } else {
        label_toggle!.innerHTML = '<i class="fa-solid fa-moon"></i>'

      }
    }
  }
}
