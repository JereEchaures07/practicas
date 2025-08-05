import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProductosComponent } from './paginas/productos/productos.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },

];
