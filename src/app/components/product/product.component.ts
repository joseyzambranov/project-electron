import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() producto: any;
  @Output() agregarCarrito = new EventEmitter<any>();
  constructor(private router: Router) {}
  

  addToCart(): void {
    const productId = this.producto.id;
    this.router.navigate(['/product', productId]);
    //this.agregarCarrito.emit(this.producto);
  }

}
