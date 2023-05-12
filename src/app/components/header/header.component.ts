import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  _cart = inject(CartService);

  public totalItem = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this._cart.getProduct().subscribe((resp) => {
      this.totalItem = resp.length;
    });
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
