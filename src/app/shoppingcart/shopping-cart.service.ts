import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { take, map } from 'rxjs/operators';

import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../auth/user.service';
import { ShoppingCart } from './model/shopping-cart';
import { Book } from '../core/model/book';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {  

  appUser; 
  uCartId;
  initCart : Promise<Observable<ShoppingCart>> ;
  constructor(private db : AngularFireDatabase, private userService: UserService, private authService: AuthService) { 
    this.initCart = this.getCart();
  }

  async getCart(arg?){
    let cartId = await this.getOrCreateCart();
    console.log("appcpmponent getcart:"+cartId);
    return await this.getShopCart(cartId);
  }

  // async getInitCart(){
    
  // }

  async getShopCart(cartId : string){
    let cart$ = this.db.object<any>('/shopping-cart/'+cartId).snapshotChanges();
    return cart$.pipe(map( cart => {
      if(cart == null){
        localStorage.removeItem("cartId");
        location.reload();                //reload the page
      }
      console.log("cart.payload.val().items 1"+cart.payload.val().items)
      // console.log("cart.payload.val().items 2"+cart.payload.val().items[1].quantity);
      console.log("cart.payload.key"+cart.payload.key);
      let shopKart = new ShoppingCart(cart.payload.val().items,cart.payload.key);
      // localStorage.setItem('kart', JSON.stringify(shopKart));
      // console.log('shopping cart : '+JSON.stringify(shopKart));
     return shopKart; 
    }));
  }
  

  async addToCart(book: Book){
    await this.updateCart(book, 1);
  }

  async updateCart(book :Book, change: number){
    let cartId = await this.getOrCreateCart();
    // console.log(book.bookID);
    let item$ = this.db.object<any>('/shopping-cart/'+cartId+'/items/'+book.bookID);    
    item$.valueChanges().pipe(take(1)).subscribe(item => {
      let quantity =  (item != null) ? item.quantity + change : (change < 0) ? 0 : change ;            
      if(quantity == 0) item$.remove();   
      else item$.update({
        title : book.title,
        price : book.price,       
        quantity : quantity, 
        // imageUrl : book.url      
      });     
    });   
  }

  async getOrCreateCart(){
    // need to create logic like if he login his cart id is stored and get from db. If he is not logged in his anonyms cart is stored in local.
    let cartId = localStorage.getItem('cartId'); 
    console.log('cart: '+cartId);   
    if(!cartId){
      cartId =  await this.getFromUser()
      // console.log(cartId);
      if(cartId){ //get cartId from fb in user object. 
        return cartId;
      }  
      
      let result = await this.createCart();
    
      console.log('cart null: '+result);
      localStorage.setItem('cartId',result.key);    
      this.saveCartToUser(result.key);
      // location.reload();   
      return result.key;
    }
    return cartId;   
  }
  saveCartToUser(cartId: any) {
    this.authService.user$.subscribe(user => {
      if(user){
        console.log('cart id is saving user');
        this.userService.save(user,cartId);
      }         
    });
  } 

  createCart(){
    return this.db.list('/shopping-cart').push({
      dateCreated : new Date().getTime()
    });
  }

  async removeFromCart(book: Book) {
    await this.updateCart(book, -1);
  }

  async clearCart() {
    console.log('clearing')
    let cartId = await this.getOrCreateCart();    
    this.db.object('/shopping-cart/' + cartId + '/items').remove();    
    localStorage.removeItem('cartId');
  }

  async getFromUser() {   
    let cartId : string;   
    this.authService.user$.pipe(take(1)).subscribe(user => {
      console.log('user 1');
      if(user){
        this.appUser = this.userService.get(user.uid);        
        this.appUser.valueChanges().pipe(take(1)).subscribe(async (appuser) => {
          console.log('user 2');
          cartId = appuser.cart;
          let userDbCart = cartId ;
          let localCart = localStorage.getItem('cartId');
          if(localCart != userDbCart){
            console.log('executing 1');
            let shopCart = await this.getShopCart(userDbCart);
            console.log('executing 2'+JSON.stringify(shopCart));
            shopCart.pipe(take(1)).subscribe((cart)=>{
              console.log('executing 3');
              cart.items.forEach(async (item)=> {
                console.log('executing 4');
                await this.updateCart({title : item.title, price : item.price, url : item.imageUrl, bookID : item.bookID,authors : null,average_rating : null, isbn : null, language_code : null, ratings_count : null }, item.quantity);
              });
              this.saveCartToUser(localCart);
            }) ;            
          }          
        });
      }
      
    });     
    return cartId;
   }

  async mergeCart(){    
    let dbCart = await this.getFromUser();
    console.log('user cart : '+dbCart );   
  }
    //merge

    //save local storage and db
    //reload to refelct
  


}
