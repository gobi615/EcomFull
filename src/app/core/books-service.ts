import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import {map, mergeMap, switchMap} from 'rxjs/operators'
import { Book } from './model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  configUrl = 'assets/config.json';
  bookServiceUrl:string = null;
  bookImageServiceUrl:string = null;
  serviceUrl : Observable<any>;

  constructor(private http : HttpClient) {
    this.serviceUrl = http.get(this.configUrl)
    // .subscribe((data)=>{
      // this.bookServiceUrl = data['bookServiceEndPoint'];
      // this.bookImageServiceUrl = data['bookImageServiceEndPoint'];
    // });    
    }

    getProducts() : Observable<Book[]>{
      // console.log(this.bookServiceUrl);
      return this.serviceUrl.pipe(mergeMap(config => {
        return this.http.get<Book[]>(config['bookServiceEndPoint']) ;
      })) ;
      
      // .http.get<Book[]>("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json");
    }
    getImageUrl(){
      return this.serviceUrl.pipe(mergeMap(config => { 
        return this.http.get(config['bookImageServiceEndPoint'])
      }));
      
    }
   
}
