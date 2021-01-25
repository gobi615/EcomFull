import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderService } from './order.service';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module.module';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { RouterModule } from '@angular/router';
import { PaymentService } from './payment-service';



@NgModule({
  declarations: [
    CartComponent,
    CartSummaryComponent,
    CheckoutComponent,
    OrderSucessComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,BrowserModule,MaterialModule,FormsModule,RouterModule

  ],
  providers : [
    OrderService,AuthGuardService,PaymentService 
  ]
})
export class CheckoutModule { }
