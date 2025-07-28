import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']  // <- estaba mal escrito como styleUrl
})
export class RegistroComponent {

  // Método que se llama al enviar el formulario
  onRegister(): void {
    console.log('Formulario de registro enviado');
    // Aquí puedes agregar lógica para enviar datos al servidor, validar, etc.
  }

}
