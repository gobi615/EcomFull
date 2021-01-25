import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shoppingcart/shopping-cart.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, public dialog: MatDialog, private router : Router, private cartService : ShoppingCartService) { }

  ngOnInit() {
  }

  async login(){
    console.log(1)
    await this.auth.login('gauth');
     this.auth.appUser$.subscribe(user => {
       if(user){
         this.router.navigateByUrl('/');
         this.dialog.closeAll();
       }
         
     }) ;
     
   }

}
