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
    const index = this.items.findIndex(item => item.id === product.id);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  //getItems() {
  //  return this.items;
  //}

  getItems() {
  let groupedItemsMap = this.items.reduce((map, item) => {
    let existingItem = map.get(item.id);
    console.log({existingItem})
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.precio * existingItem.quantity;
    } else {
      let newItem = { ...item, quantity: 1, totalPrice: item.precio };
      map.set(item.id, newItem);
    }
    return map;
  }, new Map<number, any>());

  return Array.from(groupedItemsMap.values());
}


  getTotal() {
    let total = this.items.reduce((total, item) => total + item.precio, 0);
    return total
  }


  constructor() { }
}
