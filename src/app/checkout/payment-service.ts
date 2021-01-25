import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { UserService } from "../auth/user.service";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {  

  appUser;

  constructor(private http : HttpClient, private authService : AuthService) { 
    this.authService.appUser$
    .subscribe(appUser => {
     this.appUser = appUser;    
    });
  }

  createPayment(phno, amount){
      console.log('phno'+phno)
    return this.http.post("https://fullstackecombe.herokuapp.com/api/createPayment", {
        name : this.appUser.name,
        email : this.appUser.email,
        currency : 'INR',
        phno :phno,
        amount :amount,
        redirectedTo : 'https://ecomfullstack.herokuapp.com/orderpass?status=pass'        
    })
  }

  makePayment(url) : any{
    return this.http.post(url,{});
  }

  
}
