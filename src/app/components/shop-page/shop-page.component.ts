import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})


export class ShopPageComponent {
  constructor(private cartService: CartServiceService) {}

  productos:any [] = [];
  carrito: any[] = [];

  ngOnInit() {
    this.productos = this.cartService.getProducts();
  }

  agregarProducto(producto: any): void {
    this.cartService.addToCart(producto);
    console.log('Producto agregado al carrito desde app-shop-page:', producto);
  }
}
