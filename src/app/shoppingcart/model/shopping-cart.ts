import { Book } from "src/app/core/model/book";
import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart{
    items: ShoppingCartItem[] = [];
    key ;

    constructor(private itemsMap : { [bookID : string] : ShoppingCartItem}, key){
        this.itemsMap = itemsMap || {} ; 
        this.key = key ; 

        for(let bookID in itemsMap){
            let item = itemsMap[bookID];
            this.items.push(new ShoppingCartItem({ ...item, bookID: bookID }));
        }

    }

    getQuantity(book : Book){
        let item = this.itemsMap[book.bookID];
        return item ? item.quantity : 0;
    }

    get totalPrice() {
        let sum = 0;
        for (let bookID in this.items) 
          sum += this.items[bookID].totalPrice;
        return sum;
    }
      
    get totalItemsCount() {
        let count = 0;
        for (let bookID in this.itemsMap) 
            count += this.itemsMap[bookID].quantity;
        return count;
    }
    
    get itemsCount(){
    return this.items.length;
    }

    
}