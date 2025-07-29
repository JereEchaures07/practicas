import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import {ContactoComponent } from './paginas/contactos/contactos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { ComprasComponent } from './paginas/compras/compras.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { InicioSesionComponent } from './paginas/inicio-sesion/inicio-sesion.component';



export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'productos', component: ProductosComponent},
    { path: 'ofertas', component: OfertasComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'quienes somos', component: QuienessomosComponent },
    {path: 'favoritos',component:FavoritosComponent},
    {path: 'compra',component:ComprasComponent},   
    {path: 'registro',component:RegistroComponent},
    {path: 'inicio sesion', component: InicioSesionComponent},
];