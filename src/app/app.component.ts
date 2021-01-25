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
      setTimeout(async()=>{
        this.cart$ = await this.cartService.getCart();
      this.cartId = 'Hello';
      console.log('Gobi Gobi app')
      this.cart$.pipe(map(cart => {
        this.cartId = cart.key
        console.log("from app"+this.cartId)
      }))
      },100);
      

}

// onOutletLoaded(component){
//         component.cart$ = this.cart$;
//         component.cartService = this.cartService;
// }

}
