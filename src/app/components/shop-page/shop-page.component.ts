import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})


export class ShopPageComponent {
  constructor(private cartService: CartServiceService) {}

  productos = [
    { id: 1, nombre: 'Producto 1', precio: 10,  },
    { id: 2, nombre: 'Producto 2', precio: 20,  },
    { id: 3, nombre: 'Producto 3', precio: 30,  },
    { id: 4, nombre: 'Producto 4', precio: 40,  }
  ];
  carrito: any[] = [];

  agregarProducto(producto: any): void {
    this.cartService.addToCart(producto);
    console.log('Producto agregado al carrito desde app-shop-page:', producto);
  }
}
