import { Component, OnInit } from '@angular/core';
import { RentalbookService } from '../rentalbook.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public books;
  public titleBook;
  public descriptionBook;
  public priceBook;
  constructor(private rentalbookService: RentalbookService) { }
  
  ngOnInit(): void {
    this.callBooks();
    
  }

  callBooks() {
    this.rentalbookService.getBooks().subscribe((data: Array<Object>) => {
      console.log(data);
      this.books = data;
    });
  }

  registerBook(){
    const title = this.titleBook;
    const description = this.descriptionBook;
    const price = this.priceBook;

    if(title.trim().length == 0){

      return;
    }else if(description.trim().length == 0){

      return;
    }else if(price.trim().length == 0 || price < 0){
      
      return;
    }else{

      
    }
  }

}
