import { Component, Input } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.css']
})
export class CartShopComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartServiceService) {

    this.cartItems = this.cartService.getItems();
  console.log("this.cartItems",this.cartItems)
  }
  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }
  get cartTotal(): number {
    return this.cartService.getTotal();
  }
}
