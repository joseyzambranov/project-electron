import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CartServiceService } from 'src/app/services/cart-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScreenSmall: boolean | undefined;
  //cartItemCount: number = 0;

  constructor(private breakpointObserver: BreakpointObserver,private cartService: CartServiceService) {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isScreenSmall = result.matches;
    });
    //this.cartItemCount = this.cartService.getItems().length;
    
  }

  get cartItemCount(): number {
    return this.cartService.getItems().length;
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  openMenu() {
    // Aquí puedes implementar la lógica para abrir el menú colapsado
  }
}
