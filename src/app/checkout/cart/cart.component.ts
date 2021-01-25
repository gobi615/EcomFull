import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/shoppingcart/model/shopping-cart';
import { ShoppingCartService } from 'src/app/shoppingcart/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns : String[] = ['title', 'price', 'quantity', 'total'] ;
  cart$ :Observable<ShoppingCart> ; 
  cart = [] ; 
  datasource;
  temp = 'global';

  constructor(private cartService : ShoppingCartService) {
    this.init();    
   }

  ngOnInit() {   
  }

  async init(){
    console.log('Calling getcart');
    this.cart$ = await this.cartService.getCart(2);
    console.log('cart$$$$'+JSON.stringify(this.cart$))
    this.cart$.subscribe(item => {
      console.log("this.datasource"+this.datasource+","+item.key);
      this.datasource = new MatTableDataSource(item.items);     
    });  
  }

}
