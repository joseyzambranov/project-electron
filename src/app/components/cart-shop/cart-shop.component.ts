import { Component, Input } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.css']
})
export class CartShopComponent {

  constructor(private cartService: CartServiceService) {
 
  }
  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    
  }
  get cartTotal(): number {
    return this.cartService.getTotal();
  }

  get cartItems(): any[] {
    return this.cartService.getItems();
  }

  get isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }

  showError() {
    Swal.fire({
      icon: 'error',
      title: 'Estamos trabajando para brindarte un mejor servicio',
      text: 'Los pagos por ahora no están habilitados, disculpe las molestias',
    });
  }
  

}
