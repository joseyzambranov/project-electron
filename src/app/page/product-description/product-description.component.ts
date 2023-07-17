import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {
  productId: number | undefined;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: CartServiceService,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.product = this.productService.getProductById(this.productId);
    });
  }

  addToCart(): void {
    this.productService.addToCart(this.product)
    this.toastr.success('Se agrego un producto a tu carrito', 'Éxito');
  }
}
