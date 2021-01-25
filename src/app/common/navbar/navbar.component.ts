import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { User } from 'src/app/auth/model/user';
import { ShoppingCartService } from 'src/app/shoppingcart/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appUser: User;
  
  @Input('cart') cart;

  constructor(public dialog: MatDialog,private auth : AuthService, private cartService : ShoppingCartService ) {}

  openDialog() {
    this.dialog.open(LoginComponent);
  }

  ngOnInit() {   
    this.auth.appUser$
    .subscribe(appUser => {
     this.appUser = appUser;    
    });
  }

  logout(){
    this.auth.logout();
  }

  search(value){
    console.log(value)
  }


}
