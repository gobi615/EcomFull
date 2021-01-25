import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Order } from '../model/order';
import { OrderService } from '../order.service';
import { PaymentService } from '../payment-service';

@Component({
  selector: 'app-order-sucess',
  templateUrl: './order-sucess.component.html',
  styleUrls: ['./order-sucess.component.css']
})
export class OrderSucessComponent implements OnInit {
  userSubscription: any;
  userId: string;
  queryParam;

  constructor( private route : ActivatedRoute, private orderService : OrderService, private router : Router ) 
{ 
  this.queryParam = this.route.snapshot.queryParams;
    if(this.queryParam['status'] === 'pass'){
        this.orderService.placeOrder({});
        this.router.navigate(['/get'])
    }
  }

  ngOnInit() {
  }

}
