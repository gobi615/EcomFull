import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { BookService } from '../books-service';
import { Book } from '../model/book';

@Component({
  selector: 'app-filter-book',
  templateUrl: './filter-book.component.html',
  styleUrls: ['./filter-book.component.css']
})
export class FilterBookComponent implements OnInit {

  images : any = []
  books : Observable<any> ;
  filteredBooks = [];
  unFilteredbooks = [];
  queryParam ;


  // checked = true;
  constructor(private bookService : BookService, private route: ActivatedRoute) { 
    this.queryParam = this.route.snapshot.queryParams;
   
    this.books = this.getProducts();
      
  }

  getProducts(){
      return this.bookService.getImageUrl().pipe(mergeMap(url => {
          this.images = url;
          console.log("route:"+this.queryParam.search);
          return this.bookService.getProducts().pipe(map( books =>{
            books = this.assignImage(books);
            if(this.queryParam){
              if(this.queryParam.sort === 'rating'){
                    books = this.sortByRating(books);
              }else if(this.queryParam.search){
                    books = this.searchByTitle(this.queryParam.search, books);
              }
            }            
            return books.slice(0,150);
          }));        
    }))
    
    
    // .subscribe(params => {
    //   console.log('gobi---');
    //   if(params.get('sort') === 'rating'){
    //     this.sortByRating();
    //   }else if(params.get('search')){
    //     this.searchByTitle(params.get('search'));
    //   }
    //   this.books = this.books.map(data => data.slice(0,10));
    //   }); 

  }

  assignImage(books){
    return books.map(book =>{
      book.url = this.images[Math.floor(Math.random()*10)].Image ;
      return book;
    }) ;
  }

  searchByTitle(word, books : Book[]){
     return books.filter(book => {
        return book.title.toString().indexOf(word) > -1 ;
      }) ;
  }

  sortByRating(books){
    return books.sort((a,b) => {
      if(a.average_rating == b.average_rating)
        return 0;
      if(a.average_rating > b.average_rating)
        return -1; 
        return 1;
    })
  }
  // map(data =>{      
  //   return data.slice(0,10)

  ngOnInit() {

  }

}
