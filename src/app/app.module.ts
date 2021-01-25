import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModle } from './common/common-module';
import { CoreModule } from './core/core-module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

import { ShoppingcartComponent } from './shoppingcart/shoppingcart/shoppingcart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {environment} from '../environments/environment' ;
import {AngularFireModule} from '@angular/fire' ;
import { AuthModule } from './auth/auth.module';
import { ShoppingCartModule } from './shoppingcart/shopping-cart-module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MaterialModule } from './material-module.module';
import { FilterBookComponent } from './core/filter-book/filter-book.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CheckoutModule } from './checkout/checkout-module';
import { CartComponent } from './checkout/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { OrderSucessComponent } from './checkout/order-sucess/order-sucess.component';
import { AuthGuardService } from './checkout/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,  
    LoginComponent,
    FilterBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModle,
    CoreModule,
    AuthModule,
    ShoppingCartModule,    
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MaterialModule,
    RouterModule.forRoot([
      {path : '',  component : FilterBookComponent},
      {path : 'get', component : FilterBookComponent},
      {path:'cart', component: CartComponent},
      {path:'checkout', component: CheckoutComponent, canActivate: [AuthGuardService]},
      {path:'orderpass', component: OrderSucessComponent, canActivate: [AuthGuardService]}
    
    ]),
    BrowserAnimationsModule,
    MatRadioModule,
    MatSlideToggleModule,CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [
    LoginComponent
  ]
})
export class AppModule { }
