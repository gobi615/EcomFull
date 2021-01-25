import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../books-service';
import {Book} from "../model/Book";
import {map, take ,mergeMap} from 'rxjs/operators'
import { Input } from '@angular/core';
import { ShoppingCart } from 'src/app/shoppingcart/model/shopping-cart';
import { ShoppingCartService } from 'src/app/shoppingcart/shopping-cart.service';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


count = 0;
@Input('books') books;
@Input('images') images;

cart$ : Observable<ShoppingCart>;
innerWidth: any;
prdCol;

// image = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/red-book-hi8d6431a.png';

  constructor( private cartService:ShoppingCartService) {    
    this.initCart();
  }

  ngOnInit() {      
    this.innerWidth = window.innerWidth;  
    this.getprdCol();
  }

  getRandomImage(){
    let img = this.images[Math.floor(Math.random()*10)].Image ;
    console.log(img);
    return img;
  }

  async initCart(){
    this.cart$ = await this.cartService.getCart();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.getprdCol();
  }

  getprdCol(){
    if(this.innerWidth < 599 )
      this.prdCol = 1;
    else if(this.innerWidth < 959 )
      this.prdCol = 2;
    else if(this.innerWidth < 1279 )
      this.prdCol = 3;
    else if(this.innerWidth < 1919 )
      this.prdCol = 4;
    else if(this.innerWidth < 5000 )
      this.prdCol = 5;
  }
  addOne(book: Book){
    this.cartService.addToCart(book);
    // this.cartService.
  }
  removeOne(book: Book){
    this.cartService.removeFromCart(book);
  }
}
