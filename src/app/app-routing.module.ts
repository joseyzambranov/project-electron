import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangingPageComponent } from './components/langing-page/langing-page.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';

const routes: Routes = [
  { path: '', component: LangingPageComponent },
  { path: 'shop', component: ShopPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
