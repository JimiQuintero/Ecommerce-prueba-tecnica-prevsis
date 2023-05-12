import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [HomeComponent, InformationComponent, OrdersComponent, PaymentComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
