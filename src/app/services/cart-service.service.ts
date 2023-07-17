import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  items: any[] = [];

  products = [
    { id: 1, nombre: 'Producto 1', precio: 10, descripcion: 'Descripción del producto 1  Sumérgete en nuestro canal de YouTube, donde encontrarás tutoriales en video, demostraciones prácticas y consejos para ampliar tus conocimientos y mejorar tus habilidades en electrónica.' },
    { id: 2, nombre: 'Producto 2', precio: 20, descripcion: 'Descripción del producto 2  Sumérgete en nuestro canal de YouTube, donde encontrarás tutoriales en video, demostraciones prácticas y consejos para ampliar tus conocimientos y mejorar tus habilidades en electrónica.' },
    { id: 3, nombre: 'Producto 3', precio: 30, descripcion: 'Descripción del producto 3  Sumérgete en nuestro canal de YouTube, donde encontrarás tutoriales en video, demostraciones prácticas y consejos para ampliar tus conocimientos y mejorar tus habilidades en electrónica.' },
    { id: 4, nombre: 'Producto 4', precio: 40, descripcion: 'Descripción del producto 4  Sumérgete en nuestro canal de YouTube, donde encontrarás tutoriales en video, demostraciones prácticas y consejos para ampliar tus conocimientos y mejorar tus habilidades en electrónica.' }
  ];

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

  getProducts() {
      return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }


  constructor() { }
}
