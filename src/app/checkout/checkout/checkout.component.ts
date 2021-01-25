import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/shoppingcart/model/shopping-cart';
import { ShoppingCartService } from 'src/app/shoppingcart/shopping-cart.service';

import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart$ : Observable<ShoppingCart>;
  userSubscription: Subscription;
  
  constructor(private cartService : ShoppingCartService) { }

  async ngOnInit(){
    this.cart$ = await this.cartService.getCart();       
  }
}
