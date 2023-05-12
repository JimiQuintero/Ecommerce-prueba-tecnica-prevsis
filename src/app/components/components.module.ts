import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  declarations: [
    CartComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ProductListComponent,
    StarRatingComponent,
    ContactInformationComponent,
    PaymentsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NavbarComponent,
    ProductListComponent,
    ContactInformationComponent,
    CartComponent,
    PaymentsComponent,
  ],
})
export class ComponentsModule {}
