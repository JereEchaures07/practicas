import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  // Este método se llama cuando se envía el formulario
  onLogin(): void {
    console.log('Inicio de sesión enviado');
    // Aquí podrías conectar con tu servicio de autenticación
  }
}
