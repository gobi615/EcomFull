import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { UserService } from './auth/user.service';
import { ShoppingCart } from './shoppingcart/model/shopping-cart';
import { ShoppingCartService } from './shoppingcart/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cart$: Observable<ShoppingCart>;
  cartId: String;

  constructor(private userService: UserService, 
    private auth: AuthService, 
    private router: Router, 
    private cartService: ShoppingCartService){ }

    async ngOnInit(){
      this.cart$ = await this.cartService.getCart();
      this.cartId = 'Hello';
      this.cart$.pipe(map<any,any>(cart => {
        this.cartId = cart.key
        console.log(this.cartId)
      }))
    
}

}
