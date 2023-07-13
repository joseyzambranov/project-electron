import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
    this.getTotal()
  }

  removeFromCart(product: any) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getItems() {

    return this.items;

  }

  getTotal() {
    let total = this.items.reduce((total, item) => total + item.precio, 0);
    return total
  }


  constructor() { }
}
