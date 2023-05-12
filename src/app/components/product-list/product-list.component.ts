import { Component, OnInit, inject, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: any = [];

  _productService = inject(ProductService);
  _cart = inject(CartService);

  //productCounterAdd: number = 0;

  constructor() {}

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe((resp) => {
      //console.log(resp);
      this.products = resp;
    });
  }

  //add to cart

  addToCart(productItem: Product) {
    this._cart.addToCart(productItem);
    console.log(productItem);
  }

  /* addToCard() {
    this.productCounterAdd++;
  } */
}
