import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
   imports: [FormsModule],
templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactoComponent {
  // Puedes guardar los datos acá si querés usarlos después
  contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  // Función que se llama al enviar el formulario
  enviarFormulario(form: NgForm) {
    if (form.valid) {
      // Guardar los datos
      this.contacto = form.value;

      // Mostrar los datos por consola (podés enviar a API acá)
      console.log('Mensaje enviado:', this.contacto);

      // Opcional: mostrar alerta al usuario
      alert('Gracias por tu mensaje. Te responderemos pronto.');

      // Resetear el formulario
      form.reset();
    } else {
      alert('Por favor completá todos los campos correctamente.');
    }
  }
}
