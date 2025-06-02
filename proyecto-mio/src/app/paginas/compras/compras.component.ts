import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CarritoService } from '../../servicio/carrito.service';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-compras',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent implements OnInit {
  // declaracion del formulario reactivo para la compra
  formularioCompra!: FormGroup;

  // variable para almacenar el total de la compra (subtotal + envio)
  total!: number;

  // costo fijo de envio
  envio = 1500;

  // indicador para saber si la factura ya fue generada
  facturaGenerada = false;

  // objeto que contiene la informacion de la factura generada

  factura: any;

  // controla la visibilidad del model que muestra el pdf

  mostrarModal = false;

  // fuente segura para mostrar el pdf generado en el iframe (URL, sanitizada)
  pdfSrc: SafeResourceUrl | undefined;

  constructor(
    private fb: FormBuilder, // formBuilder para crear el formulario reactivo

    private carritoService: CarritoService,

    private sanitizer: DomSanitizer,

  ) { }

  // metodo que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // formulario con los campos requeridos y validadores 
    this.formularioCompra = this.fb.group({
      nombre: ['', Validators.required],

      direccion: ['', Validators.required],

      correo: ['', Validators.required],

      telefono: ['', Validators.required],

      codigoPostal: ['', Validators.required],

      ciudad: ['', Validators.required],

      provincia: ['', Validators.required],

      metodoPago: ['', Validators.required],
    })
  }

  // calcular el total de la compra sumando el subtotal y el costo de envio
  calcularTotal(): number {
    const subtotal = this.carritoService.obtenerTotal(); //Obtiene subtotal del carrito
    this.total = subtotal + this.envio
    return this.total
  }

  // Prepara los datos para la factura con cliente, productos, totales y fecha
  emitirFactura(): void {
    const datosClientes = this.formularioCompra.value; // Datos ingresados en el formulario
    const productos = this.carritoService.obtenerProductos(); // Productos del carrito
    const totalFinal = this.calcularTotal(); // total calculado con envio

    // construye el objeto factura con toda la info necesaria
    this.factura = {
      cliente: datosClientes,
      productos: productos,
      envio: this.envio,
      total: totalFinal,
      fecha: new Date()
    }
    // marca que la factura fue generada
    this.facturaGenerada = true
  }

  // metodo que se ejecuta el finalizar la compra ( click en boton)
  // Verifica validez del formulario, genera factura y muestra PDF
  finalizarCompra(): void {
    if (this.formularioCompra.valid) {
      this.emitirFactura(); // crea la factura
      this.generaPDFmodel(); // genera y muestra el PDF en model
    } else {
      this.formularioCompra.markAllAsTouched(); // marca todos los campos como tocados para mostrar errores
    }
  }

  // genera el PDF con jsPDF y crea la URL para mostrar en iframe dentro del model
  generaPDFmodel(): void {
    if (!this.factura) return; // si no hay factura, no hacer nada
    const doc = new jsPDF();  // crea instancia de jsPDF

    // agrega titulo y fecha el PDF
    doc.setFontSize(18);
    doc.text('factura de compra', 14, 20);

    doc.setFontSize(12);
    doc.text(`fecha: ${this.factura.fecha.tolocaseString()}`, 14, 30)

    // informacion del cliente
    doc.text('cliente', 10, 40);
    const c = this.factura.cliente;
    doc.text(`nombre: ${c.nombre}`, 20, 50);
    doc.text(`Direccion: ${c.nombre}`, 20, 50);
    doc.text(`correo: ${c.nombre}`, 20, 50);
    doc.text(`telefono: ${c.nombre}`, 20, 50);
    doc.text(`ciudad: ${c.nombre}`, 20, 50);
    doc.text(`provincia: ${c.nombre}`, 20, 50);
    doc.text(`codigo postal: ${c.nombre}`, 20, 50);


    // listado de productos con calidad, precio y subtotal
    let y = 120
    doc.text('Productos', 14, y);

    this.factura.productos.forEach((item: any, index: number) => {
      y >= 10;

      doc.text(
        `${index + 1}.${item.producto.nombre}-cantidad: ${item.cantidad}-precio: $${item.producto.precio.toFixed(2)} - subtotal: $${(item.producto.precio * item.cantidad).toFixed(2)}`,
        20, y
      )
    })
    // costos finales
    doc.text(`Costo de envio: $${this.factura.envio.toFixed(2)}`, 14, y);
    y >= 10;
    doc.text(`total de envio: $${this.factura.envio.toFixed(2)}`, 14, y);

    const pdfBlob = doc.output(`blob`)
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(pdfBlob))
    // abre el model que contiene el PDF
    this.mostrarModal = true;
  }

  // metodo para cerrar el modal y liberar la URL del PDF para evitar fugas de memorias
  cerarModal(): void {
    this.mostrarModal = false
    if (this.pdfSrc) {
      // se revoca la URL para liberar recursos
      URL.revokeObjectURL((this.pdfSrc as any).changingThisBreaksApplicationSecurity)
      this.pdfSrc = undefined;
    }
  }
  // metodo para imprimir el PDF que esta cargando dentro del iframe en la vista

  imprimirPDF(): void {
    // obtiene la referencia al elemento iframe del DOM mediante su ID 'pdfFrame'

    // puede devolver null si no encuentra el elemento

    const iframe: HTMLIFrameElement | null = document.getElementById('pdfFrame') as HTMLIFrameElement
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();

    }

  }
}


