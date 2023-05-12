import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public producList = new BehaviorSubject<any>([]);
  public cartItemList: any = [];

  constructor() {}

  //Get
  getProduct() {
    return this.producList.asObservable();
  }

  //Add to Cart
  addToCart(product: Product) {
    this.cartItemList.push(product);
    this.producList.next(this.cartItemList);
  }
}
