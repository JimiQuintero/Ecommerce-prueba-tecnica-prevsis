import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent {
  public products!: any[];

  _cart = inject(CartService);
  _router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this._cart.getProduct().subscribe((resp) => {
      //console.log(resp);
      this.products = resp;
    });
  }

  backToProducts() {
    this._router.navigate(['/home']);
  }

  goToInformation() {
    this._router.navigate(['/information']);
  }
}
