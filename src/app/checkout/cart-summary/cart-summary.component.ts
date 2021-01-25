import { Component, OnInit, Input } from '@angular/core';


import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ShoppingCart } from 'src/app/shoppingcart/model/shopping-cart';
import { Order } from '../model/order';
import { OrderService } from '../order.service';
import { PaymentService } from '../payment-service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  @Input('cart') cart: ShoppingCart; 
  userSubscription: any;
  userId: string;

  constructor( 
              private router : Router, 
              private orderService : OrderService,
              private authService : AuthService, 
              private payService :PaymentService) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  placeOrder(shipping, amt){
    this.payService.createPayment(shipping.ph, amt).subscribe(out =>{
      
      // let order = new Order(this.userId, shipping, this.cart);
      // let result = this.orderService.placeOrder(order);
      window.location.href = out['response'].paymentOptions.paymentUrl;
      // this.router.navigate(['/orderpass']);
       // console.log(response);
    })
    // let order = new Order(this.userId, shipping, this.cart);
    // let result = this.orderService.placeOrder(order);

   // this.router.navigate(['/orderpass']);
    
  }

  onSubmit(f){}

}
