import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangingPageComponent } from './components/langing-page/langing-page.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { CartShopComponent } from './components/cart-shop/cart-shop.component';
import { ProductDescriptionComponent } from './page/product-description/product-description.component';

const routes: Routes = [
  { path: '', component: LangingPageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'cart', component: CartShopComponent },
  { path: 'product/:id', component: ProductDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
