import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './pages/information/information.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: OrdersComponent },
  { path: 'information', component: InformationComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  // { path: '/product-detail', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
