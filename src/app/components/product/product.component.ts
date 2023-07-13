import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() producto: any;
  @Output() agregarCarrito = new EventEmitter<any>();

  addToCart(): void {
    this.agregarCarrito.emit(this.producto);
    console.log('Producto agregado al carrito desde app-product:', this.producto);
  }

}
